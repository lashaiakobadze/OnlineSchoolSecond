import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { BlogComponent } from './home-blog/blog/blog.component';
import { HomeResolverService } from './home-resolver.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBlogComponent,
    BlogComponent
  ],
  imports: [
    SharedModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forChild([{ path: 'home', resolve: [HomeResolverService], component: HomeComponent}]),
  ]
})
export class HomeModule { }
