import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { title } from 'process';

@Injectable()
export class TaskService {
  private tasks = [
    { id: 1, title: 'firstPple' },
    { id: 2, title: 'secondPple' },
  ];
  findAll() {
    return this.tasks;
  }

  findById(id) {
    const task = this.tasks.find((task) => task.id == id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  create(dto: CreateTaskDto) {
    const newTask = {
      id: this.tasks.length + 1,
      title: dto.title,
    };

    this.tasks.push(newTask);
    return newTask;
  }
}
