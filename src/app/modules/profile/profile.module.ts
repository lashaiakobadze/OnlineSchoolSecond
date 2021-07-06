import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { RouterModule } from '@angular/router';
import { RegistrationResolverService } from 'src/app/shared/guards/registration-resolver.service';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '',
        component: ProfileComponent,
        resolve: [RegistrationResolverService],
        canActivate: [AuthGuard],
      },
    ]),
  ]
})
export class ProfileModule { }
