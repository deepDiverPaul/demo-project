import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import apiMockClient from './mock';
import apiLiveClient from './live';

let env = 'mock';
if (process.env && process.env.VUE_APP_API_CLIENT) {
  env = process.env.VUE_APP_API_CLIENT.trim();
}

// eslint-disable-next-line import/no-mutable-exports
let apiClient: ApiClientInterface;
if (env === 'live') {
  apiClient = apiLiveClient;
} else if (env === 'mock') {
  apiClient = apiMockClient;
} else {
  throw Error('Invalid or undefined config.apiClient.type');
}

export default apiClient;
