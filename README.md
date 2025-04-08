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
