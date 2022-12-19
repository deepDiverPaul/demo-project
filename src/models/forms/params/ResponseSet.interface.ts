import { ResponseInterface } from '@/models/forms/params/Response.interface';

export interface ResponseSetInterface {
  uuid : string,
  responses: ResponseInterface[]
}
