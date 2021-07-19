import { Action, createReducer, on } from '@ngrx/store';

import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { Test } from 'src/app/shared/modules/works/models/test.model';
import { Contact } from '../../../shared/modules/contact/contact.model';
import { News } from '../../../shared/modules/home/news.model';
import { CurrentHomework } from '../models/current-homework.model';
import { CurrentLesson } from '../../../shared/modules/lesson/current-lessen.model';
import { CurrentTest } from '../models/current-test.model';

import * as AdminActions from './admin.actions';


export interface State {
  messages: Contact[];
  blogs: News[];
  homeworks: Homework[];
  tests: Test[];
  curTest: CurrentTest;
  curHomework: CurrentHomework;
  curLesson: CurrentLesson;
};

export const initialState: State = {
  messages: [],
  blogs: [],
  homeworks: [],
  tests: [],
  curTest: null,
  curHomework: null,
  curLesson: null,
};

export const adminReducer = createReducer(
  initialState,
  on(AdminActions.getContacts, (state, { contacts }) => ({ ...state, messages: [...contacts] })),

  on(AdminActions.addNewBlog, (state, { blog } ) => ({ ...state, blogs: [...state.blogs, blog ] })),
  on(AdminActions.getBlogs, (state, { blogs }) => {
    let reversedBlogs = [...blogs].reverse();
    return { ...state, blogs: reversedBlogs };
  }),
  on(AdminActions.deleteBlog, (state, blog) => {
    let blogs = [...state.blogs];
    let updatedBlogs = blogs.filter(blogItem => { return blogItem.id !== blog.blog.id } );
    return { ...state, blogs: [...updatedBlogs] };
  }),
  on(AdminActions.updateBlog, (state, blog) => {
    let blogs = [...state.blogs];
    let updatedBlogs = blogs.filter(blogItem => { return blogItem.id !== blog.blog.id } );
    updatedBlogs.push({...blog.blog});
    return { ...state, blogs: [...updatedBlogs] };
  }),

  on(AdminActions.getHomeworks, (state, { homeworks }) => ({ ...state, homeworks: [...homeworks] })),
  on(AdminActions.addNewHomework, (state, { homework } ) => ({ ...state, homeworks: [...state.homeworks, {...homework} ] })),

  on(AdminActions.getTests, (state, { tests }) => ({ ...state, tests: [...tests] })),
  on(AdminActions.addNewTest, (state, { test } ) => ({ ...state, tests: [...state.tests, test ] })),

  on(AdminActions.storeCurrentTest, (state, { currentTest }) => ({ ...state, curTest: { ...currentTest }})),
  on(AdminActions.storeCurrentHomework, (state, { currentHomework }) => ({ ...state, curHomework: { ...currentHomework }})),

  on(AdminActions.getCurrentLesson, (state, { currentLesson }) => ({ ...state, curLesson: { ...currentLesson } })),
  on(AdminActions.storeCurrentLesson, (state, { currentLesson }) => ({ ...state, curLesson: { ...currentLesson }})),
);

export function reducer(state: State | undefined, action: Action) {
  return adminReducer(state, action);
};
