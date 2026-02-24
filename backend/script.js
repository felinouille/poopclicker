// recuperation des image
const poop = document.querySelector(".poop");
const paper = document.querySelector(".paperimg");
const toilette = document.querySelector(".toiletteimg");
const constipation = document.querySelector(".constipationimg");

//recuperation des texte
const numberofPoop = document.querySelector(".numberpoop");

const paperUpgrade = document.querySelector(".paperupgrade");
const paperCost = document.querySelector(".papercost");

const toiletteUpgrade = document.querySelector(".toiletteupgrade");
const toiletteCost = document.querySelector(".toilettecost");

const constipationUpgrade = document.querySelector(".constipationupgrade");
const constipationCost = document.querySelector(".constipationcost");

//variable de jeux
let totalPoop = 0;
let poopByClick = 1;
let CPS = 1;
let paperprice = 10;
let paperlvl = 0;
let toiletteprice = 1000;
let toilettelvl = 0;
let constipationprice = 5000;
let constipationlvl = 0;


//interaction
poop.addEventListener("mousedown", () => {
    poop.src ="../image/Gemini_Generated_Image_ittbefittbefittb.png";
    totalPoop += poopByClick;
    numberofPoop.innerHTML = "you have " + totalPoop + " poop";
});

poop.addEventListener("mouseup", () => {
    poop.src ="../image/Gemini_Generated_Image_ittbefittbefittb - Copie.png";
});

paper.addEventListener("click", () => {
    if(totalPoop >= paperprice) {
        paperlvl++
        poopByClick = poopByClick + 1;
        CPS = CPS + poopByClick;
        totalPoop -= paperprice;
        paperprice = Math.floor(paperprice * 1.5);
        numberofPoop.innerHTML = "you have " + totalPoop + " poop";
        paperCost.innerHTML = "prochaine amelioration " + paperprice + " poop";
        paperUpgrade.innerHTML = "paper au niveau " + paperlvl;
    } else {
        alert("you don't have enough money");
    }
});

toilette.addEventListener("click", () => {
    if(totalPoop >= toiletteprice) {
        toilettelvl++
        poopByClick = poopByClick + 15;
        CPS = CPS + poopByClick;
        totalPoop -= toiletteprice;
        toiletteprice = Math.floor(toiletteprice * 1.5);
        numberofPoop.innerHTML = "you have " + totalPoop + " poop";
        toiletteCost.innerHTML = "prochaine amelioration " + toiletteprice + " poop";
        toiletteUpgrade.innerHTML = "paper au niveau " + toilettelvl;
    } else {
        alert("you don't have enough money");
    }
});

constipation.addEventListener("click", () => {
    if(totalPoop >= constipationprice) {
        constipationlvl++
        poopByClick = poopByClick + 50;
        CPS = CPS + poopByClick;
        totalPoop -= constipationprice;
        constipationprice = Math.floor(constipationprice * 1.5);
        numberofPoop.innerHTML = "you have " + totalPoop + " poop";
        constipationCost.innerHTML = "prochaine amelioration " + constipationprice + " poop";
        constipationUpgrade.innerHTML = "paper au niveau " + constipationlvl;
    } else {
        alert("you don't have enough money");
    }
});
