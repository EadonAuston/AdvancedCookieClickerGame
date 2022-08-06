let score = 0;
let totalIncome = 0;
let numOfUpgrades = 0;
let numOfAchievements = 0;
let numOfClicks = 0;
let numOfPrestiges = 0;
let upgrades = document.querySelector('.upgrades');
let prestige = document.querySelector('.prestige');
let info = document.querySelector('.info');
let achievements = document.querySelector('.achievements');



let cursorIncome = 1;

let cursorCost = 100;


let grandmaIncome = 5;

let grandmaCost = 500;


let ovenIncome = 20;

let ovenCost = 1500;


let backeryIncome = 60;

let backeryCost = 5000;

let hotelIncome = 120;

let hotelCost = 10000;


let estateIncome = 300;

let estateCost = 25000;


let mansionIncome = 1000;

let mansionCost = 60000;

let factories = 0;
let factoryIncome = 3000;

let factoryCost = 150000;


let businessIncome = 10000;

let businessCost = 500000;

let dominations = 1;
let dominationIncome = 25000;

let dominationCost = 1000000;

let achievementNumber = 0;





function addToScore(amount){
score += amount;
document.getElementById("score").innerHTML = score.toFixed(2);

}

function numClicks(){
numOfClicks++;
document.getElementById("numOfClicks").innerHTML = numOfClicks;
}



let upgradeList = [
    {cursors  : 0},
    {grandmas  : 0},
    {ovens : 0},
     {backeries: 0},
     {hotels: 0},
     {estates: 0},
     {mansions: 0},
     {factories: 0},
     {businesses: 0},
     {dominations: 0}
]

let displayStyle = [upgrades, prestige, info, achievements];
const clearDisplay = () =>{
for(styles of displayStyle){
    styles.style.display = 'none';
}
}
let showDisplay = x => {
clearDisplay();
x.style.display = 'block';
}

let checkPrestige = () => {
    if(upgradeList[9].dominations >= 1){
        document.getElementById('locked').style.display = 'none';
        document.getElementById('unlocked').style.display = 'block';
    } else{
        document.getElementById('unlocked').style.display = 'none';
        document.getElementById('locked').style.display = 'block';
    }
}

function confirmPrestige(){
    score = 0;
    numOfUpgrades = 0;
    numOfPrestiges++;
    totalIncome = 0;
    upgradeList[0].cursors = 0;
    upgradeList[1].grandmas = 0;
    upgradeList[2].ovens = 0;
    upgradeList[3].backeries = 0;
    upgradeList[4].hotels = 0;
    upgradeList[5].estates = 0;
    upgradeList[6].mansions = 0;
    upgradeList[7].factories = 0;
    upgradeList[8].businesses = 0;
    upgradeList[9].dominations = 0;
    cursorIncome *= 1.3;
    grandmaIncome = Math.round(grandmaIncome * 1.3);
    ovenIncome = Math.round(ovenIncome * 1.3);
    backeryIncome = Math.round(backeryIncome * 1.3);
    hotelIncome = Math.round(hotelIncome * 1.3);
    estateIncome = Math.round(estateIncome * 1.3);
    mansionIncome = Math.round(mansionIncome * 1.3);
    factoryIncome = Math.round(factoryIncome * 1.3);
    businessIncome = Math.round(businessIncome * 1.3);
    dominationIncome = Math.round(dominationIncome * 1.3);
    
    document.getElementById("cursorIncome").innerHTML = cursorIncome.toFixed(2);
    document.getElementById("grandmaIncome").innerHTML = grandmaIncome.toFixed(2);
    document.getElementById("ovenIncome").innerHTML = ovenIncome.toFixed(2);
    document.getElementById("backeryIncome").innerHTML = backeryIncome.toFixed(2);
    document.getElementById("hotelIncome").innerHTML = hotelIncome.toFixed(2);
    document.getElementById("estateIncome").innerHTML = estateIncome.toFixed(2);
    document.getElementById("mansionIncome").innerHTML = mansionIncome.toFixed(2);
    document.getElementById("factoryIncome").innerHTML = factoryIncome.toFixed(2);
    document.getElementById("businessIncome").innerHTML = businessIncome.toFixed(2);
    document.getElementById("dominationIncome").innerHTML = dominationIncome.toFixed(2);
    

    document.getElementById("score").innerHTML = score;
document.getElementById("totalIncome").innerHTML = totalIncome;
}

let byId = x => document.getElementById(`${x}`).innerHTML;


