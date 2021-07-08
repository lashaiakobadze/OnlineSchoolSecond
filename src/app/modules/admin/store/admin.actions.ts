import { createAction, props } from '@ngrx/store';

import { News } from "../../../shared/modules/home/news.model";
import { Contact } from "../../../shared/modules/contact/contact.model";
import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { Test } from 'src/app/shared/modules/works/models/test.model';
import { CurrentTest } from '../models/current-test.model';
import { CurrentHomework } from '../models/current-homework.model';
import { CurrentLesson } from '../../../shared/modules/lesson/current-lessen.model';


export const fetchContacts = createAction('[Admin] Fetch Contacts');
export const getContacts = createAction('[Admin] Get Contacts', props<{ contacts: Contact[] }>());

export const fetchBlogs = createAction('[Admin] Fetch Blogs');
export const getBlogs = createAction('[Admin] Get Blogs', props<{ blogs: News[] }>());
export const addNewBlog = createAction('[Admin] Add New Post On Blog', props<{ blog: News }>());
export const deleteBlog = createAction('[Admin] Delete Blog', props<{ blog: News }>());
export const updateBlog = createAction('[Admin] Update Blog', props<{ blog: News }>());
export const storeBlogs = createAction('[Admin] Store Blogs');

export const fetchHomeworks = createAction('[Admin] Fetch Homeworks')
export const getHomeworks = createAction('[Admin] Get Homeworks', props<{ homeworks: Homework[] }>());
export const storeHomeworks = createAction('[Admin] Store Homeworks');
export const addNewHomework = createAction('[Admin] Add New Homework', props<{ homework: Homework }>());

export const fetchTests = createAction('[Admin] Fetch tests');
export const getTests = createAction('[Admin] Get tests', props<{ tests: Test[] }>());
export const storeTests = createAction('[Admin] Store tests');
export const addNewTest = createAction('[Admin] Add New test', props<{ test: Test }>());

export const fetchCurTest = createAction('[Admin] Fetch Current test');
export const storeCurrentTest = createAction('[Admin] Store Current test', props<{ currentTest: CurrentTest }>());

export const fetchCurHomework = createAction('[Admin] Fetch Current Homework');
export const storeCurrentHomework = createAction('[Admin] Store Current Homework', props<{ currentHomework: CurrentHomework }>());

export const fetchCurLessen = createAction('[Admin] Fetch Current Lessen');
export const getCurrentLesson = createAction('[Admin] Get Current Lessen', props<{ currentLesson: CurrentLesson }>());
export const storeCurrentLesson = createAction('[Admin] Store Current Lessen', props<{ currentLesson: CurrentLesson }>());
