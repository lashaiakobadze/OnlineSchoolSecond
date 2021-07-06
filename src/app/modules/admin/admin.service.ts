import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { Test } from 'src/app/shared/modules/works/models/test.model';
import { News } from '../../shared/modules/home/news.model';


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
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/news.json', blogs
      ).pipe(this.loaderService.useLoader);
  };

  storeHomework(homeworks: Homework[]): Observable<Homework[]> {
    return this.http
      .put<Homework[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/homeworks.json', homeworks
      ).pipe(this.loaderService.useLoader);
  };

  storeTest(test: Test[]): Observable<Test[]> {
    return this.http
      .put<Test[]>(
        'https://onlineschool-bee89-default-rtdb.firebaseio.com/tests.json', test
      ).pipe(this.loaderService.useLoader);
  };
}
