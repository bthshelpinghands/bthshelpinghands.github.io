const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();
const multer = require('multer'); // Allows us to use image buffers

const storage = multer.memoryStorage(); // Stores files in memory as Buffer
const upload = multer({ storage });

// event Routes
router.get("/", eventController.events_index);
router.post("/",  upload.single('coverImage'), eventController.event_post);
router.get("/schedule", eventController.event_get);
router.get("/:id", eventController.events_details);
router.delete("/:id", eventController.event_cancel);
router.put("/:id", eventController.event_attendee_update);
router.put("/:id", eventController.event_details_update);

module.exports = router;