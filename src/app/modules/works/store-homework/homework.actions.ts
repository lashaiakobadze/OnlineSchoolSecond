import { Action } from "@ngrx/store";
import { Homework } from "../../../shared/modules/works/models/homework.model";
import { SolvedHomework } from "../../../shared/modules/works/models/solved-homework.model";
import { SolvedTask } from "../../../shared/modules/works/models/solved-task.model";
import { CurrentHomework } from "../../admin/models/current-homework.model";

export const FETCH_HOMEWORKS = '[Homework] Fetch Homeworks';
export const GET_HOMEWORKS = '[Homework] Get Homeworks';

export const GET_CURRENT_HOMEWORK_INDEX = '[Homework] Get Current Homework index';
export const FETCH_CURRENT_HOMEWORK_INDEX = '[Homework] Fetch Current Homework index';
export const GET_CURRENT_HOMEWORK = '[Homework] Get Current Homework';

export const GO_TO_HOMEWORK = '[Homework] Go To Homework';
export const CLEAR_ANSWERED_TASKS = '[Homework] Clear Answered Tasks';

export const ADD_ANSWERED_TASK = '[Homework] Add Answered Task';
export const ADD_ANSWERED_HOMEWORK = '[Homework] Add Answered Homework';
export const GET_HOMEWORKS_PERCENTAGE = '[Homework] Get Homework Percentage';
export const GET_HOMEWORKS_SUM = '[Homework] Get Homework Sum';
export const GET_ACTIVITIES_FIRST_SUM = '[Homework] Get Activities First Sum';
export const GET_WRITTEN_MODE = '[Homework] Get Written Mode';
export const GET_HOMEWORK_MODE = '[Homework] Get Homework mode';
export const GET_HOMEWORK_MODE_BACK = '[Homework] Get Homework mode Back';

export const GET_SOLVED_HOMEWORK = '[Homework] Get Solved Homework';
export const FETCH_SOLVED_HOMEWORK = '[Homework] Fetch Solved Homework';
export const STORE_SOLVED_HOMEWORK = '[Homework] Store Solved Homework';


export class FetchHomeworks implements Action {
  readonly type = FETCH_HOMEWORKS;
}

export class GetHomeworks implements Action {
  readonly type = GET_HOMEWORKS;

  constructor(public payload: Homework[]) {}
}

export class FetchCurTestIndex implements Action {
  readonly type = FETCH_CURRENT_HOMEWORK_INDEX;
}

export class GetCurHomeworkIndex implements Action {
  readonly type = GET_CURRENT_HOMEWORK_INDEX;

  constructor(public payload: CurrentHomework) {}
}

export class GetSolvedHomework implements Action {
  readonly type = GET_SOLVED_HOMEWORK;

  constructor(public payload: SolvedHomework[]) {}
}

export class FetchSolvedHomework implements Action {
  readonly type = FETCH_SOLVED_HOMEWORK;
}

export class StoreSolvedHomework implements Action {
  readonly type = STORE_SOLVED_HOMEWORK;
}

export class GetCurrentHomework implements Action {
  readonly type = GET_CURRENT_HOMEWORK;

  constructor(public payload: Homework) {}
}

export class GoToHomework implements Action {
  readonly type = GO_TO_HOMEWORK;

  constructor(public payload: { homeworkNumber: number, homeworkIsWritten: number }){}
}

export class AddAnsweredTask implements Action {
  readonly type = ADD_ANSWERED_TASK;

  constructor(public payload: SolvedTask) {}
}

export class AddAnsweredHomework implements Action {
  readonly type = ADD_ANSWERED_HOMEWORK;

  constructor(public payload: SolvedHomework) {}
}

export class getAnsweredHomeworksPercentage implements Action {
  readonly type = GET_HOMEWORKS_PERCENTAGE;
}

export class getAnsweredHomeworksSum implements Action {
  readonly type = GET_HOMEWORKS_SUM;
}

export class getActivitiesFirstSum implements Action {
  readonly type = GET_ACTIVITIES_FIRST_SUM;
}

export class GetWrittenMode implements Action {
  readonly type = GET_WRITTEN_MODE;
}

export class GetHomeworkMode implements Action {
  readonly type = GET_HOMEWORK_MODE;
}

export class GetHomeworkModeBack implements Action {
  readonly type = GET_HOMEWORK_MODE_BACK;
}

export class ClearAnsweredTasks implements Action {
  readonly type = CLEAR_ANSWERED_TASKS;
}

export type HomeworkActions =
  | FetchHomeworks
  | GetHomeworks
  | GetCurrentHomework
  | FetchSolvedHomework
  | GetSolvedHomework
  | AddAnsweredTask
  | AddAnsweredHomework
  | getAnsweredHomeworksPercentage
  | getAnsweredHomeworksSum
  | getActivitiesFirstSum
  | GetWrittenMode
  | GetHomeworkMode
  | GetHomeworkModeBack
  | ClearAnsweredTasks
  | GetCurHomeworkIndex
  ;
