import { MemberData } from './../../../src/app/ailos/shared/models/member-data';
export class MemberDataMock {
  get memberData(): MemberData {
    return {
      id: 1,
      cpf: 39144951892,
      nome: 'Daniele Fernanda Lourenço',
      situacaoCpf: 'Regular',
      contaAplicacaoNumero: 5579323,
      contaCorrenteNumero: 7784614,
    };
  }
}
