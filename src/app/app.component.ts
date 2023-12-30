import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Todo } from './model/todo';
import { TaskService } from './services/task.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import {
  BehaviorSubject,
  merge,
  Observable,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import { TodoSearchComponent } from './todo-search/todo-search.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    NavBarComponent,
    AsyncPipe,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    TodoDetailComponent,
    TodoFormComponent,
    TodoSearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskService = inject(TaskService);

  tasks$!: Observable<Todo[]>;
  readonly search$ = new BehaviorSubject<string | null>(null);
  readonly refresh$ = new Subject<void>();

  selectedId?: number;

  ngOnInit(): void {
    this.tasks$ = this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.taskService.getAll(null))
    );
  }

  onSave(task: Todo): void {
    this.taskService.add(task).subscribe(() => this.refresh$.next());
  }
  onRemove(id: number): void {
    this.taskService.remove(id).subscribe(() => this.refresh$.next());
  }

  onStateChange({ task, state }: { task: Todo; state: boolean }): void {
    this.taskService
      .updateState(task, state)
      .subscribe(() => this.refresh$.next());
  }
  onSearch(content: string | null): void {
    this.search$.next(content);
  }
}
