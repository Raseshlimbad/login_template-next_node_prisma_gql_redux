# Login Template with Next.js, Node.js, Prisma, GraphQL, and Redux

A modern, full-stack authentication template featuring a robust tech stack and clean architecture.

## Features

- 🔐 Secure Authentication (JWT)
- 🎨 Modern UI with Shadcn UI
- 🌐 GraphQL API
- 🔄 State Management with Redux
- 📱 Responsive Design
- ✨ Type Safety with TypeScript
- 🔍 Input Validation
- 🍪 Cookie-based Auth
- 🚀 Fast Development Setup

## Tech Stack

### Frontend
- Next.js 13 (App Router)
- Redux Toolkit
- Apollo Client
- Tailwind CSS
- TypeScript
- Shadcn UI
- React Hook Form
- Zod Validation

### Backend
- Node.js
- Express
- GraphQL
- Apollo Server
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Cookie Parser

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn
- Git

## Project Structure

├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── graphql/
│   │   ├── lib/
│   │   ├── store/
│   │   └── types/
│   └── package.json
│
└── backend/
├── src/
│   ├── config/
│   ├── graphql/
│   ├── middleware/
│   ├── services/
│   └── types/
├── prisma/
└── package.json



## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/login_template-next_node_prisma_gql_redux.git
cd login_template-next_node_prisma_gql_redux
```
2. Install dependencies:
For Backend:
```bash
cd backend
npm install
```

For Frontend:
```bash
cd frontend
npm install
```

3. Set up environment variables:
Backend (.env):
PORT=8001
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
JWT_SECRET=your_jwt_secret

Frontend (.env.local):
NEXT_PUBLIC_API_URL=http://localhost:8001/graphql

Set up the database:
```bash
cd backend
npx prisma generate
npx prisma migrate dev
```

5. Start the development servers:
Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## API Routes
### GraphQL Endpoints
- Authentication
  - Login: mutation Login
  - Register: mutation Register
  - Get User: query GetUser
### Authentication Flow
1. User registers/logs in
2. Server validates credentials
3. JWT token is generated
4. Token is stored in HTTP-only cookie
5. Client stores user data in Redux store
## Development
### Backend Development
```bash
cd backend
npm run dev
```
GraphQL Playground: http://localhost:8001/graphql

## Trae AI
2 context(s) used

I'll help you split the GraphQL operations into separate files and update the imports.

1. First, create the user-specific mutations:
```typescript
import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;
 ```

2. Create user-specific queries:
```typescript
import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      id
      email
      username
      isAdmin
    }
  }
`;
 ```

3. Create index files to export all mutations and queries:
```typescript
export * from './user/user.mutations';
// Add other mutation exports here
 ```

```typescript
export * from './user/user.queries';
// Add other query exports here
 ```

4. Now update the imports in files that were using graphql.ts. For example, in apiClient.ts:
```typescript
import { LOGIN_USER, REGISTER_USER } from '../graphql/mutations';
import { GET_USER } from '../graphql/queries';
 ```
```

5. Finally, you can delete the original graphql.ts file:
```bash
rm /Users/rasesh/Desktop/My\ Data/Self_learning/SetUpCodes/login_template-next_node_prisma_gql_redux/frontend/src/graphql/graphql.ts
 ```
```

This new structure:

- Separates concerns by type (mutations/queries) and domain (user)
- Makes it easier to maintain and scale
- Provides better organization for GraphQL operations
- Makes it easier to find and update specific operations
- Allows for better code splitting

## Raseshlimbad
Copy

Delete

README.md Update Readme file with all the changes

## Trae AI
2 context(s) used

README.md

utils.ts 8-8

I'll help you update the README.md file with a more comprehensive guide and the latest changes.

```markdown
# Login Template with Next.js, Node.js, Prisma, GraphQL, and Redux

A modern, full-stack authentication template featuring a robust tech stack and clean architecture.

## Features

- 🔐 Secure Authentication (JWT)
- 🎨 Modern UI with Shadcn UI
- 🌐 GraphQL API
- 🔄 State Management with Redux
- 📱 Responsive Design
- ✨ Type Safety with TypeScript
- 🔍 Input Validation
- 🍪 Cookie-based Auth
- 🚀 Fast Development Setup

## Tech Stack

### Frontend
- Next.js 13 (App Router)
- Redux Toolkit
- Apollo Client
- Tailwind CSS
- TypeScript
- Shadcn UI
- React Hook Form
- Zod Validation

### Backend
- Node.js
- Express
- GraphQL
- Apollo Server
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Cookie Parser

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn
- Git

## Project Structure

 ```
```

├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── graphql/
│   │   ├── lib/
│   │   ├── store/
│   │   └── types/
│   └── package.json
│
└── backend/
├── src/
│   ├── config/
│   ├── graphql/
│   ├── middleware/
│   ├── services/
│   └── types/
├── prisma/
└── package.json

```plaintext

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/login_template-next_node_prisma_gql_redux.git
cd login_template-next_node_prisma_gql_redux
 ```
```

2. Install dependencies:
For Backend:

```bash
cd backend
npm install
 ```

For Frontend:

```bash
cd frontend
npm install
 ```

3. Set up environment variables:
Backend (.env):

```plaintext
PORT=8001
DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
JWT_SECRET=your_jwt_secret
 ```
```

Frontend (.env.local):

```plaintext
NEXT_PUBLIC_API_URL=http://localhost:8001/graphql
 ```

4. Set up the database:
```bash
cd backend
npx prisma generate
npx prisma migrate dev
 ```

5. Start the development servers:
Backend:

```bash
cd backend
npm run dev
 ```

Frontend:

```bash
cd frontend
npm run dev
 ```

## API Routes
### GraphQL Endpoints

- Authentication
  - Login: mutation Login
  - Register: mutation Register
  - Get User: query GetUser

### Authentication Flow

1. User registers/logs in
2. Server validates credentials
3. JWT token is generated
4. Token is stored in HTTP-only cookie
5. Client stores user data in Redux store

## Development
### Backend Development

```bash
cd backend
npm run dev
 ```

- GraphQL Playground: http://localhost:8001/graphql

### Frontend Development
```bash
cd frontend
npm run dev
```
Application: http://localhost:3000

## Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.














<!-- 
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
``` -->