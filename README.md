<div align="center">
  <h1>REST API - Financial Control</h1>
  <p>
    <a href="#-about">About</a> •
    <a href="#-features">Features</a> •
    <a href="#-technologies">Technologies</a> •
    <a href="#-how-to-run">How to run</a> •
    <a href="#-api-documentation">API</a>
  </p>
</div>

<div align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</div>

<br>

🚀 **[Live Demo](https://daily-diet-apirest.onrender.com/)**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

[🇧🇷 Versão em Português](README.md)

## 💻 About

RESTful API for financial transaction management developed during Rocketseat's Node.js course. The application allows users to manage their finances by recording credit and debit transactions, with individual sessions per user.

---

## ⚙️ Features

- [x] Create a new transaction
- [x] List all user transactions
- [x] View a specific transaction
- [x] Get transaction summary (total credits, debits, and balance)
- [x] User identification via cookies (session)
- [x] Data validation with Zod
- [x] Automated tests with Vitest

---

## 🛠 Technologies

The following tools were used in building the project:

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

## 🚀 How to run

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/).

Additionally, it's good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

#### 🎲 Running the application

```bash
# Clone this repository
$ git clone https://github.com/niltonjrdev/api-rest-nodejs.git

# Access the project folder in terminal/cmd
$ cd api-rest-nodejs

# Install the dependencies
$ npm install

# Create a .env file in the project root
$ cp .env.example .env

# Run the migrations
$ npm run knex -- migrate:latest

# Run the application in development mode
$ npm run dev

# The server will start on port:3333 - access http://localhost:3333
```

#### 🧪 Running tests

```bash
# Create the environment variables file for tests
$ cp .env.test.example .env.test

# Run the tests
$ npm test
```

---

## 📝 API Documentation

### Routes

#### Create transaction

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

**Response:** Status 201 Created

---

#### List transactions

```http
GET /transactions
```

**Headers:**

```
Cookie: sessionId=<your-session-id>
```

**Response:**

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

#### View transaction

```http
GET /transactions/:id
```

**Headers:**

```
Cookie: sessionId=<your-session-id>
```

**Response:**

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

#### Transaction summary

```http
GET /transactions/summary
```

**Headers:**

```
Cookie: sessionId=<your-session-id>
```

**Response:**

```json
{
  "summary": {
    "amount": 5000
  }
}
```

---

## 📋 Business Rules

- The transaction can be of type credit which will add to the total value, or debit which will subtract
- It must be possible to identify the user between requests
- The user can only view transactions they created
- Debit transactions are stored as negative values in the database

---

## 🗄️ Database

### `transactions` table structure

| Field      | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| id         | uuid      | Unique transaction identifier |
| title      | text      | Transaction title/description |
| amount     | decimal   | Transaction amount            |
| created_at | timestamp | Creation date and time        |
| session_id | uuid      | User session identifier       |

---

## 📄 License

This project is under the MIT license.

---

## 👨‍💻 Author

**Nilton Junior**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nilton-junior-5915a2238/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/niltonjr-dev)

---

## 🙏 Acknowledgments

- [Rocketseat](https://www.rocketseat.com.br/) for the challenge
- Node.js community

---

<p align="center">
  Project developed during Rocketseat's Node.js module from Rocketseat
</p>

---

<p align="center">
  <a href="README.md">English</a> •
  <a href="README.pt-BR.md">Português</a>
</p>
