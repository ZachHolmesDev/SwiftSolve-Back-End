const { databaseConnect, databaseDisconnect } = require('../database');
const User = require('../models/UserModel');
const Ticket = require('../models/TicketModel');
const Comment = require('../models/CommentModel');
// import seed data
const { usersSeedList, ticketsSeedList, commentsSeedList } = require('./seedData');

require('dotenv').config();


databaseConnect()
    .then(async () => {
        console.log(`wiping database...`)
        await User.deleteMany({});
        await Ticket.deleteMany({});
        await Comment.deleteMany({});
        
        console.log('Seeding database...');
        await User.insertMany(usersSeedList);
        await Ticket.insertMany(ticketsSeedList);
        await Comment.insertMany(commentsSeedList);

        console.log('Database seeded!');
    })
    .catch(console.error)
    .finally(databaseDisconnect);

