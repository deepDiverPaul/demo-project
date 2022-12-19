import { HttpClient, HttpRequestParamsInterface, HttpResponseInterface } from '@/models/http-client';

import { QuestionnaireInterface } from '@/models/questionnaires/Questionnaire.interface';
import { QuestionnairesApiClientUrlsInterface } from './QuestionnairesApiClientUrls.interface';
import { QuestionnairesApiClientInterface } from './QuestionnairesApiClient.interface';
import { FormInterface } from '@/models/forms/Form.interface';

/**
 * @Name QuestionnairesApiClientModel
 * @description
 * Implements the QuestionnairesApiClientInterface interface
 */
export class QuestionnairesApiClientModel implements QuestionnairesApiClientInterface {
  private readonly urls!: QuestionnairesApiClientUrlsInterface

  constructor(urls: QuestionnairesApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchQuestionnaire(id: number): Promise<FormInterface> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchQuestionnaire,
      requiresToken: false,
      query: {
        id,
      },
    };

    return HttpClient.get<FormInterface>(getParameters);
  }

  saveQuestionnaire(data: QuestionnaireInterface): Promise<HttpResponseInterface> {
    const postParameters: HttpRequestParamsInterface = {
      url: this.urls.saveQuestionnaire,
      requiresToken: false,
      payload: data,
    };

    return HttpClient.post<HttpResponseInterface>(postParameters);
  }
}
