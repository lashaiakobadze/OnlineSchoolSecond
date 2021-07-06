import { createAction, props } from '@ngrx/store';

import { News } from "../../../shared/modules/home/news.model";
import { Contact } from "../../../shared/modules/contact/contact.model";
import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { Test } from 'src/app/shared/modules/works/models/test.model';


export const GET_CONTACTS = '[Admin] Get Contacts';
export const FETCH_CONTACTS = '[Admin] Fetch Contacts';

export const FETCH_BLOGS = '[Admin] Fetch Blogs';
export const GET_BLOGS = '[Admin] Get Blogs';
export const ADD_NEW_BLOG = '[Admin] Add New Post On Blog';
export const DELETE_BLOG = '[Admin] Delete Blog';
export const UPDATE_BLOG = '[Admin] Update Blog';
export const STORE_BLOGS = '[Admin] Store Blogs';

export const FETCH_HOMEWORKS = '[Admin] Fetch Homeworks';
export const GET_HOMEWORKS = '[Admin] Get Homeworks';
export const STORE_HOMEWORKS = '[Admin] Store Homeworks';
export const ADD_NEW_HOMEWORK = '[Admin] Add New Homework';

export const FETCH_TESTS = '[Admin] Fetch tests';
export const GET_TESTS = '[Admin] Get tests';
export const STORE_TESTS = '[Admin] Store tests';
export const ADD_NEW_TEST = '[Admin] Add New test';

export const fetchContacts = createAction(FETCH_CONTACTS);
export const getContacts = createAction(GET_CONTACTS, props<{ contacts: Contact[] }>());

export const fetchBlogs = createAction(FETCH_BLOGS);
export const getBlogs = createAction(GET_BLOGS, props<{ blogs: News[] }>());
export const addNewBlog = createAction(ADD_NEW_BLOG, props<{ blog: News }>());
export const deleteBlog = createAction(DELETE_BLOG, props<{ blog: News }>());
export const updateBlog = createAction(UPDATE_BLOG, props<{ blog: News }>());
export const storeBlogs = createAction(STORE_BLOGS);

export const fetchHomeworks = createAction(FETCH_HOMEWORKS)
export const getHomeworks = createAction(GET_HOMEWORKS, props<{ homeworks: Homework[] }>());
export const storeHomeworks = createAction(STORE_HOMEWORKS);
export const addNewHomework = createAction(ADD_NEW_HOMEWORK, props<{ homework: Homework }>());

export const fetchTests = createAction(FETCH_TESTS)
export const getTests = createAction(GET_TESTS, props<{ tests: Test[] }>());
export const storeTests = createAction(STORE_TESTS);
export const addNewTest = createAction(ADD_NEW_TEST, props<{ test: Test }>());
