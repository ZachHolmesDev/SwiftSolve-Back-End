const CommentModel = require('../models/CommentModel'); 
const TicketModel = require('../models/TicketModel');
const buildUpdateDataFromModel = require('../utils/buildUpdateDataFromModel');

const CommentController = {

    // Route: /ticket/:ticketId/comment
    // get all comments for a specific ticket
    async getCommentsForTicket(request, response, next) {
        try {
            const ticket = await TicketModel.findById(request.params.ticketId);
            if (!ticket) {
                return response.status(404).json({
                    message: `Ticket with id : ${request.params.ticketId} not found`,
                });
            }

            const comments = await CommentModel.find({ticketId: request.params.ticketId});
            if (!comments) {
                return response.status(404).json({
                    message: `No comments found for ticket with id : ${request.params.ticketId}`,
                });
            }
            response.json(comments);
        } catch (error) {
            next(error);
        }
    },

    // Route: /ticket/:ticketId/comment/:commentId
    // get a specific comment by ID
    async getCommentById(request, response, next) {
        try {
            const comment = await CommentModel.findById(request.params.commentId);
            response.json(comment);
        } catch (error) {
            next(error);
        } 
    },
    
    // Route: /ticket/:ticketId/comment
    // add a comment to a tickets
    async createComment(request, response, next) {
        try {
            const comment = await CommentModel.create({
                ticketId: request.params.ticketId,
                // createdBy: TODO - get user ID from JWT,
                content: request.body.content,
            });
            response.json(comment);
        } catch (error) {
            next(error);
        }
    },

    // Route: /ticket/:ticketId/comment/:commentId
    // update a comment
// FIXME not working
    async updateComment(request, response, next) {
        try {
            let comment = await CommentModel.findById(request.params.commentId);
            if (!comment) {
                return response.status(404).json({
                    message: `Comment with id : ${request.params.commentId} not found`,
                });
            }
            // build update data from model
            let updateData = buildUpdateDataFromModel(CommentModel, request.body);
            // update comment
            comment = await CommentModel.findByIdAndUpdate(
                request.params.commentId,
                updateData,
                {
                    new: true,
                    runValidators: true,
                }
            );
            response.json(comment);
        } catch (error) {
            next(error);
        }

    },

    // Route: /ticket/:ticketId/comment/:commentId
    // delete a comment
    async deleteComment(request, response, next) {

    },

    
};

module.exports = CommentController;