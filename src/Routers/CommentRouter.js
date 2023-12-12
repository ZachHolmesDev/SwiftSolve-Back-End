const express = require('express');
const router = express.Router({ mergeParams: true });
const CommentController = require('./controllers/CommentController');

router.get('/', CommentController.getCommentsForTicket);
router.get('/:commentId', CommentController.getCommentById);
router.post('/', CommentController.createComment);
router.put('/:commentId', CommentController.updateComment);
router.delete('/:commentId', CommentController.deleteComment);

module.exports = router;
