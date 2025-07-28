import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/shared/module/domain.module';
import { HistoryController } from '../controller/history.controller';

@Module({
  imports: [DomainModule],
  controllers: [HistoryController],
})
export class HistoryModule {}
