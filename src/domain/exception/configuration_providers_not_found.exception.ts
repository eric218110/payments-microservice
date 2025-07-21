import { HttpException, HttpStatus } from '@nestjs/common';

export class ConfigurationProvidersNotFoundException extends HttpException {
  constructor(
    message: string = 'Configuration: service provider not found contact administration',
  ) {
    super({ message }, HttpStatus.PRECONDITION_FAILED);
  }
}
