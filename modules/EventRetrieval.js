import { eventsData } from "../db/eventData.js";

const eventsInfo = eventsData.eventList;

// Get All Unique Events without Shifts in them
const getAllEvents = () => {
    const uniqueEvents = [];
    const uniqueNames = new Set();
    for(let event of eventsInfo) {
        const tempObj = event;
        if(event.name.includes("Shift")) {
            const end = event.name.search(/\s+Shift\s\d+/);
            // console.log(end);
            tempObj.name = end !== -1 ? event.name.slice(0, end) : event.name;
            if(!uniqueNames.has(event.name.slice(0, end))) uniqueEvents.push(tempObj);
        }
        else {
            uniqueEvents.push(tempObj);
        }
        uniqueNames.add(event.name);
    }
    return uniqueEvents;
}

// Returns Information about a Specific Event
const getSpecificEventData = (eventName) => {
    const eventObj = eventsInfo.find(event => event.name === eventName); 
    return eventObj !== null ? eventObj : "Event Does Not Exist";
};

// Returns the Photo Path
const getSpecificEventPhoto = (eventName) => {
    const eventImagePath = eventsInfo.find(event => event.name === eventName).mainPhotoPath;
    return eventImagePath !== null ? eventImagePath : "Event Does Not Exist";
}

export { eventsInfo, getAllEvents, getSpecificEventData, getSpecificEventPhoto }