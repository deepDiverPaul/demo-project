import { v4 } from 'uuid';
import {
  QuestionListResponseInterface,
} from '@/models/forms/checklist/items/response-types/QuestionListResponse.interface';

const questionTemplate: QuestionListResponseInterface = {
  uuid: '',
  title: 'New Question',
  image_id: null,
  type: 'question',
  response_type: 'list',
  required: true,
  params: {
    response_set: null,
    multiple_selection: false,
  },
  check_conditions_for: [],
  categories: [], // possibly uuid
  negative: false,
  notes_allowed: true,
  photos_allowed: true,
  issues_allowed: true,
  responded: false,
};

const FormQuestionTemplate = ():QuestionListResponseInterface => (
  { ...questionTemplate, uuid: v4() }
);

export { FormQuestionTemplate };
