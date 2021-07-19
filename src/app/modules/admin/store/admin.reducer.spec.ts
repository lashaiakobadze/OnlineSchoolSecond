import * as fromReducer from './admin.reducer';
import {
  getContacts,
  addNewBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
  getHomeworks,
  addNewHomework,
  getTests,
  addNewTest,
  storeCurrentTest,
  storeCurrentHomework,
  getCurrentLesson,
  storeCurrentLesson
} from './admin.actions';

import { News } from 'src/app/shared/modules/home/news.model';
import { Contact } from 'src/app/shared/modules/contact/contact.model';
import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { Test } from 'src/app/shared/modules/works/models/test.model';
import { CurrentTest } from '../models/current-test.model';
import { CurrentHomework } from '../models/current-homework.model';
import { CurrentLesson } from 'src/app/shared/modules/lesson/current-lessen.model';


describe('AdminReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;

      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.adminReducer(initialState, action);

      expect(state).toBe(initialState);
      expect(state).toEqual(initialState);
    });
  });

  describe('getContacts action', () => {
    it('should retrieve all contacts and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Array<Contact> = [
        {
          email: 'test@gmail.com',
          message: 'test msg',
          uId: 'visitor'
        }
      ];

      const action = getContacts({ contacts: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.messages).toEqual(newState);
      expect(state.messages).not.toBe(newState);
    });
  });

  describe('getBlogs action', () => {
    it('should retrieve all blogs and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Array<News> = [
        {
          id: '123781238',
          date: new Date().toString(),
          title: 'test',
          imgPath: 'test path',
          info: 'test info',
        }
      ];

      const action = getBlogs({ blogs: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.blogs).toEqual(newState);
      expect(state.blogs).not.toBe(newState);
    });
  });

  describe('addNewBlog action', () => {
    it('should retrieve all blogs and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: News[] = [
        {
          id: '123781238',
          date: new Date().toString(),
          title: 'test',
          imgPath: 'test path',
          info: 'test info',
        }
      ];

      const action = addNewBlog({ blog: newState[0] });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.blogs).toEqual(newState);
      expect(state.blogs).not.toBe(newState);
    });
  });

  describe('updateBlog action', () => {
    it('should retrieve all blogs and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: News[] = [
        {
          id: '123781238',
          date: new Date().toString(),
          title: 'test',
          imgPath: 'test path',
          info: 'test info',
        }
      ];

      const action = updateBlog({ blog: newState[0] });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.blogs).toEqual(newState);
      expect(state.blogs).not.toBe(newState);
    });
  });

  describe('deleteBlog action', () => {
    it('should retrieve all blogs and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: News[] = [
        {
          id: '123781238',
          date: new Date().toString(),
          title: 'test',
          imgPath: 'test path',
          info: 'test info',
        }
      ];

      const action = deleteBlog({ blog: newState[0] });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.blogs.length).not.toEqual(newState.length);
      expect(state.blogs).not.toBe(newState);
    });
  });

  describe('getHomeworks action', () => {
    it('should retrieve all homeworks and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Homework[] = [
        {
          homeworkNumber: 1,
          tasks: []
        }
      ];

      const action = getHomeworks({ homeworks: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.homeworks).toEqual(newState);
      expect(state.homeworks).not.toBe(newState);
    });
  });

  describe('addNewHomework action', () => {
    it('should retrieve all homeworks and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Homework[] = [
        {
          homeworkNumber: 1,
          tasks: []
        }
      ];

      const action = addNewHomework({ homework: newState[0] });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.homeworks).toEqual(newState);
      expect(state.homeworks).not.toBe(newState);
    });
  });

  describe('getTests action', () => {
    it('should retrieve all tests and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Test[] = [
        {
          TestNumber: 1,
          tests: []
        }
      ];

      const action = getTests({ tests: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.tests).toEqual(newState);
      expect(state.tests).not.toBe(newState);
    });
  });

  describe('addNewTest action', () => {
    it('should retrieve all tests and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Test[] = [
        {
          TestNumber: 1,
          tests: []
        }
      ];

      const action = addNewTest({ test: newState[0] });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.tests).toEqual(newState);
      expect(state.tests).not.toBe(newState);
    });
  });

  describe('storeCurrentTest action', () => {
    it('should retrieve all curTest and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: CurrentTest = { curHomeworkNumber: '#2' };

      const action = storeCurrentTest({ currentTest: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.curTest).toEqual(newState);
      expect(state.curTest).not.toBe(newState);
    });
  });


  describe('storeCurrentHomework action', () => {
    it('should retrieve all curHomework and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: CurrentHomework = { curTestNumber: '#1' };

      const action = storeCurrentHomework({ currentHomework: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.curHomework).toEqual(newState);
      expect(state.curHomework).not.toBe(newState);
    });
  });

  describe('getCurrentLesson action', () => {
    it('should retrieve all curLesson and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: CurrentLesson = {
        curLessenLink: 'http/facebook.com',
        group: 'A',
      };

      const action = getCurrentLesson({ currentLesson: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.curLesson).toEqual(newState);
      expect(state.curLesson).not.toBe(newState);
    });
  });

  describe('storeCurrentLesson action', () => {
    it('should retrieve all curLesson and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: CurrentLesson = {
        curLessenLink: 'http/facebook.com',
        group: 'A',
      };

      const action = storeCurrentLesson({ currentLesson: newState });
      const state = fromReducer.adminReducer(initialState, action);

      expect(state.curLesson).toEqual(newState);
      expect(state.curLesson).not.toBe(newState);
    });
  });
});
