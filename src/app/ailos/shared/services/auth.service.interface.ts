import { Observable } from 'rxjs';
import { MemberData } from '../models/member-data';
export abstract class IAuthService {
  abstract getMemberData(cpf: number): Observable<MemberData>;
}
