import {
  Module, MutationTree, ActionTree, GetterTree,
} from 'vuex';

import router from '@/router';

import { MutationType, RootStateInterface, FormsStateInterface } from '@/models/store';
import apiClient from '@/api-client';

import { FormInterface } from '@/models/forms/Form.interface';

import { initialFormsState } from './initialState';
import { ItemType } from '@/models/forms/checklist/Items.d';
import {
  formCopyItem,
  formUpdateItem,
  formUpdateItems,
  FormVueDraggableEvent,
} from '@/store/forms/methods';

/**
 * @name mutations
 * @description
 * Vuex Forms mutations
 */
export const mutations: MutationTree<FormsStateInterface> = {
  loadingForms(state: FormsStateInterface) {
    state.loading = true;
  },
  loadedForms(state: FormsStateInterface, forms: FormInterface[]) {
    state.forms = forms;
    state.loading = false;
  },
  loadingForm(state: FormsStateInterface) {
    state.loading = true;
  },
  loadedForm(state: FormsStateInterface, form: FormInterface) {
    state.active = form;
    state.loading = false;
  },
  savingForm(state: FormsStateInterface) {
    state.loading = true;
  },
  savedForm(state: FormsStateInterface) {
    state.loading = false;
    state.active = null;
  },
  updateItems(state: FormsStateInterface, form: FormInterface) {
    state.active = form;
  },
};

/**
 * @name actions
 * @description
 * Vuex Forms actions
 */
export const actions: ActionTree<FormsStateInterface, RootStateInterface> = {
  loadForms({ commit }) {
    commit(MutationType.forms.loadingForms);
    apiClient.forms.fetchForms().then((data: FormInterface[]) => {
      commit(MutationType.forms.loadedForms, data);
    });
  },
  selectForm(
    { dispatch },
    params: {
      id: number
    },
  ) {
    dispatch('loadForm', {
      id: params.id,
    });
  },
  loadForm(
    { commit },
    params: {
      id: number,
      callback?(data: FormInterface): void
    },
  ) {
    commit(MutationType.forms.loadingForm);
    apiClient.forms.fetchForm(params.id).then((data: FormInterface) => {
      commit(MutationType.forms.loadedForm, data);
      if (params.callback) params.callback(data);
    });
  },
  async saveForm(
    { commit },
    params: {
      form: FormInterface
    },
  ) {
    commit(MutationType.forms.savingForm);
    await apiClient.forms.saveForm(params.form).then(() => {
      commit(MutationType.forms.savedForm);
    });
    await router.push({ name: 'forms-list' });
  },
  updateItems(
    { commit, state },
    params: {
      uuid: string
      action: FormVueDraggableEvent
    },
  ) {
    if (state.active === null) return;
    commit(
      MutationType.forms.updateItems,
      formUpdateItems(state.active, params.uuid, params.action),
    );
  },
  updateItem(
    { commit, state },
    params: {
      uuid: string
      item: ItemType
    },
  ) {
    if (state.active === null) return;
    commit(
      MutationType.forms.updateItems,
      formUpdateItem(state.active, params.uuid, params.item),
    );
  },
  copyItem(
    { commit, state },
    params: {
      uuid: string
    },
  ) {
    if (state.active === null) return;
    commit(
      MutationType.forms.updateItems,
      formCopyItem(state.active, params.uuid),
    );
  },
};

/**
 * @name getters
 * @description
 * Vuex Forms getters
 */
export const getters: GetterTree<FormsStateInterface, RootStateInterface> = {};

const namespaced = true;
const state: FormsStateInterface = initialFormsState;

/**
 * @name formsState
 * @description
 * Vuex Forms store
 */
export const formsState: Module<FormsStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
