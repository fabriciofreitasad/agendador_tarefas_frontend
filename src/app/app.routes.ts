import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { authGuard } from './guadrs/auth.guard';
import { UserDataComponent } from './pages/user-data/user-data.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'tasks', component: TasksComponent, canActivate:[authGuard] },
  { path: 'user-data', component: UserDataComponent, canActivate:[authGuard] },

  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
];
