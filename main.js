const winsDisplay = document.getElementById("wins");
const hotColdDisplay = document.getElementById("hot-cold");
const helpButton = document.getElementById("help");
let targetX;
let targetY;
let x;
let y;
let distance;
let win = true;
let wins = -1;
const maxDistance = Math.floor(
  Math.sqrt(window.innerWidth ** 2 + innerHeight ** 2)
);

document.body.addEventListener("mousemove", (e) => {
  if (win == true) {
    winFunc();
    // console.log(`Target: ${targetX}, ${targetY}`);
  }
  x = e.x;
  y = e.y;
  distance = Math.floor(Math.sqrt((x - targetX) ** 2 + (y - targetY) ** 2));
  distPerc = (distance / maxDistance) * 100;
  winsDisplay.textContent = wins;
  hotColdDisplay.textContent = hotColdCalc(distPerc);
  if (distance <= 10) {
    win = true;
  }
  // console.log(`x: ${x}, y: ${y}`);
  // console.log(`Distance: ${distance}`);
});
helpButton.addEventListener("click", () => {
  alert(
    "Order of Tempratures (1 = Furthest, 10 = Closest): \n\n01) Freezing \n02) Cold \n03) Chilly \n04) Cool \n05) Coolish \n05) Mild \n07) Warm \n08) Hot \n09) Scorching \n10) Boiling"
  );
});

function winFunc() {
  targetX = Math.floor(Math.random() * window.innerWidth) + 0;
  targetY = Math.floor(Math.random() * window.innerHeight) + 0;
  win = false;
  wins++;
}
function hotColdCalc(distPerc) {
  if (distPerc >= 70) {
    document.body.style.backgroundColor = "rgb(49, 54, 148)";
    return "Freezing";
  }
  if (distPerc >= 60) {
    document.body.style.backgroundColor = "rgb(69, 117, 181)";
    return "Cold";
  }
  if (distPerc >= 50) {
    document.body.style.backgroundColor = "rgb(117, 173, 210)";
    return "Chilly";
  }
  if (distPerc >= 40) {
    document.body.style.backgroundColor = "rgb(172, 215, 236)";
    return "Cool";
  }
  if (distPerc >= 30) {
    document.body.style.backgroundColor = "rgb(224, 243, 249)";
    return "Coolish";
  }
  if (distPerc >= 20) {
    document.body.style.backgroundColor = "rgb(254, 225, 142)";
    return "Mild";
  }
  if (distPerc >= 15) {
    document.body.style.backgroundColor = "rgb(253, 174, 97)";
    return "Warm";
  }
  if (distPerc >= 10) {
    document.body.style.backgroundColor = "rgb(245, 109, 67)";
    return "Hot";
  }
  if (distPerc >= 05) {
    document.body.style.backgroundColor = "rgb(215, 48, 40)";
    return "Scorching";
  }
  if (distPerc >= 00) {
    document.body.style.backgroundColor = "rgb(165, 1, 38)";
    return "Boiling";
  }
}
