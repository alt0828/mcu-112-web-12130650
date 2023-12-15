import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../model/todo';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [NgIf, NgFor, TodoComponent],
})
export class TodoListComponent {
  @Input()
  tasks?: Todo[] | null;
  @Output()
  remove = new EventEmitter<number>();

  @Output()
  view = new EventEmitter<number>();

  @Output()
  stateChange = new EventEmitter<{ task: Todo; state: boolean }>();
}
