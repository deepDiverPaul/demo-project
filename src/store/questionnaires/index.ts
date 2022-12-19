import { StoreModuleNames, QuestionnairesStateInterface } from '@/models/store';
import { rootStore, dispatchModuleAction } from '../root';

/**
 * @name questionnairesStore
 * @description
 * The questionnaires store wrapper that returns the
 * questionnairesState and exposes a generic action<T> method
 */
const questionnairesStore = {
  get state(): QuestionnairesStateInterface {
    return rootStore.state.questionnairesState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.questionnairesState, actionName, params);
  },
};

export const useQuestionnairesStore = () => questionnairesStore;
