import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TodoDetailPageComponent } from './todo-detail-page/todo-detail-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: TodoPageComponent },
  { path: 'todo/:id', component: TodoDetailPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '**', component: NotFoundPageComponent },
];
