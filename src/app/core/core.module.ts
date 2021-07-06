import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LanguageInterceptor } from '../shared/interceptors/language.interceptor';
import { UrlInterceptor } from '../shared/interceptors/url.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: UrlInterceptor,
    //   multi: true,
    // },
  ],
})
export class CoreModule {}
