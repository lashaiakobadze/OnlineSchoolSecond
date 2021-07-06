import { SolvedTestTask } from "../../../shared/modules/works/models/solved-test-task.model";
import { SolvedTest } from "../../../shared/modules/works/models/solved-test.model";
import { Test } from "../../../shared/modules/works/models/test.model";

import * as TestActions from './test.actions';

export interface State {
  tests: Test[];
  test: Test;
  solvedTests: SolvedTest[];
  solvedTestTasks: SolvedTestTask[];
  testsPercentage: number;
  testsSum: number;
  secondActivities: number;
  testIsWritten: number;
  isTestMode: boolean;
};

const initialState: State = {
  tests: [],
  test: null,
  solvedTests: [],
  solvedTestTasks: [],
  testsPercentage: null,
  testsSum: null,
  secondActivities: null,
  testIsWritten: 0, // I did it with a number because, to move from the URL to Boolean.
  isTestMode: false
};


export function homeworkReducer(state = initialState, action: TestActions.TestActions) {
  switch(action.type) {
    case TestActions.GET_TESTS:
      return {
        ...state,
        tests: [...action.payload]
      };
    case TestActions.GET_SOLVED_TESTS:
      return {
        ...state,
        solvedTests: [...action.payload]
      };
    case TestActions.ADD_ANSWERED_TEST_TASK:
      return {
        ...state,
        solvedTestTasks: [...state.solvedTestTasks, action.payload],
      };
    case TestActions.GET_CURRENT_ONLINE_TEST:
      const curTest = action.payload;
      return {
        ...state,
        test: curTest
      };
    case TestActions.ADD_ANSWERED_TEST:
      return {
        ...state,
        solvedTests: [...state.solvedTests, action.payload],
      };
    case TestActions.GET_SOLVED_MODE:
      let status = state.testIsWritten;
      status = 1;
      return {
        ...state,
        testIsWritten: status
      };
    case TestActions.GET_TESTS_PERCENTAGE:
      let averagePrec = 0;
      let sum = 0;
      const solvedTests = [...state.solvedTests];
      solvedTests.forEach(test => {
        averagePrec += test.getTestPercentage;
        sum += test.getTestScore;
      })
      averagePrec = Math.round(averagePrec/state.solvedTests.length);
      return {
        ...state,
        testsPercentage: averagePrec,
        testsSum: sum,
      };
    case TestActions.GET_ACTIVITIES_SECOND_SUM:
      let secondSum = 0;
      const answeredTestsActivities = [...state.solvedTests];
      answeredTestsActivities.forEach(activity => {
        secondSum += activity.getActivitySecond;
      });
      return {
        ...state,
        secondActivities: secondSum
      };
    case TestActions.GET_TEST_MODE:
      let isActive = state.isTestMode;
      isActive = !isActive;
      return {
        ...state,
        isTestMode: isActive
      };
    case TestActions.GET_TEST_MODE_BACK:
      let isInActive = state.isTestMode;
      isInActive = false;
      return {
        ...state,
        isTestMode: isInActive
      };
    case TestActions.CLEAR_ANSWERED_TASKS:
      let solvedTasks: SolvedTestTask[] = [];
      return {
        ...state,
        solvedTestTasks: solvedTasks
      };
    default:
      return {
        ...state,
      };
  }
}
