import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/shared/module/domain.module';

const providers = [];

@Module({
  imports: [DomainModule],
  providers,
  exports: providers,
})
export class ApplicationModule {}
