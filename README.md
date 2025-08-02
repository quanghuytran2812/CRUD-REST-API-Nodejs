# Node.js CRUD REST API

This project is a simple CRUD REST API built using Node.js, Express, PostgreSQL, and Sequelize ORM. It provides a basic structure for managing user data with the ability to create, read, update, and delete users.

## Table of Contents

- [Node.js CRUD REST API](#nodejs-crud-rest-api)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Testing](#testing)
  - [CI/CD](#cicd)

## Technologies

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Docker
- Jest (for testing)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/node-crud-api.git
   cd node-crud-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment variables:
   Copy `.env.example` to `.env` and update the values as needed.

4. Start the application using Docker:
   ```
   docker-compose up
   ```

## Usage

Once the application is running, you can access the API at `http://localhost:3000`.

## API Endpoints

- `GET /users` - Retrieve all users
- `GET /users/:id` - Retrieve a user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user by ID
- `DELETE /users/:id` - Delete a user by ID

## Testing

To run the tests, use the following command:
```
npm test
```

## CI/CD

This project includes a CI/CD pipeline configured in GitHub Actions. The workflow is defined in the `.github/workflows/ci-cd.yaml` file and will run tests on each push and pull request.