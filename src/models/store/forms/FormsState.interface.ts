import { FormInterface } from '@/models/forms/Form.interface';

/**
 * @name FormsStateInterface
 * @description
 * Interface for the Forms state
 */
export interface FormsStateInterface {
  loading: boolean
  forms: FormInterface[]
  active: null | FormInterface
}
