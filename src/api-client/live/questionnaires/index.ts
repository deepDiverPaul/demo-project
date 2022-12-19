import {
  QuestionnairesApiClientUrlsInterface,
  QuestionnairesApiClientInterface,
  QuestionnairesApiClientModel,
} from '@/models/api-client/questionnaires';

const urls: QuestionnairesApiClientUrlsInterface = {
  fetchQuestionnaire: 'https://api.example.com/questionnaires',
  saveQuestionnaire: 'https://api.example.com/questionnaires',
};

const questionnairesApiClient:
  QuestionnairesApiClientInterface = new QuestionnairesApiClientModel(urls);
// export our instance
export default questionnairesApiClient;
