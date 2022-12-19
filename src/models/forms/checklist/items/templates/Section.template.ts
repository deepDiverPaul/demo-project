import { SectionInterface } from '@/models/forms/checklist/items/Section.interface';
import { v4 } from 'uuid';

const sectionTemplate: SectionInterface = {
  title: 'New section',
  uuid: '',
  type: 'section',
  repeat: false,
  weight: 0,
  required: false,
  items: [],
};

const FormSectionTemplate = ():SectionInterface => ({ ...sectionTemplate, uuid: v4() });

export { FormSectionTemplate };
