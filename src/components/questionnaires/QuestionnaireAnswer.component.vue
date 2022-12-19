<template>
  <Loader v-if="loading && (form === null)" />
  <div v-else>
    <div class="block">
      <div class="is-size-4">{{ form?.checklist?.checklist_title }}</div>
    </div>
    <div class="block">
      <PageComponent
        v-for="page in pages"
        :key="page.uuid"
        :page="page"/>
    </div>
    <div class="buttons block">
      <button
        class="button is-success"
        :class="{'is-loading':loading}"
        :disabled="!valid"
        type="submit"
        @click="saveQuestionnaire">
        submit
      </button>
      <button class="button is-danger is-outlined" @click="resetResponses">reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageComponent from '@/components/questionnaires/questionnaire-answer-children/Page.component.vue';
import { useRoute } from 'vue-router';
import Loader from '@/components/common/Loader.component.vue';
import { computed, onMounted } from 'vue';
import { MutationType } from '@/models/store';
import { useQuestionnairesStore } from '@/store/questionnaires';
import { FormInterface } from '@/models/forms/Form.interface';
import { PageInterface } from '@/models/forms/checklist/Page.interface';

const questionnairesStore = useQuestionnairesStore();

const loading = computed(() => questionnairesStore.state.loading);
const valid = computed(() => !questionnairesStore.state.validationError);
const form = computed< null | FormInterface >(() => questionnairesStore.state.form);
const pages = computed< PageInterface[] >(() => questionnairesStore.state.pages);

const route = useRoute();

onMounted(() => {
  questionnairesStore.action(MutationType.questionnaires.loadQuestionnaire, {
    id: route.params.id,
  });
});

const saveQuestionnaire = () => {
  questionnairesStore.action(MutationType.questionnaires.saveQuestionnaire);
};

const resetResponses = () => {
  questionnairesStore.action(MutationType.questionnaires.resetResponses);
};
</script>
