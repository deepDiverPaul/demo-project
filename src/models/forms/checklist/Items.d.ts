// eslint-disable-next-line import/no-cycle
import { SectionInterface } from '@/models/forms/checklist/items/Section.interface';
import * as QuestionResponseTypes from './items/response-types';

export type ItemType =
  SectionInterface |
  QuestionResponseTypes;
