import { Controller, Get, Post, Body, Param, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { WorkerService } from './workers.service';
import { Worker } from './workers.model';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

@Controller('workers')
export class WorkerController {
    constructor(private readonly workerService: WorkerService) { }

    @Get()
    getAll() {
       return this.workerService.getAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.workerService.getOne(id);
    }

    @Post()
    add(@Body() worker: CreateWorkerDto) {
        return this.workerService.create(worker);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() workerUpdate: UpdateWorkerDto) {
        return this.workerService.update(id, workerUpdate);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.workerService.remove(id);
    }
}