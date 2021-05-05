import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './home-blog/blog/blog.component';
import { HomeResolverService } from './home-resolver.service';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    resolve: [HomeResolverService],
    children: [
      { path: 'blog', component: BlogComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }



