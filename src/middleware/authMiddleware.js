const jwt = require("jsonwebtoken");

/**
 * Middleware function to validate JWT token.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const validateJWT = (request, response, next) => {
    // check if token exists on request header
    const token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({
            message: "No token provided, please login",
        });
    }
	try {
        // verify token
        const extractedToken = token.split(" ")[1];
        const decodedToken = jwt.verify(extractedToken, process.env.JWT_SECRET);

        // attach token to request
        request.token = decodedToken;
        next();
    } catch (error) {
        return response.status(401).json({
            message: "Invalid token provided.",
        });
    }
}

module.exports = validateJWT;