<template>
  <div class="block">
    <SectionComponent v-if="item.type ===  'section'" :section="item" />
    <QuestionComponent v-if="item.type ===  'question'" :question="item" />
  </div>
</template>

<script setup lang="ts">

import { ItemType } from '@/models/forms/checklist/Items.d';

import SectionComponent from './item-children/Section.component.vue';
import QuestionComponent from './item-children/Question.component.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  item: ItemType,
}>();

</script>

<style scoped lang="scss">

</style>
