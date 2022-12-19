import { ItemType } from '@/models/forms/checklist/Items.d';
import { FormInterface } from '@/models/forms/Form.interface';
import { PageInterface } from '@/models/forms/checklist/Page.interface';
import { v4 as uuidv4 } from 'uuid';

interface FormVuedraggableAddedEventInterface {
  added: {
    element: ItemType
    newIndex: number
  }
}

interface FormVuedraggableRemovedEventInterface {
  removed: {
    element: ItemType
    oldIndex: number
  }
}

interface FormVuedraggableMovedEventInterface {
  moved: {
    element: ItemType
    newIndex: number
    oldIndex: number
  }
}

export type FormVueDraggableEvent = FormVuedraggableAddedEventInterface |
                                    FormVuedraggableRemovedEventInterface |
                                    FormVuedraggableMovedEventInterface;

const replaceUuidsRecursive = (item: ItemType) => {
  const el: ItemType = JSON.parse(JSON.stringify(item));
  el.uuid = uuidv4();
  if (el.type === 'section') el.items.map(replaceUuidsRecursive);
  return el;
};

const copyItemByUuid = (
  elements: ItemType[],
  uuid: string,
) => {
  const els = elements;
  els.map((el) => {
    if (el.type === 'section') return copyItemByUuid(el.items, uuid);
    return el;
  });
  const index = els.findIndex((item) => item.uuid === uuid);
  if (index >= 0) {
    els.splice(index + 1, 0, replaceUuidsRecursive(els[index]));
  }
  return els;
};

const updateItemByUuid = (
  elements: ItemType[],
  uuid: string,
  item: ItemType,
) => {
  const els = elements;
  els.map((el) => {
    if (el.type === 'section') return updateItemByUuid(el.items, uuid, item);
    return el;
  });
  const index = els.findIndex((it) => it.uuid === uuid);
  if (index >= 0) {
    els[index] = JSON.parse(JSON.stringify(item));
  }
  return els;
};

const addItemToUuid = (
  element: PageInterface | ItemType,
  uuid: string,
  action: FormVuedraggableAddedEventInterface,
) => {
  const el: PageInterface | ItemType = JSON.parse(JSON.stringify(element));
  if (el.type === 'section' || el.type === 'page') {
    if (el.uuid === uuid) {
      el.items.splice(action.added.newIndex, 0, action.added.element);
      return el;
    }
    el.items.map((e: ItemType) => addItemToUuid(e, uuid, action));
  }
  return el;
};

const removeItemFromUuid = (
  element: PageInterface | ItemType,
  uuid: string,
  action: FormVuedraggableRemovedEventInterface,
) => {
  const el: PageInterface | ItemType = JSON.parse(JSON.stringify(element));
  if (el.type === 'section' || el.type === 'page') {
    if (el.uuid === uuid) {
      el.items.splice(action.removed.oldIndex, 1);
      return el;
    }
    el.items.map((e: ItemType) => removeItemFromUuid(e, uuid, action));
  }
  return el;
};

const moveItemInUuid = (
  element: PageInterface | ItemType,
  uuid: string,
  action: FormVuedraggableMovedEventInterface,
) => {
  const el: PageInterface | ItemType = JSON.parse(JSON.stringify(element));
  if (el.type === 'section' || el.type === 'page') {
    if (el.uuid === uuid) {
      el.items.splice(action.moved.newIndex, 0, el.items.splice(action.moved.oldIndex, 1)[0]);
      return el;
    }
    el.items.map((e: ItemType) => moveItemInUuid(e, uuid, action));
  }
  return el;
};

const formUpdateItems = (
  source: FormInterface,
  uuid: string,
  action: FormVueDraggableEvent,
): FormInterface => {
  const form: FormInterface = JSON.parse(JSON.stringify(source));
  if (action) {
    if ('added' in action) {
      form.checklist.form.items
        .map((p) => addItemToUuid(p, uuid, action));
    }
    if ('removed' in action) {
      form.checklist.form.items
        .map((p) => removeItemFromUuid(p, uuid, action));
    }
    if ('moved' in action) {
      form.checklist.form.items
        .map((p) => moveItemInUuid(p, uuid, action));
    }
  }
  return JSON.parse(JSON.stringify(form));
};

const formUpdateItem = (
  source: FormInterface,
  uuid: string,
  item: ItemType,
): FormInterface => {
  const form: FormInterface = JSON.parse(JSON.stringify(source));
  form.checklist.form.items.map((page) => updateItemByUuid(page.items, uuid, item));
  return JSON.parse(JSON.stringify(form));
};

const formCopyItem = (
  source: FormInterface,
  uuid: string,
): FormInterface => {
  const form: FormInterface = JSON.parse(JSON.stringify(source));
  form.checklist.form.items.map((page) => copyItemByUuid(page.items, uuid));
  return JSON.parse(JSON.stringify(form));
};

export { formUpdateItems, formCopyItem, formUpdateItem };
