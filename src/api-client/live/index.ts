import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import formsApiClient from './forms';
import questionnairesApiClient from './questionnaires';

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  forms: formsApiClient,
  questionnaires: questionnairesApiClient,
};
// export our instance
export default apiLiveClient;
