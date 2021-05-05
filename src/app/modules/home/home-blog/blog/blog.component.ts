import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../news.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blogNews: News;
  @Input() isCloseModal: boolean;
  @Output() closeAlert: any = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isCloseModal = false;
  }

  onCloseAlert() {
    this.isCloseModal = true;
    this.closeAlert.emit(this.isCloseModal);
    this.router.navigate(['./'], {relativeTo: this.route});
  }

}
