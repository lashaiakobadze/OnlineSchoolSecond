import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { News } from '../modules/home/news.model';
import * as fromApp from '../../store/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<News[]> {

  constructor(private store: Store<fromApp.AppState>) { }

  // I do not actually use this resolver, Because I take out the UI spinners.
  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let news: News[] = [];

    this.store.select('home')
    .subscribe(homeState => {
      news = homeState.news;
    })

    // To prevent update bugs
    if(news.length === 0) {
      return news;
    } else {
      return news;
    }
  }
}
