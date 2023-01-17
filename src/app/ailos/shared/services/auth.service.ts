import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { MemberData } from '../models/member-data';
import { environment } from './../../../../environments/environment';
import { IAuthService } from './auth.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  private readonly API = `${environment.baseUrl}/cooperado/`;

  constructor(private httpClient: HttpClient) {}

  authenticateCooperated(cpf: number): Observable<MemberData> {
    return this.httpClient
      .get<MemberData>(`${this.API}/?cpf=${cpf}`)
      .pipe(take(1));
  }
}
