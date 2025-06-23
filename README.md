# CRUD-Typescripy

Este repositório contém um projeto Full‑Stack com **Fastify** (backend) e **React + Vite** (frontend), ambos escritos em **TypeScript**, além de **Prisma** para acesso a banco **MongoDB**.

---

## Pré-requisitos

- Node.js v14+ e npm (or Yarn)
- MongoDB em execução local ou acesso a um cluster remoto
- (Opcional) Docker e Docker Compose, se preferir conteinerizar a aplicação

---

## Estrutura de pastas

```bash
CRUD-Typescripy-main/
├─ .gitignore
├─ package.json           ← scripts e dependências gerais
├─ tsconfig.json          ← configuração TypeScript para o monorepo
│
├─ prisma/
│   └─ schema.prisma      ← modelo de dados e fonte de conexão (DATABASE_URL)
│
├─ src/                   ← código do backend
│   ├─ server.ts          ← ponto de entrada do Fastify
│   ├─ routes.ts          ← definição das rotas REST
│   ├─ controllers/       ← orquestração das requisições
│   │   ├─ CreateCustomerController.ts
│   │   ├─ ListCustomersController.ts
│   │   └─ DeleteCustomerController.ts
│   ├─ services/          ← regras de negócio e chamadas ao Prisma Client
│   │   ├─ CreateCustomerService.ts
│   │   ├─ ListCustomersService.ts
│   │   └─ DeleteCustomerService.ts
│   └─ prisma/
│       └─ index.ts       ← instancia e exporta `PrismaClient`
│
└─ frontend/
    ├─ package.json       ← dependências e scripts do React/Vite
    ├─ tsconfig.json
    ├─ vite.config.ts
    ├─ tailwind.config.js  ← estilização com Tailwind CSS
    ├─ postcss.config.js
    ├─ index.html
    └─ src/               ← código do frontend React
        ├─ main.tsx
        ├─ App.tsx
        ├─ index.css
        └─ services/api.ts ← cliente Axios apontando para o backend
```

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com as seguintes chaves:

```env
# URL de conexão do Prisma com MongoDB
DATABASE_URL="mongodb://localhost:27017/meu_database"
# Porta do backend (Fastify)
PORT=3333
# Endereço base do frontend (pra evitar CORS manual)
FRONTEND_ORIGIN=http://localhost:5173
```

Inclua `.env` no `.gitignore`.

---

## Scripts principais

No diretório raíz (monorepo):

| Comando                  | Descrição                                        |
|--------------------------|--------------------------------------------------|
| `npm install`            | Instala dependências do backend e frontend       |
| `npm run prisma:generate`| Gera o Prisma Client (`prisma generate`)         |
| `npm run prisma:migrate` | Executa migrations (se houver)                   |
| `npm run dev`            | Inicia backend em `http://localhost:3333`        |

No subdiretório `frontend/`:

| Comando           | Descrição                         |
|-------------------|-----------------------------------|
| `npm install`     | Instala dependências do frontend  |
| `npm run dev`     | Inicia Vite em `http://localhost:5173` |

---

## Uso

1. **Instalar**:
   ```bash
   npm install
   cd frontend && npm install
   ```
2. **Gerar Prisma Client**:
   ```bash
   npm run prisma:generate
   ```
3. **Aplicar Migrations** (opcional se usar migrations):
   ```bash
   npm run prisma:migrate
   ```
4. **Iniciar Backend**:
   ```bash
   npm run dev
   ```
5. **Iniciar Frontend** (em outra aba):
   ```bash
   cd frontend
   npm run dev
   ```
6. Acesse a interface em `http://localhost:5173` e comece a criar, listar ou deletar clientes via UI.

---

## Melhorias sugeridas

- Validação de inputs com **Zod** ou **class-validator**
- Tratamento de erros específicos do Prisma (e.g. violação de unicidade)
- Rota de **UPDATE** (PUT/PATCH) para editar clientes
- Testes automatizados (Jest + Supertest ou Vitest)
- Docker e Docker Compose para facilitar o setup do MongoDB
- Pipeline de CI (GitHub Actions) para lint, build e testes

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

