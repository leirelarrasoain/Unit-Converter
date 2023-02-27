let num = 0;
let inputEl = document.getElementById("input-el");
let buttonEl = document.getElementById("button-el");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

buttonEl.addEventListener("click", function(){
    num = inputEl.value   
    metersToFeet();
    litersToGallons();
    kilogramsToPounds();
})



function metersToFeet () {
    let feet = (num * 3.281).toFixed(2);
    let meters = (num * 0.3048).toFixed(2);
    length.value = `
    ${num} meters = ${feet} feet | ${num} feet = ${meters} meters
    `;
}

function litersToGallons() {
    let gallons = (num * 0.264).toFixed(2);
    let liters = (num * 3,78541).toFixed(2);
    volume.value = `
    ${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters
    `;
}

function kilogramsToPounds(){
    let pounds = (num * 2.204).toFixed(2);
    let kilograms = (num * 0,453592).toFixed(2);
    mass.value = `
    ${num} kilograms = ${pounds} pounds | ${num} pouns = ${kilograms} kilograms
    `;
}
