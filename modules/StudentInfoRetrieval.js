// 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';

const studentData = {
    "maxId": 1,
    "users": [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "OSIS": 111111111,
            "email": "",
            "password": "hashedPassword",
            "perms": "admin",
            "totalPoints": 64,
            "totalHours": 12,
            "eventsList": [
                {
                    "eventName": "Helping Hands Driveby",
                    "dateAndTime": "12/25/24 at 4:00pm",
                    "pointsEarned": 16,
                    "hoursEarned": 3,
                    "attendance": "Present - On Time"
                },
                {
                    "eventName": "Helping Hands Driveby",
                    "dateAndTime": "12/25/24 at 4:00pm",
                    "pointsEarned": 16,
                    "hoursEarned": 3,
                    "attendance": "Present - On Time"
                },
                {
                    "eventName": "Helping Hands Driveby",
                    "dateAndTime": "12/25/24 at 4:00pm",
                    "pointsEarned": 16,
                    "hoursEarned": 3,
                    "attendance": "Present - On Time"
                },
                {
                    "eventName": "Helping Hands Driveby",
                    "dateAndTime": "12/25/24 at 4:00pm",
                    "pointsEarned": 16,
                    "hoursEarned": 3,
                    "attendance": "Present - On Time"
                }
            ]
        }
    ]
};

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
    studentData, 
    basicAuthentication, 
    getStudentAllEventsAttended, 
    getStudentEventAttendedData, 
    getStudentTotal};
