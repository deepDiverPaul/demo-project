import { QuestionnairesStateInterface } from '@/models/store';

/**
 * @name initialQuestionnairesState
 * @description
 * The Questionnaires state instance with the initial default values
 */
export const initialQuestionnairesState: QuestionnairesStateInterface = {
  loading: false,
  form: null,
  pages: [],
  validationError: false,
  response: { id: 0, items: [] },
};
