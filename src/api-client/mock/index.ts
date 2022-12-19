import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import formsApiClient from './forms';
import questionnairesApiClient from './questionnaires';

// create an instance of our main ApiClient that wraps the mock child clients
const apiMockClient: ApiClientInterface = {
  forms: formsApiClient,
  questionnaires: questionnairesApiClient,
};
// export our instance
export default apiMockClient;
