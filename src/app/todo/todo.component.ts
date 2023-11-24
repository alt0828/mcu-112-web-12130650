import { Todo } from './../model/todo';
import { CommonModule, DatePipe } from '@angular/common';
import {
  booleanAttribute,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  numberAttribute,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input({ required: true })
  task!: Todo;

  @Output()
  readonly stateChange = new EventEmitter<boolean>();

  @HostBinding('class')
  class = 'app-todo';

  onSetStatus(hasFinished: boolean): void {
    this.stateChange.emit(hasFinished);
  }
}
