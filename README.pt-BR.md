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

API RESTful para gerenciamento de transações financeiras, com foco em conceitos fundamentais de backend. A aplicação permite que usuários gerenciem suas finanças registrando transações de crédito e débito, com sessões individuais por usuário.

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

## 🧪 Testando a API

A API pode ser testada de três formas: importando as collections prontas, usando curl, ou manualmente em qualquer cliente HTTP.

### 📦 Importar Collection (Recomendado)

#### Insomnia

1. Baixe o [Insomnia](https://insomnia.rest/download)
2. Baixe o arquivo da collection:
   - [📥 Baixar insomnia-collection.json](./insomnia-collection.json) (clique com botão direito → Salvar como)   
3. Importe no Insomnia:
   - `Application ou Tela Inicial` → `Import/Export` → `Import Data`
   - Selecione `From File`
   - Escolha o arquivo baixado
   - Clique em `Scan` e depois `Import`
4. Selecione o environment `Production`
5. Teste os endpoints!

#### Thunder Client (VS Code)

1. Instale a extensão [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
2. Baixe o arquivo da collection:
   - [📥 Baixar thunder-collection.json](./thunder-collection.json) (clique com botão direito → Salvar como) 
3. Importe a collection:
   - Clique no ícone do Thunder Client (⚡)
   - `Collections` → `...` → `Import`
   - Selecione `thunder-collection.json`
4. Baixe o arquivo da environment:
   - [📥 Baixar thunder-environment.json](./thunder-environment.json) (clique com botão direito → Salvar como)    
5. Importe os environments:
   - `Env` → `...` → `Import`
   - Selecione `thunder-environment.json`
6. Escolha o environment `Production`

---

### 🔄 Fluxo de Testes Recomendado

1. **Criar transação de crédito**
   - Request: `POST Criar Transação (Crédito)`
   - O cookie `sessionId` é salvo automaticamente

2. **Criar transação de débito**
   - Request: `POST Criar Transação (Débito)`
   - Usa o mesmo `sessionId` da sessão

3. **Listar transações**
   - Request: `GET Listar Transações`
   - Retorna todas as transações da sessão
   - Copie um `id` para o próximo teste

4. **Buscar transação específica**
   - Cole o `id` na variável `transaction_id` do environment
   - Request: `GET Buscar Transação por ID`

5. **Ver resumo financeiro**
   - Request: `GET Resumo Financeiro`
   - Retorna o saldo (créditos - débitos)

---

### 💻 Testar com cURL

#### Criar transação:
```bash
curl -X POST https://api-rest-nodejs-production-c4ca.up.railway.app/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Freelance",
    "amount": 5000,
    "type": "credit"
  }' \
  -c cookies.txt
```

#### Listar transações:
```bash
curl -X GET https://api-rest-nodejs-production-c4ca.up.railway.app/transactions \
  -b cookies.txt
```

#### Buscar transação específica:
```bash
curl -X GET https://api-rest-nodejs-production-c4ca.up.railway.app/transactions/{ID} \
  -b cookies.txt
```

#### Ver resumo:
```bash
curl -X GET https://api-rest-nodejs-production-c4ca.up.railway.app/transactions/summary \
  -b cookies.txt
```

> **Nota:** `-c cookies.txt` salva os cookies e `-b cookies.txt` os envia nas requisições.

---

### 📋 Endpoints Disponíveis

| Método | Endpoint | Descrição | Requer Cookie |
|--------|----------|-----------|---------------|
| POST | `/transactions` | Criar transação | Não |
| GET | `/transactions` | Listar transações | Sim |
| GET | `/transactions/:id` | Buscar transação | Sim |
| GET | `/transactions/summary` | Resumo financeiro | Sim |

**Body para POST:**
```json
{
  "title": "Descrição da transação",
  "amount": 1000,
  "type": "credit"  // ou "debit"
}
```

---

### ⚠️ Observações

- **Cold Start:** Primeira requisição pode demorar ~30 segundos (plano gratuito do Railway)
- **Sessões:** Cada sessão tem seu próprio `sessionId` via cookie
- **Isolamento:** Você só visualiza transações da sua sessão
- **Tipos:** `credit` soma ao saldo, `debit` subtrai
- **Valores:** Débitos são armazenados como negativos no banco

---

### 🐛 Problemas Comuns

**Erro 401 Unauthorized:**
- Você não enviou o cookie nas rotas GET
- Solução: Crie uma transação primeiro (POST) para receber o cookie

**Erro 404 Not Found:**
- O ID não existe ou não pertence à sua sessão
- Solução: Verifique o ID listando as transações

**Primeira requisição demora:**
- Normal! É o cold start do Railway
- Próximas requisições serão rápidas (~200-500ms)

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

<p align="center">
  <a href="README.md">English</a> •
  <a href="README.pt-BR.md">Português</a>
</p>
