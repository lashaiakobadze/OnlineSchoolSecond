import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from '../../../../shared/modules/home/news.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blogNews: News;
  @Input() isCloseModal: boolean;
  @Output() closeAlert: any = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.isCloseModal = false;
  }

  onCloseAlert() {
    this.isCloseModal = true;
    this.closeAlert.emit(this.isCloseModal);
  }

}
