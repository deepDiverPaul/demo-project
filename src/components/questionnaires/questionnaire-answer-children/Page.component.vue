<template>
  <div class="questionnaire--page">
    <ItemComponent
      v-for="item in items"
      :key="item.uuid"
      :item="item"/>
  </div>
</template>

<script setup lang="ts">
import ItemComponent from '@/components/questionnaires/questionnaire-answer-children/Item.component.vue';
import { computed } from 'vue';
import { PageInterface } from '@/models/forms/checklist/Page.interface';

const props = defineProps<{
  page: PageInterface
}>();

const items = computed(() => props.page.items);

</script>
