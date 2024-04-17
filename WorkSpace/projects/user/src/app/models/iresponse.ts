export interface IResponse {
  succeeded: boolean;
  statusCode: number;
  message: string;
  errors: string[];
  data: any;
  meta: any;
}
