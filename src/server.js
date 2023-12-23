const express = require('express');
const mongoose = require('mongoose')
const { databaseConnect } = require('./database');
const {requestLogger } = require('./utils/loggers');
const validateJWT = require('./middleware/authMiddleware');


// config environment variables
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


// create instance of server
const app = express();

// Middleware for data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for logging in console
app.use(requestLogger);


// connect to database
databaseConnect()


// ---------
// routes 


// test route
app.get("/", (request, response) => {
	response.json({
		message:"Hello world"
	});
});


// routers
const UserRouter = require('./routers/UserRouter');
const TicketRouter = require('./routers/TicketRouter');
const AuthRouter = require('./routers/AuthRouter');

app.use('/auth', AuthRouter );
app.use('/user', UserRouter);
app.use('/ticket', TicketRouter);


// error handler
app.use(function (err, request, response, next) {
	console.error(err.stack);
	response.status(500).json({
		message: err.message,
	});
});


/* Util routes 
 Return useful details from the database connection
 DOCS: https://mongoosejs.com/docs/api/connection.html*/
app.get("/databaseHealth", (request, response) => {
    let databaseState  = mongoose.connection.readyState;
    let databaseName   = mongoose.connection.name;
    let databaseModels = mongoose.connection.modelNames();
    let databaseHost   = mongoose.connection.host;

    response.json({
        readyState: databaseState,
        dbName    : databaseName,
        dbModels  : databaseModels,
        dbHost    : databaseHost
    })
});      



module.exports = {
    app,
    PORT,
	HOST
}