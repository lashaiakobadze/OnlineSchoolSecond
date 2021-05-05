import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { BlogComponent } from './home-blog/blog/blog.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBlogComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