function buyCursor(){
if(score>=cursorCost){
score -= cursorCost;

upgradeList[0].cursors++;
cursorCost = Math.round(cursorCost * 1.2);
document.getElementById('cursorCost').innerHTML = cursorCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyGrandma(){
if(score>=grandmaCost){
score -= grandmaCost;
upgradeList[1].grandmas++;
grandmaCost = Math.round(grandmaCost * 1.2);
document.getElementById('grandmaCost').innerHTML = grandmaCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyOven(){
if(score>=ovenCost){
score -= ovenCost;
upgradeList[2].ovens++;
ovenCost = Math.round(ovenCost * 1.2);
document.getElementById('ovenCost').innerHTML = ovenCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyBackery(){
if(score>=backeryCost){
score -= backeryCost;
upgradeList[3].backeries++;
backeryCost = Math.round(backeryCost * 1.2);
document.getElementById('backeryCost').innerHTML = backeryCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyHotel(){
if(score>=hotelCost){
score -= hotelCost;
upgradeList[4].hotels++;
hotelCost = Math.round(hotelCost * 1.2);
document.getElementById('hotelCost').innerHTML = hotelCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyEstate(){
if(score>=estateCost){
score -= estateCost;
upgradeList[5].estates++;
estateCost = Math.round(estateCost * 1.2);
document.getElementById('estateCost').innerHTML = estateCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyMansion(){
if(score>=mansionCost){
score -= mansionCost;
upgradeList[6].mansions++;
mansionCost = Math.round(mansionCost * 1.2);
document.getElementById('mansionCost').innerHTML = mansionCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyFactory(){
if(score>=factoryCost){
score -= factoryCost;
upgradeList[7].factories++;
factoryCost = Math.round(factoryCost * 1.2);
document.getElementById('factoryCost').innerHTML = factoryCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyBusiness(){
if(score>=businessCost){
score -= businessCost;
upgradeList[8].businesses++;
businessCost = Math.round(businessCost * 1.2);
document.getElementById('businessCost').innerHTML = businessCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
function buyDomination(){
if(score>=dominationCost){
score -= dominationCost;
upgradeList[9].dominations++;
dominationCost = Math.round(dominationCost * 1.2);
document.getElementById('dominationCost').innerHTML = dominationCost;
document.getElementById("score").innerHTML = score.toFixed(2);
numOfUpgrades++;
}
}
let popUp = document.querySelector('.prestigePopUp');
let darken = document.querySelector('.darken');
let popUpClose = document.querySelector('.prestigePopUpClose');
function areYouSure(){
popUp.style.display = 'block';
popUpClose.style.display = 'block';
darken.style.display = 'block';
}
function closePop(){
    popUp.style.display = 'none';
popUpClose.style.display = 'none';
darken.style.display = 'none';
}

setInterval(function(){

totalIncome = (upgradeList[0].cursors * cursorIncome) + (upgradeList[1].grandmas * grandmaIncome) + 
(upgradeList[2].ovens * ovenIncome) + (upgradeList[3].backeries * backeryIncome) + (upgradeList[4].hotels * hotelIncome)
+ (upgradeList[5].estates * estateIncome) + (upgradeList[6].mansions * mansionIncome) +
(upgradeList[7].factories*factoryIncome) + (upgradeList[8].businesses * businessIncome) +
(upgradeList[9].dominations * dominationIncome);


score += totalIncome;
checkPrestige();
document.getElementById("score").innerHTML = score.toFixed(2);

document.getElementById("totalIncome").innerHTML = totalIncome.toFixed(2);
document.getElementById("income").innerHTML = totalIncome;
document.getElementById("numOfUpgrades").innerHTML = numOfUpgrades;
document.getElementById("numOfAchievements").innerHTML = numOfAchievements;

},1000);
let hundredClicks = document.querySelectorAll(".achievementBox");
for(let i = 0; i < hundredClicks.length; i++){
    hundredClicks[i].style.display = 'none';
}
setInterval(function(){
    hundredClicks[0].style.display = 'block';
    if(numOfClicks >= 100 && achievementNumber === 0){
        hundredClicks[0].style.color = "green";
        alert("You have unlocked your first achievement!");
        achievementNumber++;
        numOfAchievements++;
        hundredClicks[1].style.display = 'block';
    }
    if(numOfClicks >= 1000 && achievementNumber === 1){
        hundredClicks[1].style.color = "green";
        alert("You have unlocked an achievement!");
        achievementNumber++;
        hundredClicks[2].style.display = 'block';
        numOfAchievements++;
    }
    if(totalIncome >= 100 && achievementNumber === 2){
        hundredClicks[2].style.color = "green";
        alert("You are starting to get the hang of this!");
        achievementNumber++;
        hundredClicks[3].style.display = 'block';
        numOfAchievements++;
    
    }
    if(totalIncome >= 1000 && achievementNumber === 3){
        hundredClicks[3].style.color = "green";
        alert("The more the merrier!");
        achievementNumber++;
        hundredClicks[4].style.display = 'block';
        numOfAchievements++;
    
    }
    if(upgradeList[7].factories >= 3 && achievementNumber === 4){
        hundredClicks[4].style.color = "green";
        alert("Too many cookies!");
        achievementNumber++;
        hundredClicks[5].style.display = 'block';
        numOfAchievements++;
    
    }
    if(upgradeList[9].dominations >= 1 && achievementNumber === 5){
        hundredClicks[5].style.color = "green";
        alert("You can now broaden your horizons!");
        achievementNumber++;
        hundredClicks[6].style.display = 'block';
        numOfAchievements++;
    
    }
        },1000)
