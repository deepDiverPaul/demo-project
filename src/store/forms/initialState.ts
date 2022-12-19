import { FormsStateInterface } from '@/models/store';

/**
 * @name initialFormsState
 * @description
 * The Forms state instance with the initial default values
 */
export const initialFormsState: FormsStateInterface = {
  loading: false,
  forms: [],
  active: null,
};
