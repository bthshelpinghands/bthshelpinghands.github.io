import { getStudentTotal, getStudentAllEventsAttended } from "../../modules/StudentInfoRetrieval.js"
const studentTotalInfo = getStudentTotal(111111111);
let points = studentTotalInfo.totalPoints;
let hours = studentTotalInfo.totalHours;

let eventLogChart = document.getElementById("event-log-chart")
let eventLogList = getStudentAllEventsAttended(111111111);

 for (const event of eventLogList) {
    let newRow = document.createElement("tr")
    for (const value of Object.values(event)) {
        console.log(value);
        let newData = document.createElement("td")
        newData.innerHTML = value;
        // if (detail.includes("points")) {
        //     points = points + parseInt(detail.substring(0,3))
        // } else if (detail.includes("hours")) {
        //     hours = hours + parseInt(detail.substring(0,3))
        // }
        newRow.appendChild(newData)
    }
    eventLogChart.appendChild(newRow)
 }

let pointBar = document.getElementById("point-bar")
let hourBar = document.getElementById("hour-bar")

let maxPoints = 120
let maxHours = 30

let pointBarText = document.getElementById("point-bar-text")
let hourBarText = document.getElementById("hour-bar-text")
pointBarText.innerHTML = points
hourBarText.innerHTML = hours

let pointPercentage = Math.floor((points/maxPoints) * 100) + "%"
let hourPercentage = Math.floor((hours/maxHours) * 100) + "%"

pointBar.style.width = pointPercentage
hourBar.style.width = hourPercentage

console.log(pointPercentage)
console.log(hourPercentage)

document.documentElement.style.setProperty("--pointBarPercentage", pointPercentage)
document.documentElement.style.setProperty("--hourBarPercentage", hourPercentage)

let pointAniDuration = (4 * (points/maxPoints)).toFixed(1)
let hourAniDuration = (4 * (hours/maxHours)).toFixed(1)

pointBar.style.animationDuration = pointAniDuration + "s"
hourBar.style.animationDuration = hourAniDuration + "s"

