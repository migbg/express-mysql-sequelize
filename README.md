# 🚀 Express + Sequelize MySQL API

A simple RESTful API built with **Express.js** and **Sequelize ORM** for **MySQL**. Includes full CRUD for users, environment configuration, and database health checks.

---

## 📋 Table of Contents

* [✨ Features](#-features)
* [⚙️ Installation](#-installation)
* [🛠️ Configuration](#-configuration)
* [▶️ Usage](#-usage)
* [📡 API Endpoints](#-api-endpoints)
* [📁 Project Structure](#-project-structure)
* [⚠️ Error Handling](#-error-handling)
* [📄 License](#-license)

---

## ✨ Features

* Express.js server with JSON body parsing
* Sequelize ORM integration with MySQL
* Full CRUD for users using models
* Health check endpoint with raw SQL or `.authenticate()`
* Environment-based configuration via `.env`
* Graceful shutdown and connection cleanup

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

3. Set up the environment file:

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

For development (requires `nodemon`):

```bash
npm run dev
```

Sequelize will automatically sync the models with the database on server start.

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
| GET    | `/health` | Check DB connection status |

---

## 📁 Project Structure

```
project/
├── app.js                  # Entry point
├── .env                    # Environment config
├── config/
│   └── sequelize.js        # Sequelize instance and init
├── models/
│   └── User.js             # Sequelize User model
├── routes/
│   ├── users.js            # CRUD routes
│   └── health.js           # Health check
├── middleware/
│   └── errorHandler.js     # Error handlers
└── package.json
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