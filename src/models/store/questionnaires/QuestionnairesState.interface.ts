import { QuestionnaireInterface } from '@/models/questionnaires/Questionnaire.interface';
import { FormInterface } from '@/models/forms/Form.interface';
import { PageInterface } from '@/models/forms/checklist/Page.interface';

/**
 * @name QuestionnairesStateInterface
 * @description
 * Interface for the Questionnaires state
 */
export interface QuestionnairesStateInterface {
  loading: boolean
  form: null | FormInterface
  pages: PageInterface[]
  validationError: boolean
  response: null | QuestionnaireInterface
}
