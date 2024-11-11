let points = 0
let hours = 0

let eventLogChart = document.getElementById("event-log-chart")
let eventLogList = [["Helping Hands Driveby", "12/25/24 at 4:00pm", "+16 points", "+3 hours", "Present - On time"],
 ["Helping Hands Driveby", "12/25/24 at 4:00pm", "+16 points", "+3 hours", "Present - On time"], 
 ["Helping Hands Driveby", "12/25/24 at 4:00pm", "+16 points", "+3 hours", "Present - On time"], 
 ["Helping Hands Driveby", "12/25/24 at 4:00pm", "+16 points", "+3 hours", "Present - On time"],]

 for (const event of eventLogList) {
    let newRow = document.createElement("tr")
    for (const detail of event) {
        let newData = document.createElement("td")
        newData.innerHTML = detail
        
        if (detail.includes("points")) {
            points = points + parseInt(detail.substring(0,3))
        } else if (detail.includes("hours")) {
            hours = hours + parseInt(detail.substring(0,3))
        }

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

