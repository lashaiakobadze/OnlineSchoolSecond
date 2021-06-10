import { Action } from "@ngrx/store";
import { SolvedTestTask } from "../models/solved-test-task.model";
import { SolvedTest } from "../models/solved-test.model";
import { Test } from "../models/test.model";

export const GET_CURRENT_ONLINE_TEST = '[TEST] Get Current Online test';
export const GET_SOLVED_TESTS = '[TEST] Get Solved Tests';
export const ADD_ANSWERED_TEST_TASK = '[TEST] Add Answered Task';
export const ADD_ANSWERED_TEST = '[TEST] Add Answered Test';
export const GET_SOLVED_MODE = '[TEST] Add Get Solved Mode';
export const GET_TESTS_PERCENTAGE = '[TEST] Get Test Percentage';
export const GET_TESTS_SUM = '[TEST] Get Test Sum';
export const GET_ACTIVITIES_SECOND_SUM = '[TEST] Get Activities Second Sum';
export const GET_TEST_MODE = '[TEST] Get Test mode';
export const GET_TEST_MODE_BACK = '[TEST] Get Test mode Back';
export const GO_TO_TEST = '[TEST] Go To Test';
export const CLEAR_ANSWERED_TASKS = '[Homework] Clear Answered Tasks';

export class GetCurrentOnlineTest implements Action {
  readonly type = GET_CURRENT_ONLINE_TEST;

  constructor(public payload: Test) {}
}

export class GetSolvedTests implements Action {
  readonly type = GET_SOLVED_TESTS;

  constructor(public payload: SolvedTest[]) {}
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
  | GetCurrentOnlineTest
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
