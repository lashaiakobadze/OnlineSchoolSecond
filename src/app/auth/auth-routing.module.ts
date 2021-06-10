import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './registration/registration.guard';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationResolverService } from './registration/registration-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'sign-up', component: SignUpComponent },
      {
        path: 'registration',
        canDeactivate: [CanDeactivateGuard],
        component: RegistrationComponent,
        resolve: [RegistrationResolverService],
        canActivate: [AuthGuard]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
