import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import {
  HttpClientProvider,
  HttpClientProviderResponse,
} from 'src/application/provider/http_client/http_client_provider';

@Injectable()
export class AxiosHttpClient implements HttpClientProvider {
  private readonly logger = new Logger(AxiosHttpClient.name);

  constructor(private readonly httpService: HttpService) {}

  async onPost<B = object, R = object>(
    url: string,
    body: B,
  ): Promise<HttpClientProviderResponse<R>> {
    try {
      this.logger.log(`Send notification to url ${url}`);
      this.logger.log(JSON.stringify(body));

      const { data, status } = await firstValueFrom(
        this.httpService.post<R, B>(url, body),
      );

      return {
        data,
        status,
      };
    } catch (error) {
      const status = this.handleError(error, 'POST', url);
      return { data: null, status };
    }
  }

  private handleError(error: any, method: string, url: string): number {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.isAxiosError) {
      const axiosError = error as AxiosError;

      this.logger.error(`[${method}] ${url} failed: ${axiosError.message}`);

      if (axiosError.response) {
        this.logger.error(`Response status: ${axiosError.response.status}`);
        this.logger.error(
          `Response data: ${JSON.stringify(axiosError.response.data)}`,
        );
      }
      return axiosError.status || 0;
    } else {
      this.logger.error(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `[${method}] ${url} failed with non-Axios error: ${error?.message}`,
      );
      return 0;
    }
  }
}
