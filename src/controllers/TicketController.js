const Ticket = require("../models/TicketModel");
const buildUpdateDataFromModel = require("../utils/buildUpdateDataFromModel");

const TicketController = {
	// Route: GET /ticket
	// get all tickets
	async getAllTickets(request, response, next) {
		try {
			let tickets = await Ticket.find({});
			response.json(tickets);
		} catch (error) {
			next(error);
		}
	},

	// Route: GET /ticket/:ticketId
	// get a ticket by ID
	async getTicketById(request, response, next) {
		try {
			// look for ticket by ID
			let ticket = await Ticket.findById(request.params.ticketId)
				// .populate("createdBy") // currently populating for testing purposes
				// .populate("assignedTo")
				.populate("comments");
			if (!ticket) {
				return response.status(404).json({
					message: `Ticket with id : ${request.params.ticketId} not found`,
				});
			}
			response.json(ticket);
		} catch (error) {
			next(error);
		}
	},

	// Route: POST /ticket
	// create a ticket
	async createTicket(request, response, next) {
		try {
			// create new ticket
			let ticket = new TicketModel(request.body);
			let result = await ticket.save();
			response.json(result);
		} catch (error) {
			next(error);
		}
	},

	// Route: PATCH /ticket/:ticketId
	// update a ticket
	async updateTicket(request, response, next) {
		try {
			// look for ticket by ID
			let ticket = await Ticket.findById(request.params.ticketId);
			if (!ticket) {
				return response.status(404).json({
					message: `Ticket with id : ${request.params.ticketId} not found`,
				});
			}

			// build update data
			let updateData = buildUpdateDataFromModel(request.body, Ticket);

			// update ticket
			let result = await Ticket.findByIdAndUpdate(
				request.params.ticketId,
				updateData,
				{ new: true }
			);
			response.json(result);
		} catch (error) {
			next(error);
		}
	},

	// Route: DELETE /ticket/:ticketId
	// delete a ticket
	async deleteTicket(request, response, next) {
		try {
			// look for ticket by ID
			let ticket = await Ticket.findById(request.params.ticketId);
			if (!ticket) {
				return response.status(404).json({
					message: `Ticket with id : ${request.params.ticketId} not found`,
				});
			}
			// delete ticket
			let result = await Ticket.deleteOne({
				_id: request.params.ticketId,
			});
			response.json(result);
		} catch (error) {
			next(error);
		}
	},
};

module.exports = TicketController;
