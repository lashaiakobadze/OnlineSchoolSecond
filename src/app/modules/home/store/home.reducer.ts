import { News } from "../../../shared/modules/home/news.model";
import { Slide } from "../slides.model";
import * as HomeActions from './home.actions';

export interface State {
  slides: Slide[];
  news: News[];
  loading: boolean;
}

const initialState: State = {
  slides: [],
  news: [],
  loading: true
};

export function homeReducer(state = initialState, action: HomeActions.HomeAction) {
  switch(action.type) {
    case HomeActions.GET_SLIDES:
      return {
        ...state,
        slides: [...action.payload],
        loading: false
      }
    case HomeActions.GET_NEWS:
      let news = [...action.payload].reverse();
      return {
        ...state,
        news: news,
      }
    default:
      return {
        ...state,
      }
  }
}
