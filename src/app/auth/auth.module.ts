import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
