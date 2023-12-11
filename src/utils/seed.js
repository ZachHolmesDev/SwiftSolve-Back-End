const mongoose = require('mongoose');
const { databaseConnect, databaseDisconnect } = require('../database');
const { User } = require('../models/user');
const { Ticket } = require('../models/ticket');
const { Comment } = require('../models/comment');
const { usersSeedList, ticketsSeedList, commentsSeedList } = require('./seedData'); // Import your seed data


require('dotenv').config();

databaseConnect().then(async () => {
    console.log('Seeding database...');
    // Delete all users tickets and comments
    await User.deleteMany({});
    await Ticket.deleteMany({});
    await Comment.deleteMany({});
    
    // insert users 
    const users = await User.insertMany(usersSeedList);

    // Replace placeholder 'userObjectId' with actual user _id in ticketsSeedList
    // ticketsSeedList.forEach(ticket => {
    //     ticket.createdBy = users[0]._id;
    //     ticket.assignedTo = users[0]._id;
    // }); 

    // Create and save tickets
    const tickets = await Ticket.insertMany(ticketsSeedList);

    // Replace placeholder 'userObjectId' and 'ticketObjectId' with actual user and ticket _id in commentsSeedList
    // commentsSeedList.forEach(comment => {
    //     comment.createdById = users[0]._id;
    //     comment.ticketId = tickets[0]._id;
    // });

    // Create and save comments
    await Comment.insertMany(commentsSeedList);

    console.log('Database seeded!');
}).catch(console.error).finally(databaseDisconnect);

