import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;
  private task: Task = new Task();

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getTask(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  updateOneTask(id: string, task: Task): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, this.task);
  } 

  deleteOneTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
