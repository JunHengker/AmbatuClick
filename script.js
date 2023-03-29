var money = 1000;
var clickValue = 1;
var perSecond = 0;
var multiplierCost = 500;
var autoClickerCost = 200;
var autoClickerLevel = 0;
var sausageCost = 100;
var lemperCost = 400;

function updateMoney() {
    document.getElementById("money").innerHTML = money;
}

function clickButton() {
    money += clickValue;
    document.getElementById("coin-sound").play();
    updateMoney();
}

function startAutoClick() {
    setInterval(function () {
        money += perSecond * autoClickerLevel;
        updateMoney();
    }, 1000);
}

function buyMultiplier() {
    if (money >= multiplierCost) {
        money -= multiplierCost;
        clickValue *= 2;
        multiplierCost *= 2;
        document.getElementById("buyMultiplier").innerHTML = "Buy multiplier for " + multiplierCost + " coins";
        document.getElementById("purchase-sound").play();
        updateMoney();
    } else {
        alert("You don't have enough money to buy the multiplier!");
    }
}

function buyAutoClicker() {
    if (money >= autoClickerCost) {
        money -= autoClickerCost;
        autoClickerLevel++;
        perSecond += clickValue;
        autoClickerCost *= 2;
        document.getElementById("buyAutoClicker").innerHTML = "Buy auto-clicker for " + autoClickerCost + " coins";
        document.getElementById("purchase-sound").play();
        updateMoney();
        startAutoClick();
    } else {
        alert("You don't have enough money to buy the auto-clicker!");
    }
}

function buySausage() {
    if (money >= sausageCost) {
        money -= sausageCost;
        clickValue += 1;
        sausageCost *= 2;
        document.getElementById("buySausage").innerHTML = sausageCost + " coins";
        updateMoney();
        startAutoClick();
    } else {
        alert("You don't have enough money to buy this item!");
    }
}

function buyLemper() {
    if (money >= lemperCost) {
        money -= lemperCost;
        clickValue += 5;
        lemperCost *= 2;
        document.getElementById("buyLemper").innerHTML = lemperCost + " coins";
        updateMoney();
        startAutoClick();
    } else {
        alert("You don't have enough money to buy this item!");
    }
}

window.onload = function () {
    document.getElementById("clickButton").addEventListener("click", clickButton);
    document.getElementById("buyMultiplier").addEventListener("click", buyMultiplier);
    document.getElementById("buyAutoClicker").addEventListener("click", buyAutoClicker);
    document.getElementById("buySausage").addEventListener("click", buySausage);
    document.getElementById("buyLemper").addEventListener("click", buyLemper);
    startAutoClick();
};
