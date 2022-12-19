import { FormsMutationType } from '../forms/FormsMutationType';
import {
  QuestionnairesMutationType,
} from '@/models/store/questionnaires/QuestionnairesMutationType';

export namespace MutationType {
  export const forms = FormsMutationType;
  export const questionnaires = QuestionnairesMutationType;
}
