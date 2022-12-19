import Vuex from 'vuex';
import { RootStoreInterface } from './RootStore.interface';

/**
 * @name RootStoreModel
 * @description
 * Extends Vuex Store declaration with our RootStoreInterface
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class RootStoreModel<S> extends Vuex.Store<RootStoreInterface> {}
