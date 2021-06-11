import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LanguageInterceptor } from './shared/interceptors/language.interceptor';

@NgModule({
  providers: [
    // I will use it when we have a multi-language database. This is multi-language headers.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LanguageInterceptor,
      multi: true
    },
  ],
})
export class CoreModule {}
