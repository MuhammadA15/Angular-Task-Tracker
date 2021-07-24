import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private AddTaskSubject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.AddTaskSubject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.AddTaskSubject.asObservable();
  }
}
