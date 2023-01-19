# Desafio Ailos 

 Este é o resultado do teste feito em Angular proposto pela Ailos, onde criei uma aplicação  que consome uma API JSON server e exibe os dados usando o design proposto. Dentro da pasta `src` tem um arquivo `exemplo.http` nele é possível criar novos usuários que serão adicionados automaticamente na base de dados. 



## 🚀 Executando o projeto localmente
Você precisa ter o Node.js/NPM instalado localmente.

1) Instale todas as dependências necessárias:
```
npm install
```
2)  Executar o projeto:

Para executar a aplicação, abra dois terminais e execute os seguintes comandos:

#### RequestsHttp
```
npm run backend
```
Abra seu navegador e acesse (http://localhost:3000/cooperado) (porta padrão).

#### Development server
```
ng serve  
```
Abra seu navegador e acesse http://localhost:4200 (porta padrão do Angular).

##### 💡O Frontend precisa que o Backend esteja sendo executado para funcionar.





## JSON 💾

### Cooperados: 
|cpf|nome|situacaoCpf|contaAplicacaoNumero|contaCorrenteNumero|
| -------- | -------- | -------- |-------- | -------- |
|39144951892|Erica Lourenço|Regular|5579323|7784614
|92977980040|Marcelo Santos|Regular|5579323|7784614|
|49759434091|Sueli Augusto Flores|Regular|5579323|7784614|
|54884875060|Monique Santana|Regular|5579323|7784614|

## Resultado final
CPF inserido não é valido

<img width="960" alt="ailos-cpf-invalidat" src="https://user-images.githubusercontent.com/44852163/212986374-3f90ad45-51e1-4ee7-a0d8-33d6312fdb92.png"/>

CPF válido 

<img width="960" alt="ailos-data-cooperado" src="https://user-images.githubusercontent.com/44852163/212986233-c1cb6e4f-beb5-4b5e-b51c-22f6adeed39d.png"/>




