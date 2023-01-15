import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class SidebarIconsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 'Tela inicial': return 'search' ;
      case 'Favoitos': return 'star' ;
      case 'Atendimento': return 'sms' ;
      case 'Cadastro': return 'tune' ;
      case 'Demais telas / rotina': return 'account_balance' ;
    }
    return 'menu'
  }

}
