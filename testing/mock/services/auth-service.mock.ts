import { IAuthService } from 'src/app/ailos/shared/services/auth.service.interface';

export class AuthServiceMock implements IAuthService {
  authenticateCooperated: jasmine.Spy = jasmine.createSpy(
    'authenticateCooperated'
  );
}
