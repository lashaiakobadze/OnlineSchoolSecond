import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { TestScheduler } from "rxjs/testing";
import { Observable } from "rxjs";

import { AdminService } from "../admin.service";
import { AdminEffects } from "./admin.effects";
import { HomeService } from "src/app/shared/modules/home/home.service";
import { ContactService } from "src/app/shared/modules/contact/contact.service";
import { HomeworkService } from "src/app/shared/modules/works/homework.service";
import { TestService } from "src/app/shared/modules/works/test.service";

import { State } from './admin.reducer';
import {
  fetchBlogs,
  fetchContacts,
  fetchCurLessen,
  fetchHomeworks,
  fetchTests,
  getBlogs,
  getContacts,
  getCurrentLesson,
  getHomeworks,
  getTests,
} from "./admin.actions";

import { CurrentLesson } from "src/app/shared/modules/lesson/current-lessen.model";
import { Contact } from "src/app/shared/modules/contact/contact.model";
import { News } from "src/app/shared/modules/home/news.model";
import { Homework } from "src/app/shared/modules/works/models/homework.model";
import { Test } from "src/app/shared/modules/works/models/test.model";

describe('AdminEffects', () => {
  const initialState = {
    messages: [],
    blogs: [],
    homeworks: [],
    tests: [],
    curTest: null,
    curHomework: null,
    curLesson: null,
  };
  const adminService = jasmine.createSpyObj('AdminService', ['getCurrentLesson']);
  const homeService = jasmine.createSpyObj('HomeService', ['getBlogs']);
  const contactService = jasmine.createSpyObj('ContactService', ['getContacts']);
  const homeworkService = jasmine.createSpyObj('HomeworkService', ['getHomeworks']);
  const testService = jasmine.createSpyObj('TestService', ['getTests']);

  let effects: AdminEffects;
  let actions: Observable<any>;
  let store: MockStore<State>;
  let testScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: AdminService, useValue: adminService },
        { provide: HomeService, useValue: homeService },
        { provide: ContactService, useValue: contactService },
        { provide: HomeworkService, useValue: homeworkService },
        { provide: TestService, useValue: testService },
      ],
    });

    effects = TestBed.inject(AdminEffects);
    store = TestBed.inject(MockStore);
    store.setState({
      messages: [],
      blogs: [],
      homeworks: [],
      tests: [],
      curTest: null,
      curHomework: null,
      curLesson: null,
    });

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });
  });

  it('Should be created', () => {
    expect(effects).toBeTruthy();
  });


  describe('getContactsMsg', () => {
    it('should handle contacts and return getContacts action', () => {
      const contacts: Array<Contact> = [
        {
          email: 'test@gmail.com',
          message: 'test msg',
          uId: 'visitor'
        }
      ];
      const action = fetchContacts();
      const outcome = getContacts({ contacts });

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: contacts });
        contactService.getContacts.and.returnValue(response);

        expectObservable(effects.getContactsMsg).toBe('--b', { b: outcome });
      });
    });
  });

  describe('getBlogs', () => {
    it('should handle blogs and return getBlogs action', () => {
      const blogs: Array<News> = [
        {
          id: '123781238',
          date: new Date().toString(),
          title: 'test',
          imgPath: 'test path',
          info: 'test info',
        }
      ];
      const action = fetchBlogs();
      const outcome = getBlogs({ blogs });

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: blogs });
        homeService.getBlogs.and.returnValue(response);

        expectObservable(effects.getBlogs).toBe('--b', { b: outcome });
      });
    });
  });


  describe('getHomeworks', () => {
    it('should handle homeworks and return getHomeworks action', () => {
      const homeworks: Homework[] = [
        {
          homeworkNumber: 1,
          tasks: []
        }
      ];
      const action = fetchHomeworks();
      const outcome = getHomeworks({ homeworks });

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: homeworks });
        homeworkService.getHomeworks.and.returnValue(response);

        expectObservable(effects.getHomeworks).toBe('--b', { b: outcome });
      });
    });
  });

  describe('getTests', () => {
    it('should handle tests and return getTests action', () => {
      const tests: Test[] = [
        {
          TestNumber: 1,
          tests: []
        }
      ];
      const action = fetchTests();
      const outcome = getTests({ tests });

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: tests });
        testService.getTests.and.returnValue(response);

        expectObservable(effects.getTests).toBe('--b', { b: outcome });
      });
    });
  });

  describe('getLessons', () => {
    it('should handle CurLessen and return getCurrentLesson action', () => {
      const currentLesson: CurrentLesson = {
        curLessenLink: 'http/facebook.com',
        group: 'A',
      };
      const action = fetchCurLessen();
      const outcome = getCurrentLesson({ currentLesson });

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: currentLesson });
        adminService.getCurrentLesson.and.returnValue(response);

        expectObservable(effects.getLessons).toBe('--b', { b: outcome });
      });
    });
  });

});
