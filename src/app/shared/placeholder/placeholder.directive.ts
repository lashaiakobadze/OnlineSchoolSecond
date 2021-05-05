import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})

// A directive that helps us programmatically create a DOM element
export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
