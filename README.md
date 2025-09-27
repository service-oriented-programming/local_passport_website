# Local Passport Website

This repository is a simple Node.js authentication app using Express, Passport.js, MongoDB, and EJS. It supports user registration, login, profile viewing, and logout.

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start MongoDB** (ensure it's running locally on `mongodb://127.0.0.1:27017/passportAuth`).

3. **Run the server:**
   ```
   node app.js
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Testing with POSTMAN

### 1. Register a User

- **Endpoint:** `POST http://localhost:3000/register`
- **Body (x-www-form-urlencoded):**
  - `username`: your desired username
  - `password`: your desired password

### 2. Login

- **Endpoint:** `POST http://localhost:3000/login`
- **Body (x-www-form-urlencoded):**
  - `username`: your username
  - `password`: your password

- **Note:** On success, a session cookie is set. To access protected routes, ensure you use the same session in subsequent requests (enable "cookie jar" in Postman).

### 3. View Profile (Protected Route)

- **Endpoint:** `GET http://localhost:3000/profile`
- **Requires:** Session cookie from login

### 4. Logout

- **Endpoint:** `GET http://localhost:3000/logout`
- **Requires:** Session cookie from login

---

## Notes

- All endpoints return HTML views. For API-style responses, modify the route handlers.
- Make sure to use Postman's cookie management to persist sessions between requests.