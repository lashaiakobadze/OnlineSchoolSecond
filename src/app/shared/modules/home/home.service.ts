import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { News } from './news.model';
import { Slide } from 'src/app/modules/home/slides.model';
import { LoaderService } from '../../components/loader/loader.service';

import { environment } from 'src/environments/environment';
const Url = environment.firebaseConfig.databaseURL;

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
      `${Url}/slides.json`
    ).pipe(this.loaderService.useLoader);
  };

  getBlogs(): Observable<News[]> {
    return this.http
    .get<News[]>(
      `${Url}/news.json`
    ).pipe(this.loaderService.useLoader);
  };
}

// "dataGroups": [
//   {
//     "name": "home",
//     "urls": [
//       "https://onlineschool-bee89-default-rtdb.firebaseio.com/*.json"
//     ],
//     "cacheConfig": {
//       "maxSize": 5,
//       "maxAge": "6h",
//       "timeout": "20s",
//       "strategy": "freshness"
//     }
//   }
// ]
