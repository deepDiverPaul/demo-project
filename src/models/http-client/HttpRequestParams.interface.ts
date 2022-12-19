/**
 * @name HttpRequestParamsInterface
 * @description
 * HttpClient requests parameters for get/post/put etc operations
 */
export interface HttpRequestParamsInterface {
  url: string
  requiresToken: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
  query?: Record<string, string | number | boolean>
}
