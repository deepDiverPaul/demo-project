import { FormsStateInterface } from '@/models/store/forms/FormsState.interface';
import {
  QuestionnairesStateInterface,
} from '@/models/store/questionnaires/QuestionnairesState.interface';

/**
 * @name RootStoreInterface
 * @description
 * Wraps together each store module interface in one place
 */
export interface RootStoreInterface {
  formsState: FormsStateInterface,
  questionnairesState: QuestionnairesStateInterface,
}
