export interface IApiResponse {
  code: number;
  success: boolean;
  description: string;
}

export interface ILoginResponse extends IApiResponse {
  token: string;
}
