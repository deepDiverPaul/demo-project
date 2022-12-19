import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpRequestParamsInterface } from './HttpRequestParams.interface';
import { HttpClientInterface } from './HttpClient.interface';

/**
 * @name HttpClientModel
 */
export class HttpClientModel implements HttpClientInterface {
  private static getToken(): string {
    // get token key from App config
    const TOKEN_KEY = 'app-token';
    return localStorage.getItem(TOKEN_KEY) || '';
  }

  // constructor() {}

  get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters;

      // axios options
      const options: AxiosRequestConfig = {
        headers: {},
      };

      if (requiresToken && options.headers) {
        options.headers.RequestVerificationToken = HttpClientModel.getToken();
      }

      if (parameters.query) {
        options.params = { ...parameters.query };
      }

      axios
        .get(url, options)
        .then((response: AxiosResponse) => {
          // resolve(response.data as T);
          setTimeout(() => resolve(response.data as T), 1000);
        })
        .catch((error: AxiosResponse) => {
          console.info('------ rejecting ----');
          reject(error);
        });
    });
  }

  post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve) => {
      // the function is executed automatically when the promise is constructed
      const res: unknown = { success: true };
      console.log(JSON.parse(JSON.stringify(parameters.payload)));
      // after 1 second signal that the job is done with the result "done"
      setTimeout(() => resolve(res as T), 1000);
    });
    // return new Promise<T>((resolve, reject) => {
    //   const { url, requiresToken, payload } = parameters;
    //
    //   // axios options
    //   const options: AxiosRequestConfig = {
    //     headers: {},
    //   };
    //
    //   if (requiresToken && options.headers) {
    //     const token = HttpClientModel.getToken();
    //     options.headers.RequestVerificationToken = token;
    //   }
    //
    //   if (parameters.query) {
    //     options.params = { ...parameters.query };
    //   }
    //
    //   axios
    //     .post(url, payload.value, options)
    //     .then((response: AxiosResponse) => {
    //       resolve(response.data as T);
    //     })
    //     .catch((error: AxiosResponse) => {
    //       reject(error);
    //     });
    // });
  }
}
