import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/module/application.module';

@Module({
  exports: [ApplicationModule],
  imports: [ApplicationModule],
})
export class DomainModule {}
