<div align="center">
  <h1>API REST - Controle Financeiro</h1>
  <p>
    <a href="#-sobre">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-como-executar">Como executar</a> •
    <a href="#-documentação-da-api">API</a>
  </p>
</div>

<div align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</div>

<br>

🚀 **[Ver demonstração ao vivo](https://api-rest-nodejs-production-c4ca.up.railway.app/)**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 💻 Sobre

API RESTful para controle de transações financeiras desenvolvida durante o curso de Node.js da Rocketseat. A aplicação permite que usuários gerenciem suas finanças através do registro de transações de crédito e débito, com sessões individuais por usuário.

---

## ⚙️ Funcionalidades

- [x] Criar uma nova transação
- [x] Listar todas as transações do usuário
- [x] Visualizar uma transação específica
- [x] Obter resumo das transações (total de créditos, débitos e saldo)
- [x] Identificação de usuário via cookies (sessão)
- [x] Validação de dados com Zod
- [x] Testes automatizados com Vitest

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[Node.js](https://nodejs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Fastify](https://www.fastify.io/)**
- **[Knex.js](http://knexjs.org/)**
- **[SQLite](https://www.sqlite.org/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Zod](https://zod.dev/)**
- **[Vitest](https://vitest.dev/)**
- **[Supertest](https://github.com/visionmedia/supertest)**
- **[TSX](https://github.com/esbuild-kit/tsx)**
- **[ESLint](https://eslint.org/)**
- **[dotenv](https://github.com/motdotla/dotenv)**

---

## 🚀 Como executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/).

Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/niltonjrdev/api-rest-nodejs.git

# Acesse a pasta do projeto no terminal/cmd
$ cd api-rest-nodejs

# Instale as dependências
$ npm install

# Crie um arquivo .env na raiz do projeto
$ cp .env.example .env

# Execute as migrations
$ npm run knex -- migrate:latest

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta:3333 - acesse http://localhost:3333
```

#### 🧪 Rodando os testes

```bash
# Crie o arquivo de variáveis de ambiente para testes
$ cp .env.test.example .env.test

# Execute os testes
$ npm test
```

---

## 📝 Documentação da API

### Rotas

#### Criar transação

```http
POST /transactions
```

**Body:**

```json
{
  "title": "Freelance",
  "amount": 5000,
  "type": "credit"
}
```

**Resposta:** Status 201 Created

---

#### Listar transações

```http
GET /transactions
```

**Headers:**

```
Cookie: sessionId=<seu-id-de-sessão>
```

**Resposta:**

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Freelance",
      "amount": 5000,
      "created_at": "2024-01-15T10:00:00.000Z",
      "session_id": "uuid"
    }
  ]
}
```

---

#### Visualizar transação

```http
GET /transactions/:id
```

**Headers:**

```
Cookie: sessionId=<seu-id-de-sessão>
```

**Resposta:**

```json
{
  "transaction": {
    "id": "uuid",
    "title": "Freelance",
    "amount": 5000,
    "created_at": "2024-01-15T10:00:00.000Z",
    "session_id": "uuid"
  }
}
```

---

#### Resumo das transações

```http
GET /transactions/summary
```

**Headers:**

```
Cookie: sessionId=<seu-id-de-sessão>
```

**Resposta:**

```json
{
  "summary": {
    "amount": 5000
  }
}
```

---

## 📋 Regras de Negócio

- A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá
- Deve ser possível identificar o usuário entre as requisições
- O usuário só pode visualizar transações que ele criou
- Transações de débito são armazenadas como valores negativos no banco de dados

---

## 🗄️ Banco de Dados

### Estrutura da tabela `transactions`

| Campo      | Tipo      | Descrição                          |
| ---------- | --------- | ---------------------------------- |
| id         | uuid      | Identificador único da transação   |
| title      | text      | Título/descrição da transação      |
| amount     | decimal   | Valor da transação                 |
| created_at | timestamp | Data e hora de criação             |
| session_id | uuid      | Identificador da sessão do usuário |

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

**Nilton Junior**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nilton-junior-5915a2238/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/niltonjr-dev)

---

## 🙏 Agradecimentos

- [Rocketseat](https://www.rocketseat.com.br/) pelo desafio
- Comunidade Node.js

---

<p align="center">
  Projeto desenvolvido durante o módulo Node.js da Rocketseat
</p>

---

<p align="center">
  <a href="README.md">English</a> •
  <a href="README.pt-BR.md">Português</a>
</p>
