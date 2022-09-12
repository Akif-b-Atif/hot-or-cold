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
let color;
const maxDistance = Math.floor(
  Math.sqrt(window.innerWidth ** 2 + innerHeight ** 2)
);

document.body.addEventListener("mousemove", (e) => {
  if (win == true) {
    winFunc();
    console.log(`Target: (${targetX}, ${targetY})`);
  }
  x = e.x;
  y = e.y;
  distance = Math.floor(Math.sqrt((x - targetX) ** 2 + (y - targetY) ** 2));
  distPerc = (distance / maxDistance) * 100;
  b = Math.ceil((distance / maxDistance) * 255);
  r = 255 - b;
  document.body.style.backgroundColor = `rgb(${r}, 0, ${b})`;
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
    "Find a hidden spot somewhere on your screen. The closer you are, the hotter you get and the more the screen gets red. \nGood luck! \n\n   Order of Tempratures (1 = Furthest, 10 = Closest): \n01) Freezing \n02) Cold \n03) Chilly \n04) Mild \n05) Luke-warm \n05) Warm \n07) Hot \n08) Scorching \n09) Burning \n10) Boiling"
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
    return "Freezing";
  }
  if (distPerc >= 60) {
    return "Cold";
  }
  if (distPerc >= 50) {
    return "Chilly";
  }
  if (distPerc >= 40) {
    return "Mild";
  }
  if (distPerc >= 30) {
    return "Luke-Warm";
  }
  if (distPerc >= 20) {
    return "Warm";
  }
  if (distPerc >= 15) {
    return "Hot";
  }
  if (distPerc >= 10) {
    return "Scorching";
  }
  if (distPerc >= 05) {
    return "Burning";
  }
  return "Boiling";
}
