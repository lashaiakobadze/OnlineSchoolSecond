import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";


import { HomeService } from "src/app/shared/modules/home/home.service";
import * as HomeAction from './home.actions';


@Injectable()
export class homeEffects {

  getSlides = createEffect(() =>
    this.action$.pipe(
      ofType(HomeAction.Fetch_SLIDES),
      switchMap(() => {
        return this.homeService.getSlides();
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
    ),
  );

  getNews = createEffect(() =>
    this.action$.pipe(
      ofType(HomeAction.FETCH_NEWS),
      switchMap(() => {
        return this.homeService.getBlogs();
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
    ),
  );

  constructor(
    private action$: Actions,
    private homeService: HomeService,
  ) {}
}
