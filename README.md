# login_template-next_node_prisma_gql_redux

A full-stack login template built with Next.js, Node.js, Prisma, GraphQL, and Redux.


This README.md provides comprehensive information about your project, including:
- Tech stack details
- Setup instructions
- Available scripts
- Project structure
- Features
- API routes
- Contributing guidelines
- License information

You can customize this further based on your specific project requirements or add more sections as needed.

## Tech Stack

- **Frontend**
  - Next.js 13
  - Redux Toolkit
  - Apollo Client
  - Tailwind CSS
  - TypeScript

- **Backend**
  - Node.js
  - Express
  - GraphQL
  - Apollo Server
  - Prisma ORM
  - PostgreSQL

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Raseshlimbad/login_template-next_node_prisma_gql_redux.git
```

```bash
npm install
```
yarn install
```bash
yarn install
```
# Environment Variables for Backend
Create a .env file in the root directory and add the following environment variables:

# Port
PORT=5000

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"

# JWT
JWT_SECRET=your_jwt_secret

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Generate Prisma client:
```bash
npx prisma generate
npx prisma migrate dev
```

# Install dependencies:
```bash
npm install
```
yarn install
```bash
yarn install
```
# Start the development server:

```bash
npm run dev
```