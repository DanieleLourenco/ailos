import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpfMask' })
export class CpfPipe implements PipeTransform {
  transform(numberValue: any, arg: any): any {

    // CPF MASK
    if (arg === 'cpf' && numberValue) {
      const value = numberValue.toString().replace(/\D/g, '');

      if (value.length > 10) {
        return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.\$2.\$3\-\$4');
      } else if (value.length > 8) {
        return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, '$1.$2.$3.$4');
      } else if (value.length > 5) {
        return value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
      } else if (value.length > 2) {
        return value.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
      } else {
        if (numberValue !== '') { return value; }
      }
      return '';
    }
}
}
