// 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
import { studentData } from "../db/studentData.js";


const studentInfo = studentData.users;

//It basically checks if the password matches dont ask too many questions
const basicAuthentication = (userInput) => {
    const { email, password } = userInput;
    const userData = studentInfo.find(student => student.email === email);
    if(userData == null) return false;
    const userInputedPassword = password + userData.salt;
    const hashedInput = CryptoJS.SHA256(userInputedPassword).toString(CryptoJS.enc.Base64);
    const passwordKey = userData.password;
    return hashedInput === passwordKey;
}

// Returns all the events the student has attended
const getStudentAllEventsAttended = (osis) => {
    const userData = studentInfo.find(student => student.OSIS === osis);
    return userData.eventsList;
}

// Returns total points and hours for the student
const getStudentTotal = (osis) => {
    const userData = studentInfo.find(student => student.OSIS === osis);
    const obj = {
        totalPoints: userData.totalPoints,
        totalHours: userData.totalHours,
    };
    return obj;
}

// Returns Information about the student at an event
const getStudentEventAttendedData = (osis, event) => {
    const userDataEventList = studentInfo.find(student => student.OSIS === osis).eventsList;
    const eventDetails = userDataEventList.find(eventDetail => eventDetail.eventName === event);
    return eventDetails;
}

export {  
    basicAuthentication, 
    getStudentAllEventsAttended, 
    getStudentEventAttendedData, 
    getStudentTotal};
