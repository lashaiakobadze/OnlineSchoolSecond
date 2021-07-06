import { Homework } from "../../../shared/modules/works/models/homework.model";
import { SolvedHomework } from "../../../shared/modules/works/models/solved-homework.model";
import { SolvedTask } from "../../../shared/modules/works/models/solved-task.model";
import { CurrentHomework } from "../../admin/models/current-homework.model";

import * as HomeworkActions from './homework.actions';

export interface State {
  homeworks: Homework[];
  curHomeworkNumber: CurrentHomework;
  homework: Homework;
  answeredHomeworks: SolvedHomework[];
  answeredTasks: SolvedTask[];
  homeworksPercentage: number;
  homeworksSum: number;
  firstActivities: number,
  homeworkIsWritten: number,
  isHomeworkMode: boolean;
};

const initialState: State = {
  homeworks: [],
  curHomeworkNumber: null,
  homework: null,
  answeredHomeworks: [],
  answeredTasks: [],
  homeworksPercentage: null,
  homeworksSum: null,
  firstActivities: null,
  homeworkIsWritten: 0,
  isHomeworkMode: false
};


export function homeworkReducer(state = initialState, action: HomeworkActions.HomeworkActions) {
  switch(action.type) {
    case HomeworkActions.GET_HOMEWORKS:
      return {
        ...state,
        homeworks: [...action.payload]
      };
    case HomeworkActions.GET_CURRENT_HOMEWORK:
      return {
        ...state,
        homework: {...action.payload}
      };
    case HomeworkActions.GET_CURRENT_HOMEWORK_INDEX:
      return {
        ...state,
        curHomeworkNumber: {...action.payload}
      };
    case HomeworkActions.GET_SOLVED_HOMEWORK:
      return {
        ...state,
        answeredHomeworks: [...action.payload]
      };
    case HomeworkActions.ADD_ANSWERED_TASK:
      return {
        ...state,
        answeredTasks: [...state.answeredTasks, action.payload],
      };
    case HomeworkActions.ADD_ANSWERED_HOMEWORK:
      return {
        ...state,
        answeredHomeworks: [...state.answeredHomeworks, action.payload],
      }
    case HomeworkActions.GET_HOMEWORKS_PERCENTAGE:
      let averagePrec = 0;
      const answeredHomework = [...state.answeredHomeworks];
      let percentage: number;
      answeredHomework.forEach(homework => {
        averagePrec += homework.getPercentage;
      });
      percentage = Math.round(averagePrec/answeredHomework.length);
      return {
        ...state,
        homeworksPercentage: percentage,
      }
    case HomeworkActions.GET_HOMEWORKS_SUM:
      let sum = 0;
      const answeredHomeworks = [...state.answeredHomeworks];
      answeredHomeworks.forEach(homework => {
        sum += homework.getScore;
      });
      return {
        ...state,
        homeworksSum: sum
      }
    case HomeworkActions.GET_ACTIVITIES_FIRST_SUM:
      let firstSum = 0;
      const answeredHomeworksActivities = [...state.answeredHomeworks];
      answeredHomeworksActivities.forEach(activity => {
        firstSum += activity.getActivityFirst;
      });
      return {
        ...state,
        firstActivities: firstSum
      }
    case HomeworkActions.GET_WRITTEN_MODE:
      let status = state.homeworkIsWritten;
      status = 1;
      return {
        ...state,
        homeworkIsWritten: status
      }
    case HomeworkActions.GET_HOMEWORK_MODE:
      let isActive = state.isHomeworkMode;
        isActive = !isActive;
      return {
        ...state,
        isHomeworkMode: isActive
      }
    case HomeworkActions.GET_HOMEWORK_MODE_BACK:
      let isInActive = state.isHomeworkMode;
      isInActive = false;
      return {
        ...state,
        isHomeworkMode: isInActive
      }
    case HomeworkActions.CLEAR_ANSWERED_TASKS:
      let solvedTasks: SolvedTask[] = [];
      return {
        ...state,
        answeredTasks: solvedTasks
      }
    default:
      return {
        ...state,
      }
    }
}
