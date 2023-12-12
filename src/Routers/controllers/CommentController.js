const CommentModel = require('../../models/CommentModel'); 

const CommentController = {

    async getCommentsForTicket(request, response) {
        // Logic to get all comments for a specific ticket
        response.json({
            message: "Test getting all comments for a specific ticket tick ID = " + request.params.ticketId
        });
    },

    // route is : /ticket/:ticketId/comment/:commentId
    async getCommentById(request, response) {
        // Logic to get a specific comment by ID
    },
    
    // route is : /ticket/:ticketId/comment
    async createComment(request, response) {
        // Logic to add a comment to a ticket
    },

    // route is : /ticket/:ticketId/comment/:commentId
    async updateComment(request, response) {
        // Logic to update a comment
    },

    // route is : /ticket/:ticketId/comment/:commentId
    async deleteComment(request, response) {
        // Logic to delete a comment
    },

    
};

module.exports = CommentController;