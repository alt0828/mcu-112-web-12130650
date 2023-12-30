import { Component, inject, Input, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { TaskService } from '../services/task.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-form-page',
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: './todo-form-page.component.html',
  styleUrl: './todo-form-page.component.css',
})
export class TodoFormPageComponent {
  taskService = inject(TaskService);
  @Input()
  title!: string;
  @Input({ transform: numberAttribute })
  id?: number;
  formData?: Todo;
  readonly router = inject(Router);

  onSave(task: Todo): void {
    let action$: Observable<Todo>;
    if (this.id) {
      action$ = this.taskService.update(this.id, task);
    } else {
      action$ = this.taskService.add(task);
    }
    action$.subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.router.navigate(['home']);
  }
}
