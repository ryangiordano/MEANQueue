import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue/queue.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const RouterConfig: Routes= [
  {
    path: 'queue',
    component: QueueComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'queue',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'queue'
  }
]
