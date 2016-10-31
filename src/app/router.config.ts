import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue/queue.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent} from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
export const RouterConfig: Routes= [
  {
    path: 'queue',
    component: QueueComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
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
