# Swift Solve Back End

## Description

This is the back end for the Swift Solve app. It is a RESTful API built with Node.js, Express, and MongoDB. It is hosted on Heroku and uses MongoDB Atlas for the database.

## Installation

To install this app, follow these steps:

1. Clone the repository: `git clone <repo-url>`
2. Navigate to the project directory: `cd swiftsolve-back-end`
3. Install the dependencies: `npm install`

## Usage

This app is not intended to be used directly. It is the back end for the Swift Solve app, which is a full-stack app that allows users to create and manage IT tickets. The front end repo can be found [here]().

## Running the app

To run the app in development mode, use the command: `npm run dev`

To run the app in production mode, use the command: `npm start`

## Seeding the database

To seed the database with initial data, use the command: `npm run seed`

## Testing

To run the tests, use the command: `npm run test`

## Project Structure

The project has the following structure:

- `controllers/`: Contains the controllers for handling requests for authentication, comments, tickets, and users.
- `models/`: Contains the Mongoose models for comments, tickets, and users.
- `routers/`: Contains the routers for handling routes related to authentication, comments, tickets, and users.
- `utils/`: Contains utility functions and scripts, including a script for seeding the database.
- `server.js`: The main server file.
- `database.js`: The file for setting up the database connection.
- `index.js`: The entry point of the application.

## API Routes

### Authentication Routes

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Login a user

### User Routes

- `GET /users`: Get all users
- `GET /users/:id`: Get a specific user
- `PUT /users/:id`: Update a specific user
- `DELETE /users/:id`: Delete a specific user

### Ticket Routes

- `GET /tickets`: Get all tickets
- `POST /tickets`: Create a new ticket
- `GET /tickets/:id`: Get a specific ticket
- `PUT /tickets/:id`: Update a specific ticket
- `DELETE /tickets/:id`: Delete a specific ticket

### Comment Routes

- `GET /tickets/:id/comments`: Get all comments for a specific ticket
- `POST /tickets/:id/comments`: Create a new comment on a ticket
- `GET /tickets/:id/comments/:id`: Get a specific comment on a ticket
- `PUT /tickets/:id/comments/:id`: Update a specific comment on a ticket
- `DELETE /tickets/:id/comments/:id`: Delete a specific comment on a ticket