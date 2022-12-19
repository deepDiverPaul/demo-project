import { FormInterface } from '@/models/forms/Form.interface';
import { PageInterface } from '@/models/forms/checklist/Page.interface';
import { ItemType } from '@/models/forms/checklist/Items.d';
import { QuestionnaireInterface } from '@/models/questionnaires/Questionnaire.interface';

const flattenItems = (items: ItemType[]): ItemType[] => {
  const flatItems: ItemType[] = [];
  items.forEach((i) => {
    flatItems.push(i);
    if (i.type === 'section') {
      flatItems.push(...flattenItems(i.items));
    }
  });
  return flatItems;
};

const questionnaireExtractFlatPages = (form: FormInterface): PageInterface[] => form
  .checklist.form.items.map((item) => {
    const page: PageInterface = { ...item };
    page.items = flattenItems(item.items);
    return page;
  });

const questionnaireUpdateResponseByUuid = (
  responses: QuestionnaireInterface,
  uuid: string,
  response: string | number | boolean | null,
): QuestionnaireInterface => {
  const res: QuestionnaireInterface = { ...responses };
  const index = res.items
    .findIndex((r) => r.uuid === uuid);
  if (index >= 0) {
    res.items[index].response = response;
  } else {
    res.items.push({
      uuid,
      response,
    });
  }
  return res;
};

const questionnaireValidate = (
  pages: PageInterface[],
  response: QuestionnaireInterface,
): boolean => {
  const respondedUuids = response.items.map((item) => item.uuid);
  return pages.every((page) => page.items.every(
    (item: ItemType) => {
      if (item.type !== 'question') return true;
      if (item.required === false) return true;
      return respondedUuids.includes(item.uuid);
    },
  ));
};

export { questionnaireExtractFlatPages, questionnaireUpdateResponseByUuid, questionnaireValidate };
