const mongoose = require('mongoose');


async function databaseConnect() {
    let databaseURL = "";
    switch (process.env.NODE_ENV.toLowerCase()) {
        case "test":
            databaseURL = process.env.DB_LOCAL;
            break;
        case "development":
            databaseURL = process.env.DB_LOCAL;
            break;
        case "production":
            databaseURL = process.env.DATABASE_URL;
            break;
        default:
            console.error("Incorrect JS environment specified, database will not be connected.");
            break;
    }
  
    console.log(`Attempting to connect to database at ${databaseURL}`);

    try {
        await mongoose.connect(databaseURL);
        console.log("Database connected successfully!");
    }
    catch (error) {
        console.log(`Some error occurred connecting to the database! It was:${error}`);
    }
}


async function databaseDisconnect() {
    await mongoose.connection.close();
}


module.exports = {
    databaseConnect,
    databaseDisconnect
}