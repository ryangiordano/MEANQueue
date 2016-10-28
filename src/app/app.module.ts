import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RouterConfig } from './router.config';


import { AuthService } from './shared/services/auth.service';
import { QueueService } from './shared/services/queue.service';
import { ErrorService } from './shared/services/error.service';
import { BranchService} from './shared/services/branch.service';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { QueueComponent } from './queue/queue.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';

import { AdminComponent} from './admin/admin.component';
import { BranchComponent } from './branch/branch.component';
import { BranchFormComponent} from './admin/branch-form/branch-form.component';

import { QueueFormComponent } from './queue/queue-form/queue-form.component';
import { QueueListComponent } from './queue/queue-list/queue-list.component';
import { QueueItemComponent } from './queue/queue-item/queue-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    QueueComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    AuthComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent,
    QueueFormComponent,
    QueueListComponent,
    QueueItemComponent,
    AdminComponent,
    BranchComponent,
    BranchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [AuthService, QueueService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
