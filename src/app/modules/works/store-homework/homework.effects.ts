import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { Store } from "@ngrx/store";


import { HomeworkService } from "src/app/shared/modules/works/homework.service";

import * as HomeworkActions from "./homework.actions";
import * as fromApp from '../../../store/app.reducer';


@Injectable()
export class HomeworkEffects {

  autoLoginHomework = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeworkActions.GO_TO_HOMEWORK),
      switchMap((homeworkActions: HomeworkActions.GoToHomework) => {
          return of(homeworkActions.payload)
          .pipe(
            tap((data) => {
              this.router.navigate([`/works/homework/${data.homeworkNumber}`], { queryParams: { isWritten: `${data.homeworkIsWritten}`} });
            })
          )
        }
      )
    ),
    { dispatch: false }
  );


  getHomeworks = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeworkActions.FETCH_HOMEWORKS),
      switchMap(() => {
        return this.homeworkService.getHomeworks();
      }),
      map(homeworks => {
        return homeworks.map(homework => {
          return {
            ...homework
          }
        });
      }),
      map((homeworks) => {
        return new HomeworkActions.GetHomeworks(homeworks);
      }),
    ),
    { dispatch: false }
  );


  getSolvedHomework = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeworkActions.FETCH_SOLVED_HOMEWORK),
      switchMap(() => {
        return this.homeworkService.getSolvedHomeworks();
      }),
      map(solvedHomework => {
        return new HomeworkActions.GetSolvedHomework(solvedHomework);
      })
    ),
    { dispatch: false }
  );


  storeSolvedHomework = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeworkActions.STORE_SOLVED_HOMEWORK),
      withLatestFrom(this.store.select('homeWork')),
      switchMap(([actionData, homeworkState]) => {
        return this.homeworkService.storeSolvedHomeworks(homeworkState.answeredHomeworks);
      }),
    ),
    { dispatch: false }
  );


  getCurHomeworkIndex = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeworkActions.FETCH_CURRENT_HOMEWORK_INDEX),
      switchMap(() => {
        return this.homeworkService.getCurrentTestIndex();
      }),
      map(curHomeworkIndex => {
        return new HomeworkActions.GetCurHomeworkIndex(curHomeworkIndex);
      })
    ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private homeworkService: HomeworkService,
    private store: Store<fromApp.AppState>
  ) {}
}
