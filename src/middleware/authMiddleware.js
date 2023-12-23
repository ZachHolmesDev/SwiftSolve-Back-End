const jwt = require("jsonwebtoken");

const validateJWT = (request, response, next) => {
    // check if token exists on request header
    const token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({
            message: "No token provided, please login",
        });
    }
    console.log("Token:", token);
	try {
        // verify token
        const extractedToken = token.split(" ")[1];
        const decodedToken = jwt.verify(extractedToken, process.env.JWT_SECRET);

        // attach token to request
        request.token = decodedToken;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = validateJWT;