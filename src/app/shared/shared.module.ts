import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';


import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directives/placeholder/placeholder.directive';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    LoaderComponent,
    AlertComponent,
    ImageUploadComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    AlertComponent,
    ImageUploadComponent,
    LoaderComponent,
    PlaceholderDirective,
    DropdownDirective,
    HttpClientModule,
    TranslateModule
  ]
})
export class SharedModule { }
