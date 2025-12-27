# Product API

A RESTful backend API for managing products, built with **Node.js**, **Express**, and **Sequelize**. This project demonstrates clean backend architecture, CRUD operations, database modeling, and API testing using Postman.

---

## 🚀 Features

* Create, Read, Update, and Delete (CRUD) products
* RESTful API design
* Express.js routing and controllers
* Sequelize ORM with models and validations
* SQLite database for development (easily switchable to MySQL)
* Environment-based configuration using dotenv
* JSON request/response handling
* Tested with Postman

---

## 🧰 Tech Stack

* **Node.js** – JavaScript runtime
* **Express.js** – Web framework
* **Sequelize** – ORM for SQL databases
* **SQLite** – Development database
* **MySQL** – Production-ready configuration
* **Postman** – API testing

---

## 📂 Project Structure

```
Product-API/
├── controllers/
│   └── productController.js
├── models/
│   └── product.js
├── routes/
│   └── productRoutes.js
├── config.js
├── index.js
├── package.json
├── .env.example
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/kudostech/Product-API.git
cd Product-API
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set up environment variables

Create a `.env` file using the example below:

```env
APP_PORT=8090

DB_DAILECT=sqlite
DB_STORAGE=./database.sqlite
```

> ⚠️ Do not commit your `.env` file to GitHub.

---

## ▶️ Running the Application

```bash
npm start
```

If successful, you should see:

```
DATABASE CONNECTION SUCCESSFUL
SERVER IS RUNNING ON PORT 8090
```

---

## 📡 API Endpoints

### ➕ Create Product

```
POST /api/products
```

**Request Body:**

```json
{
  "name": "Iphone 13",
  "description": "A reliable iphone",
  "price": 100,
  "quantity": 250
}
```

---

### 📄 Get All Products

```
GET /api/products/all
```

---

### 🔍 Get Product by ID

```
GET /api/products/:id
```

---

### ✏️ Update Product

```
PUT /api/products/:id
```

---

### 🗑️ Delete Product

```
DELETE /api/products/:id
```

---

## 🧠 Notes

* Product names are **unique** and cannot be duplicated
* SQLite is used for development and demo purposes
* The project is structured to easily switch to MySQL using environment variables

---

## 🔮 Future Improvements

* Input validation using Joi or express-validator
* Pagination and filtering
* Authentication & authorization
* Deployment (Render, Railway, or Heroku)

---

## 👨‍💻 Author

**Qudus Abolaji**
Backend / Full‑Stack Developer

---

## ⭐️ Show your support

If you find this project useful, give it a ⭐️ on GitHub!
