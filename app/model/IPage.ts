export interface IPage<T> {
  offset: number;
  limit: number;
  total: number;
  data: T;
}
