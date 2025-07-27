import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TokenProvider } from 'src/domain/shared/tokens/tokens_providers';
import { AxiosHttpClient } from './axios_http_client';

const providers = [
  {
    provide: TokenProvider.HttpClientProvider,
    useClass: AxiosHttpClient,
  },
];

@Module({
  imports: [
    HttpModule.register({
      timeout: 15000,
      maxRedirects: 5,
    }),
  ],
  providers,
  exports: providers,
})
export class HttpClientModule {}
