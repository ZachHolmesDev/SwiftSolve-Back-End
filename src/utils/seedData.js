// Updated seed data
const usersSeedList = [
    // Admin 1
    {
        _id      : "507f1f77bcf86cd799439011",
        firstName: "John",
        lastName : "Doe",
        email    : "john@example.com",
        password : "password12345",
        role     : "admin",
    },
    // Admin 2
    {
        _id      : "507f1f77bcf86cd799439012",
        firstName: "Alice",
        lastName : "Smith",
        email    : "alice@example.com",
        password : "adminpassword",
        role     : "admin",
    },
    // User 1
    {
        _id      : "507f1f77bcf86cd799439013",
        firstName: "Bob",
        lastName : "Johnson",
        email    : "bob@example.com",
        password : "userpassword",
        role     : "user",        
    },
    // User 2
    {
        _id      : "507f1f77bcf86cd799439014",
        firstName: "Carol",
        lastName : "Taylor",
        email    : "carol@example.com",
        password : "userpassword2",
        role     : "user",        
    },
    // User 3
    {
        _id      : "507f1f77bcf86cd799439015",
        firstName: "David",
        lastName : "Brown",
        email    : "david@example.com",
        password : "userpassword3",
        role     : "user",        
    },
];

const ticketsSeedList = [
    // Ticket 1
    {
        _id        : "507f1f77bcf86cd799439016", // Unique Object ID for Ticket 1
        title      : "First Ticket",
        description: "This is the first ticket.",
        status     : "open",
        priority   : "low",
        createdBy  : "507f1f77bcf86cd799439013", // Created by User 1
        assignedTo : "507f1f77bcf86cd799439011", // Assigned to Admin 1
        category   : "General",
    },
    // Ticket 2
    {
        _id        : "507f1f77bcf86cd799439017", // Unique Object ID for Ticket 2
        title      : "Second Ticket",
        description: "Issue needs urgent attention.",
        status     : "open",
        priority   : "high",
        createdBy  : "507f1f77bcf86cd799439014", // Created by User 2
        assignedTo : null, // Unassigned
        category   : "Technical",
    },
    // ... add more tickets as needed
];


const commentsSeedList = [
    // Comment 1 for Ticket 1
    {
        content    : "First comment",
        createdById: "507f1f77bcf86cd799439011", // Comment by Admin 1
        ticketId   : "507f1f77bcf86cd799439016", // Related to Ticket 1
    },
    // Comment 2 for Ticket 2
    {
        content    : "Acknowledging receipt of ticket.",
        createdById: "507f1f77bcf86cd799439012", // Comment by Admin 2
        ticketId   : "507f1f77bcf86cd799439017", // Related to Ticket 2
    },
    // ... add more comments as needed
];



module.exports = { usersSeedList, ticketsSeedList, commentsSeedList };