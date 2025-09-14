import { Module } from '@nestjs/common';
import { WorkerModule } from './workers/workers.module';

@Module({
  imports: [WorkerModule],
})
export class AppModule {}
