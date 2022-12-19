import { QuestionnaireInterface } from '@/models/questionnaires/Questionnaire.interface';
import { HttpResponseInterface } from '@/models/http-client';
import { FormInterface } from '@/models/forms/Form.interface';

/**
 * @Name QuestionnaireApiClientInterface
 * @description
 * Interface for the Questionnaires api client module
 */
export interface QuestionnairesApiClientInterface {
  fetchQuestionnaire: (id: number) => Promise<FormInterface>
  saveQuestionnaire: (data: QuestionnaireInterface) => Promise<HttpResponseInterface>
}
