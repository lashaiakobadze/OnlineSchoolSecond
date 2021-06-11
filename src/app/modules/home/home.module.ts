import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeResolverService } from './home-resolver.service';
import { ShortenPipe } from './shorten.pipe';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { BlogComponent } from './home-blog/blog/blog.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBlogComponent,
    BlogComponent,
    ShortenPipe
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
