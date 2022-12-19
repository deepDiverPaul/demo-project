<template>
  <div class="">
    <div class="questionnaire--question">
      <div class="questionnaire--question-head is-size-5">
        {{question.title}}
        <span v-if="question.required">*</span>
      </div>
      <component
        :is="questionResponses[question.response_type]"
        :question="question"
        @respond="onChangeResponse"
        :response="response"/>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { computed } from 'vue';
import { QuestionInterface } from '@/models/forms/checklist/items/Question.interface';

import QuestionListResponse from './question-children/QuestionListResponse.component.vue';
import { MutationType } from '@/models/store';
import { useQuestionnairesStore } from '@/store/questionnaires';

const questionnairesStore = useQuestionnairesStore();

const questionResponses = {
  list: QuestionListResponse,
};

const props = defineProps<{
  question: QuestionInterface,
}>();

const response = computed(() => {
  const index = questionnairesStore.state.response?.items
    .findIndex((r) => r.uuid === props.question.uuid);
  if (typeof index !== 'undefined' && index >= 0) {
    return questionnairesStore.state.response?.items[index].response;
  }
  return null;
});

const onChangeResponse = (res: string | number | boolean | null) => {
  questionnairesStore.action(MutationType.questionnaires.updateResponse, {
    uuid: props.question.uuid,
    response: res,
  });
};
</script>

<style scoped lang="scss">
.questionnaire--question {
  .questionnaire--question-head {
    @apply mb-4;
  }
}
</style>
