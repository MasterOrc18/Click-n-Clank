let gear = document.querySelector(".gear-cost");
let parsedGear = parseFloat(gear.innerHTML);

//First Upgrade
let clickerCost = document.querySelector(".clicker-cost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level");
let clickerIncrease = document.querySelector(".clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

//Second Upgrade
let robot_1Cost = document.querySelector(".robot_1-cost");
let parsedRobot_1Cost = parseFloat(robot_1Cost.innerHTML);
let robot_1Level = document.querySelector(".robot_1-level");
let robot_1Increase = document.querySelector(".robot_1-increase");
let parsedRobot_1Increase = parseFloat(robot_1Increase.innerHTML);

//Third Upgrade
let robot_2Cost = document.querySelector(".robot_2-cost");
let parsedRobot_2Cost = parseFloat(robot_2Cost.innerHTML);
let robot_2Level = document.querySelector(".robot_2-level");
let robot_2Increase = document.querySelector(".robot_2-increase");
let parsedRobot_2Increase = parseFloat(robot_2Increase.innerHTML);

let gears_per_clickText = document.getElementById("GearsPerClick-text");
let gears_per_secondText = document.getElementById("GearsPerSecond-text");

let gears_per_click = 1;
let gears_per_second = 0;

/**
 * Function to update the title with the current gear count.
 */
function updateTitle() {
  document.title = `${Math.round(parsedGear)} Gears - Click n' Clank`;
}

/**
 * Function to increment the gear value by 1 and update the gear display on the UI.
 */
function incrementGear() {
  gear.innerHTML = Math.round((parsedGear += gears_per_click));
  updateTitle(); // Update the title after incrementing the gears
}

//First Upgrade
function buyClicker() {
  if (parsedGear >= parsedClickerCost) {
    gear.innerHTML = Math.round((parsedGear -= parsedClickerCost));

    clickerLevel.innerHTML++;

    parsedClickerIncrease = parseFloat(
      (parsedClickerIncrease * 1.03).toFixed(2)
    );
    clickerIncrease.innerHTML = parsedClickerIncrease;
    gears_per_click += parsedClickerIncrease;

    parsedClickerCost *= 1.18;
    clickerCost.innerHTML = Math.round(parsedClickerCost);

    updateTitle(); // Update the title after purchase
  }
}

//Second Upgrade
function buyRobot_1() {
  if (parsedGear >= parsedRobot_1Cost) {
    gear.innerHTML = Math.round((parsedGear -= parsedRobot_1Cost));

    robot_1Level.innerHTML++;

    parsedRobot_1Increase = parseFloat(
      (parsedRobot_1Increase * 1.03).toFixed(2)
    );
    robot_1Increase.innerHTML = parsedRobot_1Increase;
    gears_per_second += parsedRobot_1Increase;

    parsedRobot_1Cost *= 1.18;
    robot_1Cost.innerHTML = Math.round(parsedRobot_1Cost);

    updateTitle(); // Update the title after purchase
  }
}

//Third Upgrade
function buyRobot_2() {
  if (parsedGear >= parsedRobot_2Cost) {
    gear.innerHTML = Math.round((parsedGear -= parsedRobot_2Cost));

    robot_2Level.innerHTML++;

    parsedRobot_2Increase = parseFloat(
      (parsedRobot_2Increase * 1.03).toFixed(2)
    );
    robot_2Increase.innerHTML = parsedRobot_2Increase;
    gears_per_second += parsedRobot_2Increase;

    parsedRobot_2Cost *= 1.18;
    robot_2Cost.innerHTML = Math.round(parsedRobot_2Cost);

    updateTitle(); // Update the title after purchase
  }
}

setInterval(() => {
  parsedGear += gears_per_second / 10;
  gear.innerHTML = Math.round(parsedGear);
  gears_per_clickText.innerHTML = Math.round(gears_per_click);
  gears_per_secondText.innerHTML = Math.round(gears_per_second);

  updateTitle(); // Update the title regularly
}, 100);
