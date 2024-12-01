const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    NYCDOEEmail: {
        type: String,
        required: [true, "Please Enter Your NYCDOE Email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, (email) => { return email.includes("nycstudents.net"); }, "Please Enter a NYCDOE Email"],
    },
    personalEmail: {
        type: String,
        required: [true, "Please Enter Your BTHS Email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, (email) => { return email.includes("bths.edu"); }, "Please Enter a BTHS Email that ends in bths.edu"],
    }, 
    osis: {
        type: String,
        required: [true, "Please Enter Your OSIS Number"],
        unique: true,
        validate: [(osis) => { 
            const regex = /^(2|10)(?!.*(.)\1{3})(?!.*(012345|123456|234567|345678|456789|567890|678901|789012|890123|901234))(?!.*(543210|432109|321098|210987|109876|098765|987654|876543|765432|654321))[0-9]*$/;
            return regex.test(osis); 
        }, "Please enter a valid OSIS Number"],
    },
    password: {
        type: String,
        required: [true, "Please Enter An Password"],
        minlength: [6, "Minimum Password Length is 6 Characters"],
    },
    eventsAttended: {
        type: Array,
        required: true,
    },
    totalPoints: {
        type: Number,
        required: true,
    },
    totalHours: {
        type: Number,
        required: true,
    }
});


const User = mongoose.model("users", userSchema);
module.exports = User;