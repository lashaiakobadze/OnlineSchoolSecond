import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";

import { TestService } from "src/app/shared/modules/works/test.service";

import * as TestActions from "./test.actions";


@Injectable()
export class TestEffects {

  authLogout = createEffect(() =>
    this.actions$.pipe(
      ofType(TestActions.GO_TO_TEST),
      switchMap((TestActions: TestActions.GoToTest) => {
          return of(TestActions.payload)
          .pipe(
            tap((data) => {
              this.router.navigate([`/works/online-test//${data.testNumber}`], { queryParams: { isSolved: `${data.isSolved}`} });
            })
          )
        }
      )
    ),
    { dispatch: false }
  );

  getTests = createEffect(() =>
  this.actions$.pipe(
    ofType(TestActions.FETCH_TESTS),
    switchMap(() => {
      return this.testService.getTests();
    }),
    map(tests => {
      return tests.map(test => {
        return {
          ...test
        }
      });
    }),
    map((tests) => {
      return new TestActions.GetTests(tests);
    }),
  ),
  { dispatch: false }
);

getSolvedTest = createEffect(() =>
  this.actions$.pipe(
    ofType(TestActions.FETCH_SOLVED_TEST),
    switchMap(() => {
      return this.testService.getSolvedTests();
    }),
    map(solvedTest => {
      return new TestActions.GetSolvedTests(solvedTest);
    })
  ),
  { dispatch: false }
);

  constructor(
    private actions$: Actions,
    private router: Router,
    private testService: TestService
  ) {}

}
