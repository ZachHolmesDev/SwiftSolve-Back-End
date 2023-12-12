const express = require('express');
const TicketController = require('./controllers/TicketController');
const CommentRouter = require('./CommentRouter');
const router = express.Router();

// Route to create a new ticket
router.post('/', TicketController.createTicket);

// Route to retrieve all tickets NOTE: need to add to the ticket controller
// router.get('/', TicketController.getAllTickets);

// Route to retrieve a specific ticket by ID
router.get('/:ticketId', TicketController.getTicketById);

// Route to update a specific ticket by ID
router.put('/:ticketId', TicketController.updateTicket);

// Route to delete a specific ticket by ID
router.delete('/:ticketId', TicketController.deleteTicket);

// Use CommentRouter for comment-related routes
// This means any route starting with '/:ticketId/comments' will be handled by CommentRouter
router.use('/:ticketId/comments', CommentRouter);

module.exports = router;
