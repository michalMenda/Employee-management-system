# Employee Management 

## Overview
This project implements a complete employee management system connecting a React client, NestJS server, and PostgreSQL database. The system enables management of employees with full CRUD operations.

## Architecture
The project follows a three-tier architecture:

- **Presentation Layer**: React with TypeScript (client-side)
- **Logic Layer**: NestJS with TypeScript (server-side)
- **Data Layer**: PostgreSQL with Prisma ORM (database)

## Environment Setup

### .env File
Create an `.env` file in the `Server` directory with the following parameters:

**Database connection details**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/employee_db"
```

**Server settings**
```env
PORT=3000                 # Server port
NODE_ENV=development      # Runtime environment
```

## API Routes
The server provides the following API routes:

### Employees
- `GET /workers` - Get list of employees
- `GET /workers/:id` - Get employee by ID
- `POST /workers` - Create new employee
- `PUT /workers/:id` - Update existing employee
- `DELETE /workers/:id` - Delete employee

### Employee Data Structure
```json
{
  "id": 1,
  "name": "John Doe",
  "role": "Developer",
  "isActive": true
}
```

## Installation and Running

### Prerequisites
- Node.js (version 18+)
- PostgreSQL Server
- npm

### Database Setup
```bash
cd Server
npx prisma migrate dev
```

### Running the Application

**Backend (Port 3000):**
```bash
cd Server
npm install
npm run start:dev
```

**Frontend (Port 5173):**
```bash
cd Client
npm install
npm run dev
```

## Technologies

**Client-side**: React 18, TypeScript, Vite, Chakra UI v2, TanStack Query, Axios, Framer Motion

**Server-side**: NestJS, TypeScript, Prisma ORM, Class Validator, Class Transformer

**Database**: PostgreSQL

**Development tools**: npm, Vite, ESLint, Prettier
