import { Action } from "@ngrx/store";
import { SolvedTestTask } from "../../../shared/modules/works/models/solved-test-task.model";
import { SolvedTest } from "../../../shared/modules/works/models/solved-test.model";
import { Test } from "../../../shared/modules/works/models/test.model";
import { CurrentTest } from "../../admin/models/current-test.model";

export const FETCH_TESTS = '[Test] Fetch Tests';
export const GET_TESTS = '[Test] Get Tests';

export const GET_CURRENT_TEST = '[TEST] Get Current Test Index';
export const FETCH_CURRENT_TEST = '[TEST] Fetch Current Test Index';
export const GET_CURRENT_ONLINE_TEST = '[TEST] Get Current Online test';

export const ADD_ANSWERED_TEST_TASK = '[TEST] Add Answered Task';
export const ADD_ANSWERED_TEST = '[TEST] Add Answered Test';

export const GET_SOLVED_MODE = '[TEST] Add Get Solved Mode';
export const GET_TESTS_PERCENTAGE = '[TEST] Get Test Percentage';
export const GET_TESTS_SUM = '[TEST] Get Test Sum';
export const GET_ACTIVITIES_SECOND_SUM = '[TEST] Get Activities Second Sum';
export const GET_TEST_MODE = '[TEST] Get Test mode';
export const GET_TEST_MODE_BACK = '[TEST] Get Test mode Back';

export const GO_TO_TEST = '[TEST] Go To Test';
export const CLEAR_ANSWERED_TASKS = '[TEST] Clear Answered Tasks';

export const FETCH_SOLVED_TEST = '[TEST] Fetch Solved Test';
export const GET_SOLVED_TESTS = '[TEST] Get Solved Tests';
export const STORE_SOLVED_TESTS = '[TEST] Store Solve Tests';



export class FetchTests implements Action {
  readonly type = FETCH_TESTS;
}

export class GetTests implements Action {
  readonly type = GET_TESTS;

  constructor(public payload: Test[]) {}
}

export class FetchCurTestId implements Action {
  readonly type = FETCH_CURRENT_TEST;
}

export class GetCurTestId implements Action {
  readonly type = GET_CURRENT_TEST;

  constructor(public payload: CurrentTest) {}
}

export class GetCurrentOnlineTest implements Action {
  readonly type = GET_CURRENT_ONLINE_TEST;

  constructor(public payload: Test) {}
}

export class FetchSolvedTest implements Action {
  readonly type = FETCH_SOLVED_TEST;
}

export class GetSolvedTests implements Action {
  readonly type = GET_SOLVED_TESTS;

  constructor(public payload: SolvedTest[]) {}
}

export class StoreSolvedTests implements Action {
  readonly type = STORE_SOLVED_TESTS;
}

export class AddAnsweredTestTask implements Action {
  readonly type = ADD_ANSWERED_TEST_TASK;

  constructor(public payload: SolvedTestTask) {}
}

export class AddAnsweredTest implements Action {
  readonly type = ADD_ANSWERED_TEST;

  constructor(public payload: SolvedTest) {}
}

export class GetSolvedMode implements Action {
  readonly type = GET_SOLVED_MODE;
}

export class getAnsweredTestsPercentage implements Action {
  readonly type = GET_TESTS_PERCENTAGE;
}

export class getAnsweredTestSum implements Action {
  readonly type = GET_TESTS_SUM;
}

export class getActivitiesSecondSum implements Action {
  readonly type = GET_ACTIVITIES_SECOND_SUM;
}

export class GetTestMode implements Action {
  readonly type = GET_TEST_MODE;
}

export class GetTestModeBack implements Action {
  readonly type = GET_TEST_MODE_BACK;
}

export class GoToTest implements Action {
  readonly type = GO_TO_TEST;

  constructor(public payload: { testNumber: number, isSolved: number }){}
}

export class ClearAnsweredTasks implements Action {
  readonly type = CLEAR_ANSWERED_TASKS;
}


export type TestActions =
  | GetTests
  | GetCurrentOnlineTest
  | GetCurTestId
  | GetSolvedTests
  | AddAnsweredTestTask
  | AddAnsweredTest
  | GetSolvedMode
  | getAnsweredTestsPercentage
  | getAnsweredTestSum
  | getActivitiesSecondSum
  | GetTestMode
  | GetTestModeBack
  | ClearAnsweredTasks
  ;
