const express = require('express');
const mongoose = require('mongoose')
const { databaseConnect } = require('./database');

// create instance of server
const app = express();
// Configure some API-friendly request data formatting.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ---------
// config environment variables
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;



// ---------
// connect to database
databaseConnect()


// ---------
// routes 

// util routes 
const {requestLogger, responseLogger} = require('./utils/loggers');

// log all requests
app.use(requestLogger);


// dose it work? lol
app.get("/", (request, response) => {
	response.json({
		message:"Hello world"
	});
});

// Return useful details from the database connection
// DOCS: https://mongoosejs.com/docs/api/connection.html
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


// routers

const UserRouter = require('./routers/UserRouter');
const TicketRouter = require('./routers/TicketRouter');


app.use('/user', UserRouter);
app.use('/ticket', TicketRouter);

app.use('/',responseLogger);



module.exports = {
    app,
    PORT,
	HOST
}