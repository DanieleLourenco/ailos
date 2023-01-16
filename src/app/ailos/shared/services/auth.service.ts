import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, find, first, from, map, Observable, tap } from 'rxjs';

import { environment } from './../../../../environments/environment';
import { MemberData } from '../models/member-data';
import { IAuthService } from './auth.service.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {

  private readonly API = `${environment.baseUrl}/cooperado/`;

  constructor(private httpClient: HttpClient) {}

  getMemberData(cpf: number): Observable<MemberData>{
    return this.httpClient.get<MemberData>(`${this.API}/?cpf=${cpf}`);
  }

}
