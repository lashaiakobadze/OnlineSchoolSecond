import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { News } from './news.model';
import { Slide } from 'src/app/modules/home/slides.model';
import { LoaderService } from '../../components/loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getSlides(): Observable<Slide[]> {
    return this.http
    .get<Slide[]>(
      'https://onlineschool-bee89-default-rtdb.firebaseio.com/slides.json'
    ).pipe(this.loaderService.useLoader);
  };

  getBlogs(): Observable<News[]> {
    return this.http
    .get<News[]>(
      'https://onlineschool-bee89-default-rtdb.firebaseio.com/news.json'
    ).pipe(this.loaderService.useLoader);
  };
}
