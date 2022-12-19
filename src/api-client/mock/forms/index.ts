import {
  FormsApiClientUrlsInterface,
  FormsApiClientInterface,
  FormsApiClientModel,
} from '@/models/api-client/forms';

// urls for this API client
const urls: FormsApiClientUrlsInterface = {
  fetchForms: '/static/data/forms.json',
  fetchForm: '/static/data/forms/form.json',
  saveForm: '/static/data/forms.json',
};

// instantiate the ItemsApiClient pointing at the url that returns static json mock data
const formsApiClient: FormsApiClientInterface = new FormsApiClientModel(urls);
// export our instance
export default formsApiClient;
