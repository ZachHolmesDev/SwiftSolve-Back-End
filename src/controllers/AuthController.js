const User = require('../models/UserModel');
const { generateJWT, passwordMatches } = require('../utils/authFunctions');
const buildUpdateDataFromModel = require('../utils/buildUpdateDataFromModel');

const AuthController = {

    // Route: POST /auth/register
    // register a new user
    async registerUser(request, response, next) {
        try {
            // create new user
            const userExists = await User.findOne({
                email: request.body.email,
            });
            if (userExists) {
                return response.status(400).json({
                    message: `User with email : ${request.body.email} already exists`,
                });
            }
            const user = new User(request.body);
            const result = await user.save();
            response.json(result);
        } catch (error) {
            next(error);
        }
    },

    // Route: POST /auth/login
    // user login and token generation
    async loginUser(request, response, next) {
        try {
            // look for user
            const user = await User.findOne({ email: request.body.email });
            if (!user) {
                return response.status(404).json({
                    message: `User with email : ${request.body.email} not found`,
                });
            }
            // check password
            const passwordValid = await passwordMatches(
                request.body.password,
                user.password
            );
            if (!passwordValid) {
                return response.status(401).json({
                    message: `Password for user with email : ${request.body.email} is incorrect`,
                });
            }
            // generate token
            const token = generateJWT(user);
            response.json({ token });
        } catch (error) {
            next(error);
        }
    },
};

module.exports = AuthController;