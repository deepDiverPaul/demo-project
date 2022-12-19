<template>
  <div class="form-editor--item">
    <QuestionComponent v-if="item.type === 'question'" :item="item" :level="level" />
    <SectionComponent v-if="item.type === 'section'" :item="item" :level="level" />
  </div>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/forms/form-edit-children/item-children/Section.component.vue';
import QuestionComponent from '@/components/forms/form-edit-children/item-children/Question.component.vue';

import { ItemType } from '@/models/forms/checklist/Items.d';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  item: ItemType,
  level: number
}>();

</script>

<style lang="scss">
.form-editor--item {
  @apply mb-4;
  &:last-of-type {
    @apply mb-0;
  }
  .form-editor--item-props {
    @apply flex items-center;
    .handle {
      @apply h-6 w-6 cursor-grab mr-2;
    }
    .handle,
    .copy,
    .collapse {
      svg {
        @apply h-6 w-6;
      }
    }
    .input {
      @apply border-0 shadow-none border-b;
    }
    button.copy,
    button.collapse {
      @apply bg-white ml-2 cursor-pointer border-none p-2;
    }
  }
}
</style>
