import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeworkService } from '../homework.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

    constructor(
    public homeworkService: HomeworkService,
    private router: Router,
    private route: ActivatedRoute) { }

  goToCurHomework() {
    this.router.navigate(['currentHomework'], {relativeTo: this.route});
    this.homeworkService.isTestEnterMode = true;
  }

  ngOnInit(): void {
    this.homeworkService.isTestEnterMode = false;
  }

}
