import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  craeteTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  getTask() {}
}
