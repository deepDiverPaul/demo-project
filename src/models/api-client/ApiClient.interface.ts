import { FormsApiClientInterface } from './forms';
import { QuestionnairesApiClientInterface } from '@/models/api-client/questionnaires';

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  forms: FormsApiClientInterface,
  questionnaires: QuestionnairesApiClientInterface
}
