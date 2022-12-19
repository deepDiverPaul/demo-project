<template>
  <div class="form-editor--item-props">
    <div class="handle">
      <svg width="32" height="32" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M19 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm22-32a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" clip-rule="evenodd"/></svg>
    </div>
    <div class="form-editor--item-prop__drag">{{title}}</div>
    <input
      class="input form-editor--item-prop__static"
      type="text" v-model="title" :title="item.uuid">
    <button
      class="collapse form-editor--item-prop__static"
      @click="collapsed = !collapsed"
    >
      <svg v-if="collapsed" width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 42H6V26M26 6h16v16"/></svg>
      <svg v-else width="32" height="32" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 20H28V4M4 28h16v16"/></svg>
    </button>
    <button class="copy form-editor--item-prop__static" @click="copy">
      <svg width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M13 12.432v-4.62A2.813 2.813 0 0 1 15.813 5h24.374A2.813 2.813 0 0 1 43 7.813v24.375A2.813 2.813 0 0 1 40.187 35h-4.67"/><path d="M32.188 13H7.811A2.813 2.813 0 0 0 5 15.813v24.374A2.813 2.813 0 0 0 7.813 43h24.375A2.813 2.813 0 0 0 35 40.187V15.814A2.813 2.813 0 0 0 32.187 13Z"/></g></svg>
    </button>
  </div>
  <draggable
    class="dragArea"
    tag="div"
    :list="items"
    :group="{ name: 'form' }"
    @change="changed"
    v-if="!collapsed"
    handle=".handle"
    item-key="uuid">
    <template #item="{ element }">
      <ItemComponent
        :level="0"
        :item="element"/>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import ItemComponent from '@/components/forms/form-edit-children/Item.component.vue';
import { computed, ref } from 'vue';
import { ItemType } from '@/models/forms/checklist/Items.d';
import draggable from 'vuedraggable';
import { MutationType } from '@/models/store';
import { useFormsStore } from '@/store/forms';
import { FormVueDraggableEvent } from '@/store/forms/methods';
const formsStore = useFormsStore();

const collapsed = ref<boolean>(false);

const props = defineProps<{
  item: ItemType,
  level: number
}>();

const items = computed(() => props.item.items);

const title = computed({
  get: () => props.item.title,
  set: (data: string) => {
    formsStore.action(MutationType.forms.updateItem, {
      uuid: props.item.uuid,
      item: { ...props.item, title: data },
    });
  },
});

const changed = (action: FormVueDraggableEvent) => {
  formsStore.action(MutationType.forms.updateItems, {
    uuid: props.item.uuid,
    action,
  });
};

const copy = () => {
  formsStore.action(MutationType.forms.copyItem, {
    uuid: props.item.uuid,
  });
};

</script>

<style scoped lang="scss">

</style>
