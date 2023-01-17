import { IAuthService } from 'src/app/ailos/shared/services/auth.service.interface';
import { MemberData } from './../../shared/models/member-data';
import { AuthServiceMock } from './../../../../../testing/mock/services/auth-service.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { MemberDataMock } from 'testing/mock/models/member-data.mock';
import { Type } from '@angular/core';
import { observableSucess } from 'testing/mock/services/api-response-service';

fdescribe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let serviceAuth: AuthServiceMock;
  const authenticateCooperatedMock = new MemberDataMock().memberData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [{ provide: IAuthService, useClass: AuthServiceMock }],
    }).compileComponents();
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    serviceAuth = fixture.debugElement.injector.get<AuthServiceMock>(
      IAuthService as Type<AuthServiceMock>
    );
    serviceAuth.authenticateCooperated =
      new AuthServiceMock().authenticateCooperated;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit(`#${AuthComponent.prototype.getMember.name}
   deve retornar para a variavel memberData o objeto com os dados do usuario`, () => {
    serviceAuth.authenticateCooperated.and.returnValue(observableSucess(authenticateCooperatedMock));
    fixture.detectChanges();
    expect(component.memberData).not.toBeNull();
  });
});
