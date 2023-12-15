const CommentModel = require('../models/CommentModel'); 
// const { param } = require('../routers/UserRouter');

const CommentController = {

    // Route: /ticket/:ticketId/comment
    // get all comments for a specific ticket
    async getCommentsForTicket(request, response) {
        try {
            let comments = await CommentModel.find({ticketId: request.params.ticketId});
            response.json(comments);
        } catch (error) {
            next(error);
        }
    },

    // Route: /ticket/:ticketId/comment/:commentId
    // get a specific comment by ID
    async getCommentById(request, response) {
        response.json({
            message: "Test getting a specific comment by ID : " + request.params.commentId
        });
    },
    
    // Route: /ticket/:ticketId/comment
    // add a comment to a ticket
    async createComment(request, response) {

    },

    // Route: /ticket/:ticketId/comment/:commentId
    // update a comment
    async updateComment(request, response) {

    },

    // Route: /ticket/:ticketId/comment/:commentId
    // delete a comment
    async deleteComment(request, response) {

    },

    
};

module.exports = CommentController;