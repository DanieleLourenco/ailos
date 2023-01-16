import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
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
  validationForm!: FormGroup;

  memberData$!: Observable<MemberData[]>;

  memberData!: MemberData;

  constructor(private authService: AuthService, public dialog: MatDialog) {
    this.validationForm = new FormGroup({
      cpf: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.validationForm = new FormGroup({
      cpf: new FormControl('', Validators.required),
    });
  }

  // get cpf(): AbstractControl {
  //   return this.validationForm.get('cpf')!;
  // }

  getUser(cpf: any): void {
    console.log('data');
    this.isLoading = true;
    let cpfCooperado = cpf.replace(/\D/g, '');
    this.authService
      .getMemberData(cpfCooperado)
      .subscribe((data) => (this.memberData = data));
    this.isLoading = false;
  }

  openError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
