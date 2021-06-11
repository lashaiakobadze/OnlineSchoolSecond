import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreloadingService } from './app-preloading.service';
import { ContactComponent } from './modules/contact/contact.component';
import { ErrorPageComponent } from './layouts/error-page/error-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { preload: true },
   },
  {
    path: 'works',
    loadChildren: () => import('./modules/works/works.module').then(m => m.WorksModule),
    data: { preload: true },
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    data: { preload: true },
   },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: AppPreloadingService })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
