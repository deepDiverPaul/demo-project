<template>
  <div class="questionnaire--section">
    <div class="">
      <div class="is-size-4">{{section.title}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">


import { SectionInterface } from '@/models/forms/checklist/items/Section.interface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  section: SectionInterface,
}>();

</script>
