import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Todo } from './model/todo';
import { TaskRemoteService } from './services/task-remote.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    TodoDetailComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskService = inject(TaskRemoteService);

  tasks: Todo[] = [];

  selectedId?: number;

  ngOnInit(): void {
    this.taskService.getAll().subscribe((tasks) => (this.tasks = tasks));
  }

  onAdd(): void {
    this.taskService.add('待辦事項 C');
  }
  onRemove(id: number): void {
    this.taskService.remove(id);
  }

  onStateChange({ id, state }: { id: number; state: boolean }): void {
    this.taskService.updateState(id, state);
  }
}
