const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        // toLowerCase: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        // toLowerCase: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        // toLowerCase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: 8,
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


UserSchema.pre("save", function(next) {
    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, (saltError, salt) => {
            if (saltError) {
                return next(saltError);
            }
            bcrypt.hash(this.password, salt, (hashError, hash) => {
                if (hashError) {
                    return next(hashError);
                }
                this.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;