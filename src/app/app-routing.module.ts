import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RegistrationResolverService } from './auth/registration/registration-resolver.service';

import { ProfileComponent } from './modules/profile/profile.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  // { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'profile',
    component: ProfileComponent,
    resolve: [RegistrationResolverService],
    canActivate: [AuthGuard],
   },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
