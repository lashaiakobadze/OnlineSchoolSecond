import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { News } from "../news.model";
import { Slide } from "../slides.model";
import * as HomeAction from './home.actions';

@Injectable()
export class homeEffects {
  @Effect()
  getSlides = this.action$.pipe(
    ofType(HomeAction.Fetch_SLIDES),
    switchMap(() => {
      return this.http
      .get<Slide[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/slides.json'
      )
    }),
    map(slides => {
      return slides.map(slide => {
        return {
          ...slide,
        }
      })
    }),
    map(slides => {
      return new HomeAction.GetSlides(slides);
    })
  )

  @Effect()
  getNews = this.action$.pipe(
    ofType(HomeAction.FETCH_NEWS),
    switchMap(() => {
      return this.http
      .get<News[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/news.json'
      )
    }),
    map(news => {
      return news.map(curNew => {
        return {
          ...curNew,
        }
      })
    }),
    map(news => {
      return new HomeAction.GetNews(news);
    })
  )

  constructor(
    private action$: Actions,
    private http: HttpClient
  ) {}
}
