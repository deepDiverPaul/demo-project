import { QuestionInterface } from '@/models/forms/checklist/items/Question.interface';

export interface QuestionListResponseInterface extends QuestionInterface {
  'response_type': 'list',
  params: {
    'response_set': string | null,
    'multiple_selection': boolean
  }
}
