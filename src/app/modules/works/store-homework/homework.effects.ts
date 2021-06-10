import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SolvedHomework } from "../models/solved-homework.model";

import * as HomeworkActions from "./homework.actions";


@Injectable()
export class HomeworkEffects {

  @Effect({dispatch: false})
  authLogout = this.actions$.pipe(
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
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private http: HttpClient
  ) {}

  // This methods will be added when the back is able to receive new assignments from the admin panel.
  // @Effect()
  // getSolvedHomework = this.actions$.pipe(
  //   ofType(HomeworkActions.FETCH_SOLVED_HOMEWORK),
  //   switchMap(() => {
  //     return this.http
  //     .get<SolvedHomework[]>(
  //       'https://onlineschool-bee89-default-rtdb.firebaseio.com/solvedHomework.json'
  //     )
  //   }),
  //   map(solvedHomework => {
  //     return new HomeworkActions.GetSolvedHomework(solvedHomework);
  //   })
  // )

}
