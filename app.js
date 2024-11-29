const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const eventsRouter = require("./routes/eventRoutes");
// const multer = require("multer");

// Allow environment variables
dotenv.config();

// Express Application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static("static_assets")); // Static assets
app.use(express.static("jsAnimationFiles"));
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("view engine", "ejs");

// Mongoose Connection
mongoose.connect(process.env.MONGODB_URI)
.then(res => app.listen(3000)) //Connection Port
.catch(err => console.log(err));


// Routes
app.get('/', (req, res) => {
    res.render("home", { title: "Home" });
});

app.get('/profile', (req, res) => {
    res.render('profile', { title: "Profile" })
});

app.get('/about', (req, res) => {
    res.render("about", { title: "About" });
});

app.use('/events', eventsRouter);

// 404 Page
// app.use((req, res) => {
//     res.status(404).render("404", { title: "404"});
// });
