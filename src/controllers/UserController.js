const User = require('../models/UserModel');
const buildUpdateDataFromModel = require('../utils/buildUpdateDataFromModel');



const UserController = {

    // Route: POST /user/register
    // register a new user
    async registerUser(request, response, next) {
        try {
            let user = new User(request.body);
            let result = await user.save();
            response.json(result);
        } catch (error) {
            next(error);
        }
    },

    // Route: POST /user/login
    // user login and token generation
    async loginUser(request, response, next) {

    },

    // Route: GET /user
    // retrieve all users
    async getUsers(request, response, next) {
        try {
            let users = await User.find({});
            response.json(users);
        } catch (error) {
            next(error);
        }
    },

    // Route: GET /user/:id
    // retrieve a single user by ID
    async getUserById(request, response, next) {
        try {
            // look for user by ID
            let user = await User.findById(request.params.id);
            if (!user) {
                return response.status(404).json({message : `User with id : ${request.params.id} not found`});
            }
            response.json(user);
        } catch (error) {
            next(error);
        }
    },


/** Route: PATCH /user/:id
 * Updates a user in the database.
 * 
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the user is updated.
 * @throws {Error} - If an error occurs during the update process.
 */
async updateUser(request, response, next) {
    try {
        // Check if user exists
        const user = await User.findById(request.params.id);
        if (!user) {
            return response.status(404).json({message : `User with id : ${request.params.id} not found`});
        }
        // Generate update data 
        const updateData = buildUpdateDataFromModel(request.body, User);

        // Update user in database
        const updatedUser = await User.findByIdAndUpdate(request.params.id, updateData, { new: true });
        response.json(updatedUser);
    } catch (error) {
        next(error);
    }
},


    // Route: DELETE /user/:id
    // delete a user
    async deleteUser(request, response, next) {
        try {
            const user = await User.findById(request.params.id);
            if (!user) {
                return response.status(404).json({message : `User with id : ${request.params.id} not found`});
            }
            let result = await User.deleteOne({_id: request.params.id});
            response.json(result);
        } catch (error) {
            next(error);
        }

    }
};

module.exports = UserController;
