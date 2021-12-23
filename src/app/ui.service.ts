import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask = false;
  private subject = new Subject();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}