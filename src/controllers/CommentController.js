const CommentModel = require('../models/CommentModel'); 
const { param } = require('../routers/UserRouter');

const CommentController = {

    // Route: /ticket/:ticketId/comment
    // Logic to get all comments for a specific ticket
    async getCommentsForTicket(request, response) {
        response.json({
            message: "Test getting all comments for a specific ticket tick ID = " + request.params.ticketId
        });
    },

    // Route: /ticket/:ticketId/comment/:commentId
    // Logic to get a specific comment by ID
    async getCommentById(request, response) {
        response.json({
            message: "Test getting a specific comment by ID : " + request.params.commentId
        });
    },
    
    // Route: /ticket/:ticketId/comment
    // Logic to add a comment to a ticket
    async createComment(request, response) {

    },

    // Route: /ticket/:ticketId/comment/:commentId
    // Logic to update a comment
    async updateComment(request, response) {

    },

    // Route: /ticket/:ticketId/comment/:commentId
    // Logic to delete a comment
    async deleteComment(request, response) {

    },

    
};

module.exports = CommentController;