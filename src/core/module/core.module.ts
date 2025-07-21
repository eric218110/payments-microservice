import { Module } from '@nestjs/common';
import { PresentationModule } from 'src/presentation/module/presentation.module';

@Module({
  imports: [PresentationModule],
})
export class CoreModule {}
