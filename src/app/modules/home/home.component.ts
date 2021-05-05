import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { HomeService } from './home.service';
import { News } from './news.model';
import { Slide } from './slides.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  slideObjects: Slide[] = [];
  slideObjSub: Subscription;
  newsObjects: News[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    // Get news data for blog with resolve route
    this.homeService.fetchNews().subscribe();
    this.newsObjects = this.homeService.getNewsData();

    // Get slides data without resolve route
    this.slideObjSub = this.homeService.fetchSlides()
      .subscribe(
        (slideObjects: Slide[]) => {
          this.slideObjects = slideObjects;
          this.isLoading = false;
        }
      );
    this.slideObjects = this.homeService.getSlidesData();
  }


  ngOnDestroy() {
    this.slideObjSub.unsubscribe();
  }


  // Responsible slide
  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 750,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 2
      }
    },
    nav: false
  }

}

  // owlData(e: SlidesOutputData){
  //   console.log(e);
  // }

  // slideObjects =
  //  [
  //    {
  //     id: 1,
  //     src:'https://image.freepik.com/free-vector/online-school-digital-internet-tutorials-courses-online-education-e-learning-web-banner-template-website-landing-page-doodle-style_155957-19.jpg',
  //     alt:'Carousel 1',
  //     title:'Carousel 1'
  //    },
  //    {
  //      id: 2,
  //      src:'https://pbacademic.com/wp-content/uploads/2020/08/online-education-pb.jpg',
  //      alt:'Carousel 2',
  //      title:'Carousel 2'
  //    },
  //    {
  //      id: 3,
  //      src:'https://www.schooleducationgateway.eu/files/jpg10/adobestock_331951541_edited.jpeg',
  //      alt:'Carousel 3',
  //      title:'Carousel 3'
  //    },
  //    {
  //      id: 4,
  //      src:'https://image.freepik.com/free-vector/online-school-banner-template-with-brush-stroke-stationery_1361-2418.jpg',
  //      alt:'Carousel 4',
  //      title:'Carousel 4'
  //    },
  //  ]


  // newsObjects: any = [
  //   {
  //     title: 'Google and capabilities',
  //     imgPath: '../../../../assets/mapty challanges.png',
  //     info: 'This information is helper for our children end their knowles.'
  //   },
  //   {
  //     title: 'Google and capabilities',
  //     imgPath: '../../../../assets/mapty challanges.png',
  //     info: 'This information is helper for our children end their knowles.'
  //   },
  //   {
  //     title: 'Google and capabilities',
  //     imgPath: '../../../../assets/mapty challanges.png',
  //     info: 'This information is helper for our children end their knowles.'
  //   },
  //   {
  //     title: 'Google and capabilities',
  //     imgPath: '../../../../assets/mapty challanges.png',
  //     info: 'This information is helper for our children end their knowles.'
  //   }
  // ];
