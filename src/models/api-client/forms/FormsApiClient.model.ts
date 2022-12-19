import { HttpClient, HttpRequestParamsInterface, HttpResponseInterface } from '@/models/http-client';

import { FormInterface } from '@/models/forms/Form.interface';
import { FormsApiClientUrlsInterface } from './FormsApiClientUrls.interface';
import { FormsApiClientInterface } from './FormsApiClient.interface';

/**
 * @Name FormsApiClientModel
 * @description
 * Implements the FormsApiClientInterface interface
 */
export class FormsApiClientModel implements FormsApiClientInterface {
  private readonly urls!: FormsApiClientUrlsInterface

  constructor(urls: FormsApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchForms(): Promise<FormInterface[]> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchForms,
      requiresToken: false,
    };

    return HttpClient.get<FormInterface[]>(getParameters);
  }

  fetchForm(id: number): Promise<FormInterface> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchForm,
      requiresToken: false,
      query: {
        id,
      },
    };

    return HttpClient.get<FormInterface>(getParameters);
  }

  saveForm(data: FormInterface): Promise<HttpResponseInterface> {
    const postParameters: HttpRequestParamsInterface = {
      url: this.urls.saveForm,
      requiresToken: false,
      payload: data,
    };

    return HttpClient.post<HttpResponseInterface>(postParameters);
  }
}
