import {
  Component,
  Input,
  inject,
  numberAttribute,
  OnInit,
  HostBinding,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../model/todo';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent implements OnChanges {
  @Input({ transform: numberAttribute })
  id!: number;

  task?: Todo;

  private readonly taskService = inject(TaskService);

  @HostBinding('class')
  class = 'todo-detail';

  ngOnChanges(): void {
    this.task = this.taskService.getById(this.id);
  }
}
