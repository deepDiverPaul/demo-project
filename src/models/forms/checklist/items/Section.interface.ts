// eslint-disable-next-line import/no-cycle
import { ItemType } from '@/models/forms/checklist/Items.d';

export interface SectionInterface {
  title: string,
  uuid: string,
  type: 'section',
  repeat: boolean,
  weight: number,
  required: boolean,
  items: ItemType[]
}
