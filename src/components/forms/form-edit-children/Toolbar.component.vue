<template>
  <div class="form-editor--toolbar">
    <draggable
      class="dragAreaCreate"
      tag="div"
      :list="newItems"
      :group="{ name: 'form', pull: 'clone', put: false }"
      :clone="updateUuid"
      item-key="type">
      <template #item="{ element }">
        <div class="form-editor--toolbar-item">
          {{ element.title }}
        </div>
      </template>
    </draggable>
    <draggable
      class="dragAreaRemove"
      tag="div"
      :list="[]"
      :group="{ name: 'form', pull: false, put: true }"
      :clone="updateUuid"
      handle=".handle"
      item-key="type">
      <template #header>
        <div class="form-editor--toolbar-icon">
          <TrashIcon />
        </div>
      </template>
      <template #item="{ element }">
        <div class="form-editor--toolbar-item">
          {{ element.title }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import { ItemType } from '@/models/forms/checklist/Items.d';
import { FormSectionTemplate } from '@/models/forms/checklist/items/templates/Section.template';
import { v4 as uuidv4 } from 'uuid';
import { FormQuestionTemplate } from '@/models/forms/checklist/items/templates/Question.template';
import { TrashIcon } from '@heroicons/vue/outline';

const newItems: ItemType[] = [
  FormSectionTemplate(),
  FormQuestionTemplate(),
];

const updateUuid = (item: ItemType): ItemType => ({ ...item, uuid: uuidv4() });

</script>

<style scoped lang="scss">
.form-editor--toolbar {
  @apply flex justify-between;
}
.form-editor--toolbar-item {
  @apply p-2 border border-solid rounded inline-block mb-4;
}
.dragAreaCreate {
  @apply flex gap-2;
  .form-editor--toolbar-item {
    @apply bg-green-100 border-green-900 cursor-grab;
  }
}
.dragAreaRemove {
  @apply flex border border-solid rounded gap-2 w-20 h-10 bg-red-100 border-red-900 relative;
  .form-editor--toolbar-icon {
    @apply absolute h-6 w-6 left-7 top-2;
  }
  .form-editor--item.sortable-chosen.sortable-ghost {
    display: none !important;
  }
}
</style>
