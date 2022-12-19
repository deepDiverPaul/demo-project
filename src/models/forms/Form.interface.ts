import { ResponseSetInterface } from '@/models/forms/params/ResponseSet.interface';
import { PageInterface } from '@/models/forms/checklist/Page.interface';

interface ChecklistInterface {
  'checklist_title': string,
  'checklist_description': string,
  form: {
    uuid: string,
    type: 'form',
    items: PageInterface[]
  }
}

interface ParamsInterface {
  'format_version': number,
  'response_sets': ResponseSetInterface[]
}

export interface FormInterface {
  id: number
  checklist: ChecklistInterface
  params: ParamsInterface
}
