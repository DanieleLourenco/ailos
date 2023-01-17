import { promisesSucess } from './../../../../../testing/mock/services/api-response-service';
import { ApiServiceMock } from './../../../../../testing/mock/services/api.service.mocks';
import { MemberData } from './../models/member-data';
import { AuthServiceMock } from './../../../../../testing/mock/services/auth-service.mock';
import { TestBed } from '@angular/core/testing';
import { MemberDataMock } from 'testing/mock/models/member-data.mock';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const API = undefined;
  const cpf = undefined;

  const authenticateCooperatedMock = new MemberDataMock().memberData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#authenticateCooperated deve buscar os dados do cooperado na api', (done) => {
    const dados: MemberData = authenticateCooperatedMock;
    const cpf = authenticateCooperatedMock.cpf;

    service.authenticateCooperated(cpf).subscribe(dados =>{
      expect(dados).toBeTruthy();
      done();
    })
  });
})
