const User = require("../models/User");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const errorHandler = (err) => {
    let errors = {
        NYCDOEEmail: '',
        personalEmail: '',
        password: '',
        osis: '',
    };

    // incorrect email
    if(err.message === "Incorrect Email") {
        errors.personalEmail = "That Email is Not Registered";
    }

    // incorrect password
    if(err.message === "Incorrect Password") {
        errors.password = "That Password is Incorrect";
    }

    // duplicate error 
    if(err.code === 11000) {
        errors.NYCDOEEmail = "Email Is Already In Use";
        return errors;
    }

    // validation errors
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}
const maxAge = 30 * 24 * 3600;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge, // In seconds
    });
}

module.exports.signup_get = (req, res) => {
    res.render('signup');
};

module.exports.signup_post = async (req, res) => {
    try {
        const newAccount = await User.create({ ...req.body, eventsAttended: [], points: 0, hours: 0 });
        const token = createToken(newAccount._id);
        res.cookie("jwt_token", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: newAccount._id });
    }
    catch(err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors });
    }
};

module.exports.login_get = (req, res) => {
    res.render("login");
};

module.exports.login_post = async (req, res) => {
    const { personalEmail, password } = req.body;
    
    try {
        const user = await User.login(personalEmail, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    }
    catch (err) {
        const errors = errorHandler(err);
        res.status(400).json({ errors });
    }
};

module.exports.logout_post = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/login');
};



