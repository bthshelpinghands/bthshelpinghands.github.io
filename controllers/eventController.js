const Event = require("../models/Event");

module.exports.events_index = (req, res) => {
    Event.find()
    .sort({ createdAt: -1 })
    .then( result => {
        // console.log(result);
        res.render("events/index", {
            title: "All Events",
            events: result,
        });
    })
    .catch(err => console.log(err));
};

module.exports.events_details = (req, res) => {
    const id = req.params.id;
    Event.findById(id)
    .then(result => {
        res.render("events/details", {
            event: result,
            title: "Event Details",
        });
    })
    .catch(err => res.status(404).render("404", {
        title: "Event Not Found",
    }));
};

module.exports.event_get = (req, res) => {
    res.render("events/schedule", {
        title: "Schedule an Event",
    });
};

module.exports.event_post = (req, res) => {
    const event = new Event(req.body);

    event
    .save()
    .then(result => res.redirect("/events"))
    .catch(err => console.log(err));
};

module.exports.event_cancel = (req, res) => {
    const id = req.params.id;

    Event.findByIdAndDelete(id)
    .then(result => {
        res.json({
            redirect: "/events",
        });
    })
    .catch(err => console.log(err));
};

module.exports.event_attendee_update = async (req, res) => {
    const id = req.params.id;
    const { attendee } = req.body;

    Event.findByIdAndUpdate(id, { 
        $addToSet: { attendees: attendee }
    })
    .then(result => {
        res.json({
            redirect: "/events",
        });
    })
    .catch(err => console.log(err));
}

module.exports.event_details_update = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    Event.findByIdAndUpdate(id, {
        $set: updates,
    },
    {
        new: true, 
        runValidators: true 
    })
    .then(result => {
        res.json({ redirect: "/events" });
    })
    .catch(err => console.log(err));
}