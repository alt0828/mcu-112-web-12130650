import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
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
export class TodoFormPageComponent implements OnInit {
  taskService = inject(TaskService);
  title!: string;
  id?: number;
  formData?: Todo;
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter((paramMap) => paramMap.has('id')),
        map((paramMap) => +paramMap.get('id')!)
      )
      .subscribe((id) => (this.id = id));
    this.route.data
      .pipe(
        tap(({ title }) => (this.title = title)),
        map(({ formData }) => formData)
      )
      .subscribe((formData) => (this.formData = formData));
  }

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
