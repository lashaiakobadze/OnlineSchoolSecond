import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';

import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { Test } from 'src/app/shared/modules/works/models/test.model';
import { News } from '../../shared/modules/home/news.model';
import { CurrentTest } from './models/current-test.model';
import { CurrentHomework } from './models/current-homework.model';
import { CurrentLesson } from '../../shared/modules/lesson/current-lessen.model';

const Url = environment.firebaseConfig.databaseURL;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminPassword: string = null;
  isAdminMode = false;

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }


  storeBlogs(blogs: News[]): Observable<News[]> {
    return this.http
      .put<News[]>(
        `${Url}/news.json`, blogs
      ).pipe(this.loaderService.useLoader);
  };


  storeHomework(homeworks: Homework[]): Observable<Homework[]> {
    return this.http
      .put<Homework[]>(
        `${Url}/homeworks.json`, homeworks
      ).pipe(this.loaderService.useLoader);
  };


  storeCurrentHomework(curHomework: CurrentHomework): Observable<CurrentHomework> {
    return this.http
      .put<CurrentHomework>(
        `${Url}/currentHomework.json`, curHomework
      ).pipe(this.loaderService.useLoader);
  };


  storeTest(test: Test[]): Observable<Test[]> {
    return this.http
      .put<Test[]>(
        `${Url}/tests.json`, test
      ).pipe(this.loaderService.useLoader);
  };


  storeCurrentTest(curTest: CurrentTest): Observable<CurrentTest> {
    return this.http
      .put<CurrentTest>(
        `${Url}/currentTest.json`, curTest
      ).pipe(this.loaderService.useLoader);
  };


  storeCurrentLesson(curLesson: CurrentLesson): Observable<CurrentLesson> {
    return this.http
      .put<CurrentLesson>(
        `${Url}/currentLesson.json`, curLesson
      ).pipe(this.loaderService.useLoader);
  };

  getCurrentLesson (): Observable<CurrentLesson> {
    return this.http
      .get<CurrentLesson>(
        `${Url}/currentLesson.json`
      ).pipe(this.loaderService.useLoader);
  };
}
