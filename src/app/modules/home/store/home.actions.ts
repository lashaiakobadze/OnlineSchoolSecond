import { Action } from "@ngrx/store";
import { News } from "../../../shared/modules/home/news.model";
import { Slide } from "../slides.model";


export const GET_SLIDES = '[Home] Get Slides';
export const Fetch_SLIDES = '[Home] Fetch Slides';
export const GET_NEWS = '[Home] Get News';
export const FETCH_NEWS = '[Home] Fetch News';

export class GetSlides implements Action {
  readonly type = GET_SLIDES;

  constructor(public payload: Slide[]) {}
}

export class FetchSlides implements Action {
  readonly type = Fetch_SLIDES;
}

export class GetNews implements Action {
  readonly type = GET_NEWS;

  constructor(public payload: News[]) {}
}

export class FetchNews implements Action {
  readonly type = FETCH_NEWS;
}

export type HomeAction =
  | GetSlides
  | FetchSlides
  | GetNews
  | FetchNews;
