export interface ParcelePendente {
  cooperado: Dados;
}

export interface Dados{
  id: number;
  cpf: number;
  nome: string;
  situacaoCpf: string;
  contaAplicacaoNumero: number;
  contaCorrenteNumero: number;
}
