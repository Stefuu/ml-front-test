# Teste Front-End ML

# Inicialização:
O projeto requer node instalado na versão 10.0.0 ou superior  
Também deixe as portas 3000 e 8088 livres  
  
Clone o projeto
```
$ git clone https://github.com/Stefuu/ml-front-test.git
```
Instale o lerna globalmente
```
$ yarn global add lerna
```
Instale as dependencias do projeto e faça o bootstrap do lerna
```
$ cd ml-front-test
$ yarn install
$ lerna bootstrap
```
Inicialize o servidor, esse comando subirá o server na porta 8088
```sh
$ yarn server:start
```
Inicialize o app (em outro terminal), esse comando subirá o app na porta 3000
```sh
$ yarn app:start
```

Tudo pronto, acesse http://localhost:3000 para testar a aplicação

# Testes:
Na raiz do projeto  
Para o app:
```sh
$ yarn app:test
```
Para o server:
```sh
$ yarn server:test
```

# Principais tecnologias utilizadas

## Lerna:
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
Utilizei lerna para aplicar o conceito de monorepo, já que a aplicação como um todo depende de dois pacotes (server e app), a abordagem do lerna pareceu encaixar bem por conta disso, além de unificar versionamento e facilitar a execução de scripts (não é necessário entrar no diretório de cada pacote inicializá-los), utilizei o yarn workspaces para deixar todas as dependências em um único node_modules na raiz do projeto, os node_modules de cada pacote tem apénas links simbólicos para o binário quando necessário 

## Storybook:
https://github.com/storybooks/storybook  
https://storybook.js.org/  
Utilizei como documentação viva de componentes.
```sh
$ yarn storybook
```

## Cypress
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)  
Para testes end to end
```sh
$ yarn cypress
```

## Jest
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)  
Para testes unitários

## React
Como framework de front, fazendo uso de context api para criar o contexto da barra de busca
## Styled components:
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)  
Utilizei Styled components pela simplicidade e sinergia com react

## Styled system
https://github.com/jxnblk/styled-system  
Styled system é muito leve, facilita o uso de temas e adiciona funcionalidades que facilitam muito a criação de componentes responsivos

## Styled tools
https://github.com/diegohaz/styled-tools  
Styled tools para facilitar o uso de temas do styled components com seus helpers

## React testing library
https://github.com/kentcdodds/react-testing-library  
Dei preferência a essa lib para testes unitário de react em detrimento do enzyme, por conta de sua filosofia, que prega testar componentes "como usuário iriam utilizá-los" em vez de testar detalhes de implementação. Acredito que essa abordagem gera muito mais valor

## Supertest
https://github.com/visionmedia/supertest  
Para testes de api no node

## Axios
https://github.com/axios/axios  
Para requisições no server e no front