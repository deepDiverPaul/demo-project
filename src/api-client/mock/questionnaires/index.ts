import {
  QuestionnairesApiClientUrlsInterface,
  QuestionnairesApiClientInterface,
  QuestionnairesApiClientModel,
} from '@/models/api-client/questionnaires';

const urls: QuestionnairesApiClientUrlsInterface = {
  fetchQuestionnaire: '/static/data/forms/form.json',
  saveQuestionnaire: '/static/data/forms.json',
};

const questionnairesApiClient:
  QuestionnairesApiClientInterface = new QuestionnairesApiClientModel(urls);
// export our instance
export default questionnairesApiClient;
