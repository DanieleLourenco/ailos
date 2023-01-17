import { Observable } from 'rxjs';
import { MemberData } from '../models/member-data';
export abstract class IAuthService {
  abstract authenticateCooperated(cpf: number): Observable<MemberData>;
}
