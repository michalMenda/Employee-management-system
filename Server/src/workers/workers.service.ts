// src/workers/workers.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Employee as PrismaEmployee } from '@prisma/client'; // טיפוס Prisma

@Injectable()
export class WorkerService {
  constructor(private readonly db: DatabaseService) {}
  async getAll(): Promise<PrismaEmployee[]> {
    return this.db.employee.findMany();
  }
  async getOne(id: number): Promise<PrismaEmployee | null> {
    return this.db.employee.findUnique({ where: { id } });
  }

  async create(createWorkerDto: CreateWorkerDto): Promise<PrismaEmployee> {
    const created = await this.db.employee.create({
      data: {
        name: createWorkerDto.name,
        role: createWorkerDto.role,
        isActive: createWorkerDto.isActive,
      },
    });
    return created;
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto): Promise<PrismaEmployee> {
    const updated = await this.db.employee.update({
      where: { id },
      data: { ...updateWorkerDto },
    });
    return updated;
  }

  async remove(id: number): Promise<{ success: boolean }> {
    const exists = await this.db.employee.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException(`Worker with id ${id} not found`);

    await this.db.employee.delete({ where: { id } });
    return { success: true };
  }
}
