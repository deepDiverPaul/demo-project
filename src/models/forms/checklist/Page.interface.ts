import { ItemType } from '@/models/forms/checklist/Items.d';

export interface PageInterface {
  title: string,
  uuid: string,
  type: 'page',
  items: ItemType[]
  params: {
    collapsed: boolean
  }
}
