import {
  Component,
  Input,
  inject,
  numberAttribute,
  HostBinding,
  OnChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskRemoteService } from '../services/task-remote.service';
import { Todo } from '../model/todo';
import { AsyncPipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent implements OnChanges {
  @Input({ transform: numberAttribute })
  id!: number;

  task$!: Observable<Todo | undefined>;

  private readonly taskService = inject(TaskRemoteService);

  @HostBinding('class')
  class = 'todo-detail';

  ngOnChanges(): void {
    this.task$ = this.taskService.getById(this.id);
  }
}
