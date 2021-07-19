import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';
import { SpyLocation } from '@angular/common/testing';

import { routes } from './admin-routing.module'
import { AdminComponent } from "./admin/admin.component"
import { BlogPanelComponent } from './blog-panel/blog-panel.component';
import { AdminModule } from './admin.module';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponent } from '@angular/compiler/src/core';
import { By } from '@angular/platform-browser';
import { DebugElement, Type } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { AdminService } from './admin.service';



describe('routes', () => {
  // it('should contain a route for /admin', () => {
  //   expect(routes).toContain({ path: '/admin', component: AdminComponent })
  // });

  // it('should contain a route for /blogPanel', () => {
  //   expect(routes).toContain({ path: '/blogPanel', component: BlogPanelComponent })
  // });
});

let comp: AdminComponent;
let fixture: ComponentFixture<AdminComponent>;
let page: Page;
let router: Router;
let location: SpyLocation;

describe('AppComponent & RouterTestingModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
          imports: [
            AppModule,
            RouterTestingModule.withRoutes(routes),
          ],
          providers: [{provide: AdminService}]
        })
  }));

  // it('should navigate to "blogPanel" immediately', fakeAsync(() => {
  //      createComponent();
  //      tick();  // wait for async data to arrive
  //      expectPathToBe('blogPanel', 'after initialNavigation()');
  //      expectElementOf(BlogPanelComponent);
  //    }));

  // it('should navigate to "About" on click', fakeAsync(() => {
  //      createComponent();
  //      click(page.aboutLinkDe);
  //      // page.aboutLinkDe.nativeElement.click(); // ok but fails in phantom

  //      advance();
  //      expectPathToBe('/about');
  //      expectElementOf(AboutComponent);
  //    }));

  // it('should navigate to "About" w/ browser location URL change', fakeAsync(() => {
  //      createComponent();
  //      location.simulateHashChange('/about');
  //      // location.go('/about'); // also works ... except, perhaps, in Stackblitz
  //      advance();
  //      expectPathToBe('/about');
  //      expectElementOf(AboutComponent);
  //    }));

  // // Can't navigate to lazy loaded modules with this technique
  // xit('should navigate to "Heroes" on click (not working yet)', fakeAsync(() => {
  //       createComponent();
  //       page.heroesLinkDe.nativeElement.click();
  //       advance();
  //       expectPathToBe('/heroes');
  //     }));
});

function expectPathToBe(path: string, expectationFailOutput?: any) {
  expect(location.path()).toEqual(path, expectationFailOutput || 'location.path()');
}

function expectElementOf(type: Type<any>): any {
  const el = fixture.debugElement.query(By.directive(type));
  expect(el).toBeTruthy('expected an element for ' + type.name);
  return el;
}

