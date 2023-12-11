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
	// .then(() => {
	// 	console.log("Database connected successfully!");
	// })
	// .catch((error) => {
	// 	console.log(
	// 		`Some error occurred connecting to the database! It was:${error}`
	// 	);
	// });



// ---------
// routes 

// log all requests in the console
app.use((request, response, next) => {
    let importantRequestInfo = {
        url   : request.originalUrl,
        params: request.params,
        verb  : request.method,
        host  : request.hostname,
        ip    : request.ip,
    };
    console.log("Request received:\n" + JSON.stringify(importantRequestInfo, null, 4)); 
    next();
});


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


module.exports = {
    app,
    PORT,
	HOST
}