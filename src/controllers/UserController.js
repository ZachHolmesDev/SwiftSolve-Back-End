const User = require('../models/UserModel');




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
    async loginUser(request, response) {

    },

    // Route: GET /user
    // retrieve all users
    async getUsers(request, response) {
        try {
            let users = await User.find({});
            response.json(users);
        } catch (error) {
            next(error);
        }
    },

    // Route: GET /user/:id
    // retrieve a single user by ID
    async getUserById(request, response) {
        try {
            let user = await User.findById(request.params.id);
            response.json(user);
        } catch (error) {
            next(error);
        }
    },

    // Route: PUT /user/:id
    // update a user's information
    async updateUser(request, response) {
        try {
            let user = await User.findById(request.params.id);
            
            user.firstName = request.body.firstName;
            user.lastName  = request.body.lastName;
            user.email     = request.body.email;
            user.password  = request.body.password;
            user.role      = request.body.role;
            
            let result = await user.save();
            response.json(result);
        } catch (error) {
            next(error);
        }
    },

    // Route: DELETE /user/:id
    // delete a user
    async deleteUser(request, response) {
        try {
            let result = await User.deleteOne({_id: request.params.id});
            response.json(result);
        } catch (error) {
            next(error);
        }

    }
};

module.exports = UserController;
