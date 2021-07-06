import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";

import { TestService } from "src/app/shared/modules/works/test.service";

import * as TestActions from "./test.actions";
import * as fromApp from '../../../store/app.reducer';



@Injectable()
export class TestEffects {

  autoLoginTest = createEffect(() =>
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
    { dispatch: true }
  );

  storeSolvedTests = createEffect(() =>
    this.actions$.pipe(
      ofType(TestActions.STORE_SOLVED_TESTS),
      withLatestFrom(this.store.select('OnlineTest')),
      switchMap(([actionData, testState]) => {
        return this.testService.storeSolvedTests(testState.solvedTests);
      }),
    ),
    { dispatch: false }
  );

  getCurTestNumber = createEffect(() =>
  this.actions$.pipe(
    ofType(TestActions.FETCH_CURRENT_TEST),
    switchMap(() => {
      return this.testService.getCurrentTestIndex();
    }),
    map(curTest => {
      return new TestActions.GetCurTestId(curTest);
    })
  ),
  { dispatch: true }
);

  constructor(
    private actions$: Actions,
    private router: Router,
    private testService: TestService,
    private store: Store<fromApp.AppState>
  ) {}

}
