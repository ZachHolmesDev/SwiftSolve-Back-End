const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicketSchema = new Schema(
	{
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: [true, "Title is required"],
		},
		description: {
			type: String,
			required: [true, "Description is required"],
		},
		category: {
			type: String,
			// Optional, so no 'required' field
		},
		status: {
			type: String,
			required: [true, "Status is required"],
			enum: ["open", "closed", "pending"],
		},
		priority: {
			type: String,
			required: [true, "Priority is required"],
			enum: ["low", "medium", "high"],
		},
		assignedTo: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		closedAt: {
			type: Date,
		},
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
	},
	{
		timestamps: true,
	}
);

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
