# Bookstore Management App
The Bookstore Management App is a web-based platform that allows users to create, update, read, and delete books. Users can also browse and search for books by various criteria. The app uses JWT for user authentication and authorization.

## Technologies Used
Backend: Node.js, Express.js, MongoDB
Frontend: ReactJS, TailwindCSS
## Features
- User registration and login system
- Dashboard to view and manage books
- CRUD operations for books
- Books browsing and search functionality
- Edit user profile information
## Usage
- Clone the repository.
- Install the dependencies using `npm install` in the root folder.
- Create a `.env` file in the root folder and provide the necessary environment variables (e.g., MongoDB connection string, JWT secret key).
- Start the server by running `npm start` in the root folder.
- Navigate to the frontend directory (`client`) and run `npm install` to install frontend dependencies.
- Start the frontend development server by running `npm start` in the `client` directory.
- Access the application in your browser at http://localhost:3000.
## User Interface
- Landing Page: Users can either login or register to access the application.
- Dashboard: Once logged in, users are directed to the dashboard, where they can view and manage their books.
- Books Page: Users can create, update, read, and delete books. They can also browse and search for books by various criteria.
- Profile Page: Users can edit their profile information and change their password.
## Dependencies
The main dependencies used in this project are:

- Express.js
- ReactJS
- MongoDB
- TailwindCSS
- JWT

For a complete list of dependencies, please refer to the `package.json` files in the root and `client` directories.
