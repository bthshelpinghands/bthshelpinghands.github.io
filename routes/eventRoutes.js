const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();

// event Routes
router.get("/", eventController.events_index);
router.post("/", eventController.event_post);
router.get("/schedule", eventController.event_get);
router.get("/:id", eventController.events_details);
router.delete("/:id", eventController.event_cancel);
router.put("/:id", eventController.event_attendee_update);
router.put("/:id", eventController.event_details_update);

module.exports = router;