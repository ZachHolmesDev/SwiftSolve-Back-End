const express = require('express');
const router = express.Router({ mergeParams: true });
const CommentController = require('../controllers/CommentController');


// route to get all comments for a specific ticket
router.get('/', CommentController.getCommentsForTicket);

// route to get a specific comment by ID
router.get('/:commentId', CommentController.getCommentById);

// route to create a new comment
router.post('/', CommentController.createComment);

// route to update a specific comment by ID
router.patch('/:commentId', CommentController.updateComment);

// route to delete a specific comment by ID
router.delete('/:commentId', CommentController.deleteComment);


module.exports = router;