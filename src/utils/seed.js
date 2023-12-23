const { databaseConnect, databaseDisconnect } = require("../database");
const User = require("../models/UserModel");
const Ticket = require("../models/TicketModel");
const Comment = require("../models/CommentModel");
// import seed data
const {
  usersSeedList,
  ticketsSeedList,
  commentsSeedList,
} = require("./seedData");
require("dotenv").config();
const bcrypt = require("bcryptjs");

async function hashUserPasswords(users) {
  const hashedUsers = [];

  for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      hashedUsers.push({ ...user, password: hashedPassword });
  }

  return hashedUsers;
}

databaseConnect()
  .then(async () => {
    console.log(`Wiping database...`);
    await User.deleteMany({});
    await Ticket.deleteMany({});
    await Comment.deleteMany({});

    console.log("Seeding database...");
    const hashedUsers = await hashUserPasswords(usersSeedList);
    
    await User.insertMany(hashedUsers);
    await Ticket.insertMany(ticketsSeedList);
    await Comment.insertMany(commentsSeedList);

    console.log("Database seeded!");
  })
  .catch(console.error)
  .finally(databaseDisconnect);
