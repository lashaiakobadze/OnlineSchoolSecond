import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import * as TestActions from "./test.actions";


@Injectable()
export class TestEffects {

  @Effect({dispatch: false})
  authLogout = this.actions$.pipe(
    ofType(TestActions.GO_TO_TEST),
    switchMap((testActions: TestActions.GoToTest) => {
        return of(testActions.payload)
        .pipe(
          tap((data) => {
            this.router.navigate([`/works/online-test//${data.testNumber}`], { queryParams: { isSolved: `${data.isSolved}`} });
          })
        )
      }
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

}
