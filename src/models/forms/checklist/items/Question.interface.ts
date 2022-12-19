export interface QuestionInterface {
  uuid: string,
  title: string,
  'image_id': null | string,
  type: 'question',
  'response_type': string,
  required: boolean,
  params: {
    'response_set'?: string | null,
    'multiple_selection'?: boolean
  },
  'check_conditions_for'?: string[],
  categories: string[], // possibly uuid
  negative?: boolean,
  'notes_allowed': boolean,
  'photos_allowed': boolean,
  'issues_allowed': boolean,
  responded?: boolean
}
