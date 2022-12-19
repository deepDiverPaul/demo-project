import {
  FormsApiClientUrlsInterface,
  FormsApiClientInterface,
  FormsApiClientModel,
} from '@/models/api-client/forms';

// urls for this API client
const urls: FormsApiClientUrlsInterface = {
  fetchForms: 'https://api.example.com/forms',
  fetchForm: 'https://api.example.com/forms',
  saveForm: 'https://api.example.com/forms',
};

// instantiate the FormsApiClient pointing at the url that returns the live data from an API server
const formsApiClient: FormsApiClientInterface = new FormsApiClientModel(urls);
// export our instance
export default formsApiClient;
