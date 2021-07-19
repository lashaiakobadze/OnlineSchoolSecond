import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTestComponent } from './current-test.component';

describe('CurrentTestComponent', () => {
  let component: CurrentTestComponent;
  let fixture: ComponentFixture<CurrentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
