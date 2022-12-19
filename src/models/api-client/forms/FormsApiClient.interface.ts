import { FormInterface } from '@/models/forms/Form.interface';
import { HttpResponseInterface } from '@/models/http-client';

/**
 * @Name FormsApiClientInterface
 * @description
 * Interface for the Forms api client module
 */
export interface FormsApiClientInterface {
  fetchForms: () => Promise<FormInterface[]>
  fetchForm: (id: number) => Promise<FormInterface>
  saveForm: (data: FormInterface) => Promise<HttpResponseInterface>
}
