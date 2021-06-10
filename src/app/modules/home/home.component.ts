import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { News } from './news.model';
import { Slide } from './slides.model';

import * as fromApp from '../../store/app.reducer';
import * as HomeActions from '../home/store/home.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  slideObjects: Slide[] = [];
  newsObjects: News[] = [];
  homeSub: Subscription;

  constructor(private stor: Store<fromApp.AppState>,
    ) { }

  ngOnInit() {
    this.stor.dispatch(new HomeActions.FetchSlides());
    this.stor.dispatch(new HomeActions.FetchNews());

    this.homeSub = this.stor.select('home')
    .subscribe(homeState => {
      this.isLoading = homeState.loading;
      this.slideObjects = homeState.slides;
      this.newsObjects = homeState.news;
    })
  };


  ngOnDestroy() {
    this.homeSub.unsubscribe();
  }


  // Responsible slide
  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 750,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 2
      }
    },
    nav: false
  }

}

