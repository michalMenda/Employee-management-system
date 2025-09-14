import { Module } from '@nestjs/common';
import { WorkerService } from './workers.service';
import { WorkerController } from './workers.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
