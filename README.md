# Teste Ailos
Este é o resultado do teste feito em Angular proposto pela Ailos, onde criei uma aplicação que consome uma API Json Server e exibe os dados usando o design proposto. Dentro da pasta `src` tem um arquivo `exemplo.http` nele é possível criar novos usuários que serão adicionados automaticamente na base de dados.

## Executar a aplicação.
Para executar a aplicação, abra dois terminais e execute os seguintes comandos:
## RequestsHttp
Execute `npm run backend`. Também é possivel navegar até `http://localhost:3000/cooperado`.
## Development server

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`.
## Mocks.js
{
      "id": 1,
      "cpf": 39144951892,
      "nome": "Erica Lourenço",
      "situacaoCpf": "Regular",
      "contaAplicacaoNumero": 5579323,
      "contaCorrenteNumero": 7784614
    },
    {
      "id": 2,
      "cpf": 92977980040,
      "nome": "Marcelo Santos",
      "situacaoCpf": "Regular",
      "contaAplicacaoNumero": 5579323,
      "contaCorrenteNumero": 7784614
    },
    {
      "id": 3,
      "cpf": 49759434091,
      "nome": "Sueli Augusto Flores",
      "situacaoCpf": "Regular",
      "contaAplicacaoNumero": 5579323,
      "contaCorrenteNumero": 7784614
    },
    {
      "id": 4,
      "cpf": 54884875060,
      "nome": "Monique  Santana",
      "situacaoCpf": "Regular",
      "contaAplicacaoNumero": 5579323,
      "contaCorrenteNumero": 7784614
    }

## Resultado final:
CPF inserido não é valido

<img width="960" alt="ailos-cpf-invalidat" src="https://user-images.githubusercontent.com/44852163/212986374-3f90ad45-51e1-4ee7-a0d8-33d6312fdb92.png"/>

CPF válido 

<img width="960" alt="ailos-data-cooperado" src="https://user-images.githubusercontent.com/44852163/212986233-c1cb6e4f-beb5-4b5e-b51c-22f6adeed39d.png"/>




