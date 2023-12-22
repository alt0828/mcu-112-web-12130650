import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-search',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.css',
})
export class TodoSearchComponent {
  @Output()
  readonly search = new EventEmitter<string | null>();

  readonly formControl = new FormControl<string | null>(null);
}
