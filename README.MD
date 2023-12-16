# Swift Solve Back End 

## Under development

The following information is a draft README and may not be accurate untill this project is complete.

## To Do's 

- [ ] Add tests

## Description

This is the back end for the Swift Solve app. It is a RESTful API built with Node.js, Express, and MongoDB. It is hosted on Heroku and uses MongoDB Atlas for the database.

## Installation

To install this app, clone the repo and run `npm install` to install the dependencies. Then run `npm start` to start the server.

## Usage

This app is not intended to be used directly. It is the back end for the Swift Solve app, which is a full-stack app that allows users to create and solve crossword puzzles. The front end repo can be found [here]().

## Structure

The app is structured as follows:
```
.
├── README.MD
├── TEST.json
├── package-lock.json
├── package.json
├── src
│   ├── controllers
│   │   ├── CommentController.js
│   │   ├── TicketController.js
│   │   └── UserController.js
│   ├── database.js
│   ├── index.js
│   ├── models
│   │   ├── CommentModel.js
│   │   ├── TicketModel.js
│   │   └── UserModel.js
│   ├── routers
│   │   ├── CommentRouter.js
│   │   ├── TicketRouter.js
│   │   └── UserRouter.js
│   ├── server.js
│   └── utils
│       ├── buildUpdateDataFromModel.js
│       ├── loggers.js
│       ├── seed.js
│       └── seedData.js
└── tests
```
