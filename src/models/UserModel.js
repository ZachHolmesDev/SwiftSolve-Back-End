const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: 10,
    },
    role: {
        type: String,
        enum : ['admin','user'],
        required: [true, "Role is required"],
        trim: true,
    },
    // updatedBy: {
    //     type: String,
    //     default: "System",
    // },
}, {
    timestamps: true,
});


userSchema.pre("save", async function (next) {


    next();
});



const User = mongoose.model("User", userSchema);

module.exports = { User }