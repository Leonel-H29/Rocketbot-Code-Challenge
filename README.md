# Rocketbot Code Challenge

_Node version:_ >= 18

## Project Overview

Rocketbot Code Challenge is a project designed to showcase the implementation of a hexagonal architecture in a JavaScript application, adhering to SOLID principles. The application features an object-oriented design and utilizes Prisma as an ORM to interact with a SQLite database. The project includes a user model with fields for name, surname, username, and password. All functionalities are complete, data validations are in place, and the API is documented using Swagger.

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
   }
   ```

4. Run the Prisma migration to create the database and tables:

   ```bash
   prisma migrate dev

   o

   npx prisma migrate dev
   ```

## Enviroment variables needs

```
DATABASE_URL="file:./dev.db"
JWT_SECRET=<YOUR_KEY>
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
3. Access the API at `http://localhost:3000` and the Swagger documentation at `http://localhost:3000/swagger`.

## Hexagonal Architecture Overview

The hexagonal architecture in this project is divided into three main layers:

- **Application**: Contains the business logic and use cases.
- **Domain**: Includes the core models and interfaces.
- **Infrastructure**: Handles external concerns like database interactions, web frameworks, etc.

### Architecture Diagram

```
    +-------------------+
    |   Application     |
    +-------------------+
            ^
            |
    +-------------------+
    |      Domain       |
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
