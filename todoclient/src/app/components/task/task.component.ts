import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(){
    this.getAllTasks();
  }
  getAllTasks() {
    this.taskService.getAllTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data;
    });
  }

  deleteOneTask(id: string){
    this.taskService.deleteOneTask(id).subscribe(() => {
      this.getAllTasks();
    });
  }
}
