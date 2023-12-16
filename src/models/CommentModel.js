const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    createdById: {
        type: Schema.Types.ObjectId,
        // required: [true, "Created by ID is required"],
    },
    ticketId: {
        type: Schema.Types.ObjectId,
        required: [true, "Ticket ID is required"],
        ref : "Ticket",
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        trim: true,
    },
}, {
    timestamps: true,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;