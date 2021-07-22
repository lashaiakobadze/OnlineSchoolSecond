import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';

import { AdminService, Url } from './admin.service';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';

import { CurrentLesson } from 'src/app/shared/modules/lesson/current-lessen.model';
import { News } from 'src/app/shared/modules/home/news.model';
import { Homework } from 'src/app/shared/modules/works/models/homework.model';
import { CurrentHomework } from './models/current-homework.model';
import { Test } from 'src/app/shared/modules/works/models/test.model';
import { CurrentTest } from './models/current-test.model';



describe('AdminService (with mocks)', () => {
  let httpTestingController: HttpTestingController;
  let adminService: AdminService;
  let httpClient: HttpClient;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AdminService ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpTestingController = TestBed.inject(HttpTestingController);
    adminService = TestBed.inject(AdminService);
    httpClient = TestBed.inject(HttpClient);
    loaderService = TestBed.inject(LoaderService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// AdminService method tests begin ///
  describe('#getCurrentLesson', () => {
    let expectedCurrLesson: CurrentLesson;

    beforeEach(() => {
      adminService = TestBed.inject(AdminService);
      expectedCurrLesson = {
        curLessenLink: 'http/facebook.com',
        group: 'A',
      }
    });

    it('should return expected currentLesson (called once)', () => {
      adminService.getCurrentLesson().subscribe(
        curLesson => expect(curLesson).toEqual(expectedCurrLesson, 'should return expected currentLesson'),
        fail
      );

      // AdminService should have made one request to GET currentLesson from expected URL
      const req = httpTestingController.expectOne(`${Url}/currentLesson.json`);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock currentLesson
      req.flush(expectedCurrLesson);
    });

    it('should be OK returning no currentLesson', () => {
      adminService.getCurrentLesson().subscribe(
        curLesson => expect(curLesson).toEqual(null, 'should have empty currentLesson array'),
        fail
      );

      const req = httpTestingController.expectOne(`${Url}/currentLesson.json`);
      req.flush(null); // Respond with no currentLesson
    });

    it('should turn 404 into a user-friendly error', () => {
      const msg = 'Deliberate 404';
      adminService.getCurrentLesson().subscribe(
        curLesson => fail('expected to fail'),
        error => expect(error.message).toContain(msg)
      );

      const req = httpTestingController.expectOne(`${Url}/currentLesson.json`);

      // respond with a 404 and the error message in the body
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

    it('should return expected currentLesson (called multiple times)', () => {
      adminService.getCurrentLesson().subscribe();
      adminService.getCurrentLesson().subscribe();
      adminService.getCurrentLesson().subscribe(
        currentLesson => expect(currentLesson).toEqual(expectedCurrLesson, 'should return expected currentLesson'),
        fail
      );

      const requests = httpTestingController.match(`${Url}/currentLesson.json`);
      expect(requests.length).toEqual(3, 'calls to getCurrentLesson()');

      // Respond to each request with different mock currentLesson results
      requests[0].flush(null);
      requests[1].flush({curLessenLink: 'http/facebook.com', group: 'A',});
      requests[2].flush(expectedCurrLesson);
    });
  });

  describe('#storeCurrentLesson', () => {
    // Expecting the query form of URL so should not 404 when currentLesson not found
    const makeUrl = (curLesson: CurrentLesson) => `${Url}/currentLesson/${curLesson}`;

    it('should store a currentLesson and return it', () => {

      const storedCurrLesson = {
        curLessenLink: 'http/facebook.com',
        group: 'A',
      };


      adminService.storeCurrentLesson(storedCurrLesson).subscribe(
        data => expect(data).toEqual(storedCurrLesson, 'should return the currentLesson'),
        fail
      );

      // adminService should have made one request to PUT currentLesson
      const req = httpTestingController.expectOne(`${Url}/currentLesson.json`);
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(storedCurrLesson);

      // Expect server to return the currentLesson after PUT
      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: storedCurrLesson });
      req.event(expectedResponse);
    });

    it('should turn 404 error into user-facing error', () => {
      const msg = 'Deliberate 404';
      const storedCurrLesson = {
        curLessenLink: 'http/facebook.com',
        group: 'A',
      };

      adminService.storeCurrentLesson(storedCurrLesson).subscribe(
        currentLesson => fail('expected to fail'),
        error => expect(error.message).toContain(msg)
      );

      const req = httpTestingController.expectOne(`${Url}/currentLesson.json`);

      // respond with a 404 and the error message in the body
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

    it('should turn network error into user-facing error', () => {
      const errorMsg = 'simulated network error';

      const storedCurrLesson = {
        curLessenLink: 'http/facebook.com',
        group: 'A',
      };

      adminService.storeCurrentLesson(storedCurrLesson).subscribe(
        currentLesson => fail('expected to fail'),
        error => expect(error.message).toContain(errorMsg)
      );

      const req = httpTestingController.expectOne(`${Url}/currentLesson.json`);

      // Create mock ErrorEvent, raised when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc
      const errorEvent = new ErrorEvent('so sad', {
        message: errorMsg,
        // The rest of this is optional and not used.
        // Just showing that you could provide this too.
        filename: 'adminService.ts',
        lineno: 107,
        colno: 89
      });

      // Respond with mock error
      req.error(errorEvent);
    });
  });

});


 export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}


export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe ('AdminService with put methods (with spies)', () => {
  let httpClientSpy: { put: jasmine.Spy };
  let loaderService: LoaderService;
  let adminService: AdminService;

  let blog = {
    id: '123781238',
    date: new Date().toString(),
    title: 'test',
    imgPath: 'test path',
    info: 'test info',
  };
  let homework: Homework = {
    homeworkNumber: 1,
    tasks: []
  };
  let curHomework: CurrentHomework = {
    curTestNumber: '#1'
  };
  let test: Test = {
    TestNumber: 1,
    tests: []
  };
  let curTest: CurrentTest = {
    curHomeworkNumber: '#2'
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['put']);
    loaderService = new LoaderService();
    adminService = new AdminService(httpClientSpy as any, loaderService);
  });

  it('should store expected blogs (HttpClient called once)', (done: DoneFn) => {
    const expectedBlogs: News[] = [ blog ];

    httpClientSpy.put.and.returnValue(asyncData(expectedBlogs));

    adminService.storeBlogs(expectedBlogs).subscribe(
      blogs => {
        expect(blogs).toEqual(expectedBlogs, 'expected blogs');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const expectedBlogs: News[] = [ blog ];

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.put.and.returnValue(asyncError(errorResponse));

    adminService.storeBlogs(expectedBlogs).subscribe(
      blogs => done.fail('expected an error, not blogs'),
      error  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    );
  });


  it('should store expected homeworks (HttpClient called once)', (done: DoneFn) => {
    const expectedHomeworks: Homework[] = [ homework ];

    httpClientSpy.put.and.returnValue(asyncData(expectedHomeworks));

    adminService.storeHomework(expectedHomeworks).subscribe(
      blogs => {
        expect(blogs).toEqual(expectedHomeworks, 'expected homeworks');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const expectedHomeworks: Homework[] = [ homework ];

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.put.and.returnValue(asyncError(errorResponse));

    adminService.storeHomework(expectedHomeworks).subscribe(
      homeworks => done.fail('expected an error, not homeworks'),
      error  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    );
  });


  it('should store expected currentHomework (HttpClient called once)', (done: DoneFn) => {
    const expectedCurHomeworks: CurrentHomework = curHomework;

    httpClientSpy.put.and.returnValue(asyncData(expectedCurHomeworks));

    adminService.storeCurrentHomework(expectedCurHomeworks).subscribe(
      currentHomework => {
        expect(currentHomework).toEqual(expectedCurHomeworks, 'expected currentHomework');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const expectedCurHomeworks: CurrentHomework = curHomework;

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.put.and.returnValue(asyncError(errorResponse));

    adminService.storeCurrentHomework(expectedCurHomeworks).subscribe(
      currentHomework => done.fail('expected an error, not currentHomework'),
      error  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    );
  });


  it('should store expected tests (HttpClient called once)', (done: DoneFn) => {
    const expectedTests: Test[] = [ test ];

    httpClientSpy.put.and.returnValue(asyncData(expectedTests));

    adminService.storeTest(expectedTests).subscribe(
      tests => {
        expect(tests).toEqual(expectedTests, 'expected tests');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const expectedTests: Test[] = [ test ];

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.put.and.returnValue(asyncError(errorResponse));

    adminService.storeTest(expectedTests).subscribe(
      tests => done.fail('expected an error, not tests'),
      error  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    );
  });


  it('should store expected curTest (HttpClient called once)', (done: DoneFn) => {
    const expectedCurrentTest: CurrentTest = curTest;

    httpClientSpy.put.and.returnValue(asyncData(expectedCurrentTest));

    adminService.storeCurrentTest(expectedCurrentTest).subscribe(
      curTest => {
        expect(curTest).toEqual(expectedCurrentTest, 'expected curTest');
        done();
      },
      done.fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const expectedCurrentTest: CurrentTest = curTest;

    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.put.and.returnValue(asyncError(errorResponse));

    adminService.storeCurrentTest(expectedCurrentTest).subscribe(
      curTest => done.fail('expected an error, not curTest'),
      error  => {
        expect(error.message).toContain('test 404 error');
        done();
      }
    );
  });

});
