const TicketModel = require('../models/TicketModel'); 

const TicketController = {
    
    // Route: GET /ticket
    async getAllTickets(request, response) {
        // Logic to get all tickets
        response.json({
            message: "Test getting all tickets"
        });
    },
    
    // Route: GET /ticket/:ticketId
    // Logic to get a specific ticket by ID
    async getTicketById(request, response) {
        response.json({
            message: "Test getting a specific ticket by ID"
        });
    },
    
    // Route: POST /ticket
    // Logic to create a ticket
    async createTicket(request, response) {
    },

    // Route: PUT /ticket/:ticketId
    // Logic to update a ticket
    async updateTicket(request, response) {
    },

    // Route: DELETE /ticket/:ticketId
    // Logic to delete a ticket
    async deleteTicket(request, response) {
    }
};


module.exports = TicketController;
