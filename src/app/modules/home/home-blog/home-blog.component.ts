import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../news.model';


@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {
  @Input() news: News;
  @Output() modalData = new EventEmitter<News>();
  @Output() isOpenModal: boolean;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isOpenModal = false;
  }

  onOpenModal() {
    this.isOpenModal = true;
    this.router.navigate(['blog'],  {relativeTo: this.route});
  }

  isCloseModal(isClose: boolean) {
    this.isOpenModal = !isClose;
  }
}
