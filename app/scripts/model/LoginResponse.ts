namespace quote.model {
  export interface Response {
    code: number;
    success: boolean;
    description: string;
  }

  export interface LoginResponse extends Response{
    token: string;
  }

}
