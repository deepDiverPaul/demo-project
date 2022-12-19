<template>
  <div class="">
    <div class="">
      <div class="buttons">
        <button
        v-for="(r, index) in responses"
        :key="index"
        class="button is-small"
        :class="res === r.value ? r.classSelected : r.class"
        @click="res=r.value"
        >{{ r.label }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { computed } from 'vue';
import { QuestionListResponseInterface } from '@/models/forms/checklist/items/response-types';

const emit = defineEmits<{(e: 'respond', res: string | number | boolean | null): void }>();

const props = defineProps<{
  question: QuestionListResponseInterface,
  response: string | number | boolean | null
}>();

const responses = [
  {
    value: 1,
    label: 'yes',
    class: 'is-success is-light',
    classSelected: 'is-success',
  },
  {
    value: -1,
    label: 'no',
    class: 'is-danger is-light',
    classSelected: 'is-danger',
  },
  {
    value: 0,
    label: 'n/a',
    class: 'is-light',
    classSelected: 'is-dark',
  },
];

const res = computed({
  get: () => props.response,
  set: (val) => emit('respond', val),
});
</script>

<style scoped lang="scss">
button {
  @apply flex items-center;
}
</style>
