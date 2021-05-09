import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.scss']
})
export class OnlineTestComponent implements OnInit {

  constructor(
    public testService: TestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.testService.isTestMode = false;
  }

  goToCurTest() {
    this.testService.isTestMode = true;
    this.router.navigate(['currentTest'], {relativeTo: this.route});
  }

}
