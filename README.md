# 🚀 Express + Sequelize MySQL API

A simple RESTful API built with **Express.js**, **Sequelize ORM**, and **MySQL**. Includes full CRUD for users, database health checks, and interactive Swagger API documentation.

---

## 📋 Table of Contents

* [✨ Features](#-features)
* [⚙️ Installation](#-installation)
* [🛠️ Configuration](#-configuration)
* [▶️ Usage](#-usage)
* [📄 API Documentation](#-api-documentation)
* [📡 API Endpoints](#-api-endpoints)
* [📁 Project Structure](#-project-structure)
* [⚠️ Error Handling](#-error-handling)
* [📄 License](#-license)

---

## ✨ Features

* Express.js server with JSON body parsing
* Sequelize ORM with MySQL support
* Full CRUD operations for users
* Health check endpoint
* Environment-based configuration via `.env`
* Interactive API documentation via Swagger (OpenAPI 3.0)
* Graceful shutdown and error handling

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   ```bash
   cp .env.example .env
   ```

4. Configure your `.env` with database credentials.

---

## 🛠️ Configuration

Example `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=myapp
PORT=3000
```

---

## ▶️ Usage

Start the server:

```bash
npm start
```

For development with hot reload (requires `nodemon`):

```bash
npm run dev
```

---

## 📄 API Documentation

Interactive Swagger UI is available at:

```
http://localhost:3000/api-docs
```

Generated automatically from inline JSDoc annotations in the routes.

---

## 📡 API Endpoints

### Users

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/users`     | Retrieve all users  |
| GET    | `/users/:id` | Retrieve user by ID |
| POST   | `/users`     | Create a new user   |
| PUT    | `/users/:id` | Update user by ID   |
| DELETE | `/users/:id` | Delete user by ID   |

### Health

| Method | Endpoint  | Description                |
| ------ | --------- | -------------------------- |
| GET    | `/health` | Check server and DB status |

---

## 📁 Project Structure

```
project/
├── app.js                  # Main application entry
├── .env                    # Environment configuration
├── config/
│   ├── sequelize.js        # Sequelize initialization
│   └── swagger.js          # Swagger setup
├── models/
│   └── User.js             # Sequelize User model
├── routes/
│   ├── users.js            # User CRUD routes
│   └── health.js           # Health check route
├── middleware/
│   └── errorHandler.js     # Central error handler
├── package.json
```

---

## ⚠️ Error Handling

* Global error handler returns consistent JSON structure
* Input validation for user data
* Sequelize validation and unique constraint handling
* 404 handler for unmatched routes

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.