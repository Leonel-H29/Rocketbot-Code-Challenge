# Rocketbot Code Challenge

_Node version:_ >= 18

## Project Overview

This project involves creating an authentication API using Node.js and JavaScript. It features a public main route (GET), a registration endpoint (/register, POST), a login endpoint (/login, POST), and a protected route (/profile, GET) that requires a valid login, returning non-sensitive user info. Unauthorized access prompts an appropriate response status. Successful logins generate a 1-hour expiry JWT, required in the header for accessing the protected route, with validation to prevent access upon expiration.

## Setting Up the Database with Prisma & SQLite

To set up the database and create tables using Prisma, follow these steps:

1. Install Prisma CLI globally:

   ```bash
   npm install -g prisma
   ```

2. Initialize Prisma in your project:

   ```bash
   prisma init

   o

   npx prisma init
   ```

3. Configure your `prisma/schema.prisma` file to use the SQLite database and define the User model:

   ```prisma
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"
   }

   model User {
     id       Int     @id @default(autoincrement())
     name     String
     surname  String
     username String  @unique
     password String
     createdAt DateTime  @default(now())
   }
   ```

4. Run the Prisma migration to create the database and tables:

   ```bash
   prisma migrate dev

   o

   npx prisma migrate dev
   ```

## Enviroment variables needs

```.env
DATABASE_URL="file:./dev.db"
JWT_SECRET=<YOUR_KEY>
PORT:<PORT_NUMBER> //Optional
```

## Running the Project

To run the project, execute the following commands:

1. Install the dependencies:
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm run start
   ```
3. Access the API at `http://localhost:<PORT>/api` and the Swagger documentation at `http://localhost:<PORT>/swagger`, where `<PORT>` is the default port number 3000 or the one you have set in your `.env` file.

## Hexagonal Architecture Overview

The hexagonal architecture in this project is divided into three main layers:

- **Application**: Contains the business logic and use cases.
- **Domain**: Includes the core models and interfaces.
- **Infrastructure**: Handles external concerns like database interactions, web frameworks, etc.

### Architecture Diagram

```
    +-------------------+
    |   Domain          |
    +-------------------+
            ^
            |
    +-------------------+
    |  Application      |
    +-------------------+
            ^
            |
    +-------------------+
    |  Infrastructure   |
    +-------------------+
```

## Endpoint Logic and Parameters

Each endpoint in the API performs specific operations, and they require certain parameters:

- `POST /api/register`: Register a new user.

  _Parameters:_

  ```json
  {
    "name": "string",
    "surname": "string",
    "email": "string",
    "username": "string",
    "password": "string"
  }
  ```

  _Response:_

  ```json
  {
    "id": 3,
    "name": "Lionel",
    "surname": "Messi",
    "email": "liomessi@gmail.com",
    "username": "liomessi",
    "password": "$2a$10$vnijmgzZQhX6q0foX3RH5e4m8FcQ0TIt513vBqElHu33tDlKoQT3m"
  }
  ```

- `POST /api/login`: Log in an existing user.

  _Parameters:_

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

  _Response_

  ```json
  {
    "user": {
      "id": 3,
      "name": "Lionel",
      "surname": "Messi",
      "email": "liomessi@gmail.com",
      "username": "liomessi"
    },
    "token": "<TOKEN_KEY>"
  }
  ```

- `GET /api/profile`: Get the profile of the logged-in user.

  _Header:_

  A Bearer authentication token is required in the request header.

  ```json
  {
    "Authorization": "Bearer <TOKEN_KEY>"
  }
  ```

  _Response_

  ```json
  {
    "id": 3,
    "name": "Lionel",
    "surname": "Messi",
    "email": "liomessi@gmail.com",
    "username": "liomessi"
  }
  ```
