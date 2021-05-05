import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { News } from './news.model';
import { Slide } from './slides.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private slideObjects: Slide[] = [];
  public newsObjects: News[] = [];

  constructor(private http: HttpClient) { }

  // Get blog's news data from base
  fetchNews() {
    return this.http
    .get<News[]>(
      'https://onlineschool-bee89-default-rtdb.firebaseio.com/news.json'
    )
    .pipe(
      tap(
        (news: News[]) => {
          this.newsObjects = news;
          this.newsObjects = this.getNewsData();
      })
    )
  }

  getNewsData() {
    return this.newsObjects.slice();
  }


  // Get slide data from base
  fetchSlides() {
    return this.http
    .get<Slide[]>(
      'https://onlineschool-bee89-default-rtdb.firebaseio.com/slides.json'
    )
  }

  getSlidesData() {
    return this.slideObjects.slice();
  }

}
