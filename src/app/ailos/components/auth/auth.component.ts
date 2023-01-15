import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { IAuth } from './../../shared/Interfaces/IAuth';
import { Auth } from './../../shared/models/auth';
import { MemberData } from './../../shared/models/member-data';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  cpf!: number;

  dadosUsuario: any[] = [];
  public usuario!: IAuth;
  auth: Auth[] = [];
  public loading!: boolean;

  // memberDataa$: Observable<MemberData>;
  memberData!: MemberData;
  testeRetorno$!: Observable<MemberData[]>;

  constructor(private authService: AuthService, public dialog: MatDialog) {
    // this.memberDataa$ = this.authService.teste(39144951892).pipe(
    //   catchError((error) => {
    //     this.openError('Erro ao carregar dados');
    //     console.log(error);
    //     return of([]);
    //   })
    // );
  }
  openError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
  ngOnInit(): void {
    //  this.authService.teste().subscribe(r => this.memberData = r)
    // this.memberDataa$ = this.authService.teste();
  }
  // showValue(field: any) {
  //   let withoutMask = '';
  //   console.log(field);
  //   console.log('cpf');
  //   if (field) {
  //     withoutMask = field.replace(/\D+/g, '');
  //   }
  //   alert(
  //     'Valor da variável: "' +
  //       field +
  //       '". Apenas números: "' +
  //       withoutMask +
  //       '"'
  //   );
  // }

  getData(cpf: any): void {
    this.loading = true;
    let cpfCooperado = cpf.replace(/\D/g, '');
    this.authService
      .getUser(cpfCooperado)
      .subscribe((res) => (this.memberData = res));
      this.loading = true;

    }

}
