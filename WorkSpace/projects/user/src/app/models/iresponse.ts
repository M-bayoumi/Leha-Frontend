export interface IResponse {
  succeeded: boolean;
  statusCode: number;
  message: string;
  errors: any[];
  data: any;
  meta: any;
}
