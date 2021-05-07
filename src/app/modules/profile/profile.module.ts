import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileModule { }
