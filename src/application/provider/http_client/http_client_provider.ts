export type HttpClientProviderResponse<D> = {
  status: number;
  data: D;
};

export interface HttpClientProvider {
  onPost<B = object, R = object>(
    url: string,
    body: B,
  ): Promise<HttpClientProviderResponse<R>>;
}
