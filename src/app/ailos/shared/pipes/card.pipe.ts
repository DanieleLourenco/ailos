import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card',
})
export class CardPipe implements PipeTransform {
  transform(numberValue: any): any {
    if (numberValue) {
      const value = numberValue.toString().replace(/\D/g, '');
      if (value.length > 5) {
        // ####### -> (AA) ####-#
        return value.replace(/^(\d{6})?(\d{1})?/, '$1-$2');
      }
      return value;
    }
  }
}
