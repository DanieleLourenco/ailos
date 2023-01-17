import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { MemberData } from '../../shared/models/member-data';
import { AuthService } from './../../shared/services/auth.service';
import { catchError, Observable, of } from 'rxjs';

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
  validationForm!: FormGroup;
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

  getUser(cpf: any): void {
    this.submitted = true;
    console.log('oi');
    if (this.registerForm.valid) {
      let cpfCooperado = cpf.replace(/\D/g, '');
      this.authService.getMemberData(cpfCooperado).subscribe((success) => {
        this.returnData = success;
        if (this.returnData.leght != 0) {
          this.openError(
            'O cpf ' +
              cpf +
              ' não foi encontrado, por favor verifique se o número digitado esta correto.'
          );
        }
        this.memberData = this.returnData[0];

      });
    }
    // let cpfCooperado = cpf.replace(/\D/g, '');
    // this.authService
    //   .getMemberData(cpfCooperado)
    //   .subscribe((data) => (this.returnData = data));
    // this.memberData = this.returnData[0];
  }

  openError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
