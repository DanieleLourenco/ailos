import { environment } from './../../../../environments/environment';
import { MemberData } from './../models/member-data';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { delay, first, tap, Observable, finalize } from 'rxjs';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private readonly API = `${environment.API}cooperado?cpf=`;
  private readonly API = `${environment.baseUrl}/cooperado`;
  private testeUrl = 'api/cooperado';

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  loading = false;

  constructor(private httpClient: HttpClient) {}

  teste(cpf: any) {
    return this.httpClient.get<MemberData[]>(this.API + `${cpf}`).pipe(
      first(),
      delay(2000),
      tap((r) => console.log(r))
    );
  }

  getUser(id: number): Observable<MemberData> {
    this.loading = true;
    return this.httpClient.get<MemberData>(`${this.API}/${id}`).pipe(
      first(),
      finalize(() => (this.loading = false))
    );
  }
  // getDados(){
  //   const dadosUsuario = of()
  // }

  // fazerLogin(cpf: Auth) {
  //   if (cpf.cpf === 1234) {
  //     this.mostrarMenuEmitter.emit(true);
  //     this.usuarioAutenticado = true;
  //     console.log('foiii');
  //   } else {
  //     this.mostrarMenuEmitter.emit(false);
  //     this.usuarioAutenticado = false;
  //   }
  // }
  // usuarioEstaAutenticado() {
  //   return this.usuarioAutenticado;
  // }
}
