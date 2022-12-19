import { createStore, StoreOptions } from 'vuex';

import { RootStateInterface, RootStoreModel } from '@/models/store';

import { formsState } from '@/store/forms/module';
import { questionnairesState } from '@/store/questionnaires/module';

import { initialRootState } from './initialState';

/**
 * @name storeOptions
 * @description
 * Vuex store options to build our modularized namespaced store
 */
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,

  modules: {
    // GEN-MODULES
    formsState,
    questionnairesState,
  },
};

// Vuex Root store instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions);

/**
 * @name dispatchModuleAction
 * @description
 * Private helper to dispatch an action to a Vuex module from one place
 * So we keep the string interpolation for `${moduleName}/${actionName}` in one place only
 * and be able to dispatch action with less code in a strongly-type way
 * @param moduleName
 * @param actionName
 * @param params
 */
export function dispatchModuleAction<T>(moduleName: string, actionName: string, params?: T): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params);
}
