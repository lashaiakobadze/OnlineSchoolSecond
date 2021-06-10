import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.isOpenModal = false;
  }

  onOpenModal() {
    this.isOpenModal = true;
  }

  isCloseModal(isClose: boolean) {
    this.isOpenModal = !isClose;
  }
}
