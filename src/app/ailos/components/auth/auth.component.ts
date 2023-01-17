import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { MemberData } from '../../shared/models/member-data';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public isLoading = false;
  public cpf!: number;
  registerForm!: FormGroup;
  submitted = false;
  memberData$!: Observable<MemberData[]>;
  memberData!: MemberData;
  returnData: any;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.minLength(14)]],
    });
  }

  getMember(cpf: any): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      let cpfCooperado = cpf.replace(/\D/g, '');
      this.authService
        .authenticateCooperated(cpfCooperado)
        .subscribe((success) => {
          this.returnData = success;
          if (this.returnData == '' || this.returnData == null) {
            this.openError(
              'O cpf ' +
                cpf +
                ' não foi encontrado, por favor verifique se o número digitado esta correto.'
            );
          }
          this.memberData = this.returnData[0];
        });
    }
  }

  openError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
