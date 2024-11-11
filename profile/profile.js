let pointBar = document.getElementById("point-bar")
let hourBar = document.getElementById("hour-bar")

let maxPoints = 120
let maxHours = 30

let points = 94
let hours = 12

let pointBarText = document.getElementById("point-bar-text")
let hourBarText = document.getElementById("hour-bar-text")
pointBarText.innerHTML = points
hourBarText.innerHTML = hours

let pointPercentage = Math.floor((points/maxPoints) * 100) + "%"
let hourPercentage = Math.floor((hours/maxHours) * 100) + "%"

pointBar.style.width = pointPercentage
hourBar.style.width = hourPercentage

document.documentElement.style.setProperty("--pointBarPercentage", pointPercentage)
document.documentElement.style.setProperty("--hourBarPercentage", hourPercentage)

let pointAniDuration = (6 * (points/maxPoints)).toFixed(1)
let hourAniDuration = (6 * (hours/maxHours)).toFixed(1)

pointBar.style.animationDuration = pointAniDuration + "s"
hourBar.style.animationDuration = hourAniDuration + "s"