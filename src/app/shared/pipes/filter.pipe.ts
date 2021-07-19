import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterField: string): any[] {
    if (!items) return [];
    if (!filterField) return items;
      filterField = filterField.toString().toLowerCase();
      return items.filter( item => {
        return item.title.toLowerCase().includes(filterField);
      }
    );
  }
}

