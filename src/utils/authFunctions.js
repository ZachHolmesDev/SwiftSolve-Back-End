const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Compares a password with a hash to check if they match.
 * @param {string} password - The password to compare.
 * @param {string} hash - The hash to compare against.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password matches the hash, false otherwise.
 */
async function passwordMatches(password, hash) {
    return await bcryptjs.compare(password, hash);
}

/**
 * Generates a JSON Web Token (JWT) for the given user.
 * @param {Object} user - The user object.
 * @returns {string} - The generated JWT.
 */
function generateJWT(user) {
    return jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );
}





module.exports = { generateJWT, passwordMatches };