import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { HomeService } from './home.service';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<News[]> {

  constructor(private homeService: HomeService) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const news = this.homeService.getNewsData();

    // To prevent update bugs
    if(news.length === 0) {
      return this.homeService.fetchNews();
    } else {
      return news;
    }
  }

}
