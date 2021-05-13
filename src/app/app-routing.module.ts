import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RegistrationResolverService } from './auth/registration/registration-resolver.service';
import { ErrorPageComponent } from './error-page/error-page.component';

import { ProfileComponent } from './modules/profile/profile.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: 'home', loadChildren: ()=> import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'profile',
    component: ProfileComponent,
    resolve: [RegistrationResolverService],
    canActivate: [AuthGuard],
  },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
