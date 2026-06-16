# Showcase de WebSocket com Next.js e Node.js

Este é um projeto para a exemplificação das diferenças de comunicação entre o cliente e servidor utilizando um WebSocket, em comparação com uma comunicação tradicional via HTTP. O projeto é dividido em duas partes: um backend em Node.js e um frontend em Next.js com React, além da configuração de um banco de dados PostgreSQL.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, Socket.IO, PostgreSQL
- **Frontend**: Next.js, React, Styled Components, Socket.IO Client
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker, Docker Compose

## Estrutura do Projeto

- `backend/`: Contém o código do servidor Node.js.
- `frontend/`: Contém o código do cliente Next.js.
- `compose.yml`: Configuração do Docker Compose para orquestrar os serviços.

## Funcionalidades

O funcionamento do projeto é bem simples, sem muitas implementações desnecessárias, como uma autenticação com senhas, ou até mesmo middlewares para tratamento de erros. O foco é fazer uma aplicação mínima de uma questão real, que é a atualização em tempo real do saldo de créditos de um usuário, a partir de pedidos feitos por ele, e aprovados ou rejeitados.

### Backend

O backend é responsável por gerenciar as conexões WebSocket, processar os pedidos de créditos e atualizar o banco de dados. Ele expõe uma API REST para criar pedidos de créditos e utiliza Socket.IO para enviar atualizações em tempo real aos clientes. Durante a conexão, o servidor emite o saldo atual, e a cada atualização nos demais endpoints, o servidor emite o saldo atualizado para o cliente.

### Frontend

O frontend é uma aplicação mínima de Next.js, instalado manualmente, com apenas três páginas: um login muito simplificado, uma página onde o usuário pode ver o saldo, remover créditos e requisitar mais créditos, e uma página de administrador, que simularia um serviço terceiro que aprova ou rejeita os pedidos de créditos. O frontend se conecta ao backend via WebSocket para receber atualizações em tempo real do saldo de créditos do usuário.

## Configuração e Execução

A aplicação está dockerizada para facilitar a configuração e execução, incluindo arquivos .env para as variáveis de ambiente necessárias. Siga os passos abaixo para rodar a aplicação:

1. Clone o repositório e navegue até a pasta do projeto:

   ```bash
   git clone
   cd websocket-example
   ```

2. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

3. Inicie os serviços utilizando o Docker Compose:

   ```bash
   docker compose up -d
   ```

4. Acesse o frontend em `http://localhost:3000`.
