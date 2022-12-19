import { StoreModuleNames, FormsStateInterface } from '@/models/store';
import { rootStore, dispatchModuleAction } from '../root';

/**
 * @name formsStore
 * @description
 * The forms store wrapper that returns the formsState and exposes a generic action<T> method
 */
const formsStore = {
  get state(): FormsStateInterface {
    return rootStore.state.formsState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.formsState, actionName, params);
  },
};

export const useFormsStore = () => formsStore;
