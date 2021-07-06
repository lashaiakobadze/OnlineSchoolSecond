import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs/operators";

import { AdminService } from "../admin.service";
import { HomeService } from "src/app/shared/modules/home/home.service";
import { ContactService } from "../../../shared/modules/contact/contact.service";
import { HomeworkService } from "src/app/shared/modules/works/homework.service";
import { TestService } from "src/app/shared/modules/works/test.service";

import * as AdminAction from "./admin.actions";
import * as fromApp from '../../../store/app.reducer';


@Injectable()
export class AdminEffects {

  getContactsMsg = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.FETCH_CONTACTS),
      switchMap(() => {
        return this.contactService.getContacts();
      }),
      map(contacts => {
        return contacts.map(contact => {
          return {
            ...contact
          }
        });
      }),
      map((contacts) => {
        return AdminAction.getContacts({contacts});
      })
    )
  );


  getBlogs = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.FETCH_BLOGS),
      switchMap(() => {
        return this.homeService.getBlogs();
      }),
      map(blogs => {
        return blogs.map(blog => {
          return {
            ...blog
          }
        });
      }),
      map((blogs) => {
        return AdminAction.getBlogs({ blogs });
      })
    ),
  );


  storeBlogs = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.STORE_BLOGS),
      withLatestFrom(this.store.select('admin')),
      switchMap(([actionData, adminState]) => {
        return this.adminService.storeBlogs(adminState.blogs);
      }),
    ),
    { dispatch: false }
  );


  getHomeworks = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.FETCH_HOMEWORKS),
      switchMap(() => {
        return this.homeworkService.getHomeworks();
      }),
      map(homeworks => {
        return homeworks.map(homework => {
          return {
            ...homework
          }
        });
      }),
      map((homeworks) => {
        return AdminAction.getHomeworks({ homeworks });
      })
    ),
    { dispatch: true }
  );


  storeHomeworks = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.STORE_HOMEWORKS),
      withLatestFrom(this.store.select('admin')),
      switchMap(([actionData, adminState]) => {
        return this.adminService.storeHomework(adminState.homeworks);
      }),
    ),
    { dispatch: false }
  );


  getTests = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.FETCH_TESTS),
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
        return AdminAction.getTests({ tests });
      })
    ),
    { dispatch: true }
  );


  storeTests = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.STORE_TESTS),
      withLatestFrom(this.store.select('admin')),
      switchMap(([actionData, adminState]) => {
        return this.adminService.storeTest(adminState.tests);
      }),
    ),
    { dispatch: false }
  );


  storeCurTest = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.storeCurrentTest),
      withLatestFrom(this.store.select('admin')),
      switchMap(([actionData, adminState]) => {
        return this.adminService.storeCurrentTest(adminState.curTest);
      }),
    ),
    { dispatch: false }
  );


  storeCurHomework = createEffect(() =>
    this.action$.pipe(
      ofType(AdminAction.storeCurrentHomework),
      withLatestFrom(this.store.select('admin')),
      switchMap(([actionData, adminState]) => {
        return this.adminService.storeCurrentHomework(adminState.curHomework);
      }),
    ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private adminService: AdminService,
    private homeService: HomeService,
    private contactService: ContactService,
    private homeworkService: HomeworkService,
    private testService: TestService,
    private store: Store<fromApp.AppState>
  ) {}
}
