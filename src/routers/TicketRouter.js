const express = require('express');
const TicketController = require('../controllers/TicketController');
const CommentRouter = require('./CommentRouter');
const router = express.Router();


// Route to retrieve all tickets 
router.get('/', TicketController.getAllTickets);

// Route to retrieve a specific ticket by ID
router.get('/:ticketId', TicketController.getTicketById);

// Route to create a new ticket
router.post('/', TicketController.createTicket);

// Route to update a specific ticket by ID
router.patch('/:ticketId', TicketController.updateTicket);

// Route to delete a specific ticket by ID
router.delete('/:ticketId', TicketController.deleteTicket);

// any route starting with '/:ticketId/comments' will be handled by CommentRouter
router.use('/:ticketId/comment', CommentRouter);


module.exports = router;