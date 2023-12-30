import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-todo-detail-page',
  standalone: true,
  imports: [TodoDetailComponent],
  templateUrl: './todo-detail-page.component.html',
  styleUrl: './todo-detail-page.component.css',
})
export class TodoDetailPageComponent implements OnInit {
  selectedId?: number;

  readonly router = inject(Router);

  readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter((paramMap) => paramMap.has('id')),
        map((paramMap) => +paramMap.get('id')!)
      )
      .subscribe((id) => (this.selectedId = id));
  }

  onReturn(): void {
    this.router.navigate(['home']);
  }
}
