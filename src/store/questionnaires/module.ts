import {
  Module, MutationTree, ActionTree, GetterTree,
} from 'vuex';

import router from '@/router';

import { MutationType, RootStateInterface, QuestionnairesStateInterface } from '@/models/store';
import apiClient from '@/api-client';

import { QuestionnaireInterface } from '@/models/questionnaires/Questionnaire.interface';

import { initialQuestionnairesState } from './initialState';
import { FormInterface } from '@/models/forms/Form.interface';
import {
  questionnaireExtractFlatPages,
  questionnaireUpdateResponseByUuid,
  questionnaireValidate,
} from '@/store/questionnaires/methods';

/**
 * @name mutations
 * @description
 * Vuex Questionnaires mutations
 */
export const mutations: MutationTree<QuestionnairesStateInterface> = {
  loadingQuestionnaire(state: QuestionnairesStateInterface) {
    state.loading = true;
    state.form = null;
  },
  loadedQuestionnaire(state: QuestionnairesStateInterface, form: FormInterface) {
    state.form = form;
    state.pages = questionnaireExtractFlatPages(form);
    state.response = {
      id: form.id,
      items: [],
    };
    state.loading = false;
  },
  resetResponses(state: QuestionnairesStateInterface) {
    if (state.response) state.response.items = [];
    state.validationError = false;
  },
  savingQuestionnaire(state: QuestionnairesStateInterface) {
    state.loading = true;
  },
  savedQuestionnaire(state: QuestionnairesStateInterface) {
    state.loading = false;
    state.response = null;
  },
  updateResponse(state: QuestionnairesStateInterface, questionnaire: QuestionnaireInterface) {
    state.response = questionnaire;
  },
  updateValidation(state: QuestionnairesStateInterface, valid: boolean) {
    state.validationError = !valid;
  },
};

/**
 * @name actions
 * @description
 * Vuex Questionnaires actions
 */
export const actions: ActionTree<QuestionnairesStateInterface, RootStateInterface> = {
  loadQuestionnaire(
    { commit, state },
    params: {
      id: number,
    },
  ) {
    commit(MutationType.questionnaires.loadingQuestionnaire);
    apiClient.questionnaires.fetchQuestionnaire(params.id).then((data: FormInterface) => {
      commit(MutationType.questionnaires.loadedQuestionnaire, data);
      if (state.response === null) return;
      commit(
        MutationType.questionnaires.updateValidation,
        questionnaireValidate(state.pages, state.response),
      );
    });
  },
  async saveQuestionnaire(
    { commit, state },
  ) {
    if (state.response === null) return;
    commit(
      MutationType.questionnaires.updateValidation,
      questionnaireValidate(state.pages, state.response),
    );
    if (state.validationError === true) return;
    commit(MutationType.questionnaires.savingQuestionnaire);
    await apiClient.questionnaires.saveQuestionnaire(state.response)
      .then(() => {
        commit(MutationType.questionnaires.savedQuestionnaire);
      });
    await router.push({ name: 'questionnaire-thank-you' });
  },
  updateResponse(
    { commit, state },
    params: {
      uuid: string,
      response: string | number | boolean | null
    },
  ) {
    if (state.response === null) return;
    commit(
      MutationType.questionnaires.updateResponse,
      questionnaireUpdateResponseByUuid(
        { ...state.response },
        params.uuid,
        params.response,
      ),
    );
    commit(
      MutationType.questionnaires.updateValidation,
      questionnaireValidate(state.pages, state.response),
    );
  },
  resetResponses(
    { commit, state },
  ) {
    if (state.response === null) return;
    commit(MutationType.questionnaires.resetResponses);
    commit(
      MutationType.questionnaires.updateValidation,
      questionnaireValidate(state.pages, state.response),
    );
  },
};

/**
 * @name getters
 * @description
 * Vuex Questionnaires getters
 */
export const getters: GetterTree<QuestionnairesStateInterface, RootStateInterface> = {};

const namespaced = true;
const state: QuestionnairesStateInterface = initialQuestionnairesState;

/**
 * @name questionnairesState
 * @description
 * Vuex Questionnaires store
 */
export const questionnairesState: Module<QuestionnairesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
