"use strict";


console.log("Hello from external JavaScript")

//alert
alert("Welcome to my Website!")

//prompt
var userColor = prompt("What is your favorite color?");

//alert 2
alert("Great, " + userColor + " is my favorite color too!");

// movies
var rentalFee = prompt("What is the rental fee?")
var mermaid = prompt("How many nights do you want to keep the Little Mermaid?");
var brotherBear = prompt("How many nights do you want to keep Brother Bear?");
var hercules = prompt("How many nights do you want to keep Hercules?");
var moviePrice = ((Number(mermaid) + Number(brotherBear) + Number(hercules)) * Number(rentalFee));
alert("It will cost $" + (moviePrice) + " to rent these movies");

// money
var google = prompt("How much did Google give you?");
var amazon = prompt("How much did Amazon give you?");
var facebook = prompt("How much did Facebook give you?");
var googleHours = prompt("How many hours did you work at Google?");
var amazonHours = prompt("How many hours did you work at Amazon?");
var facebookHours = prompt("How many hours did you work at Facebook?");

alert("You earned $" + ((Number(facebook * facebookHours)) + (Number(google * googleHours)) + (Number(amazon * amazonHours))) + " so far!");

// Enrollment
var capacity = prompt("How many students are in the class?");
var conflict = prompt("Does this conflict with your schedule (yes or no)?");


function canEnroll (capacity, conflict) {
    if (capacity < 100 && (conflict == "no" || conflict == "No" || conflict == "NO"))
        return "You are able to enroll!";
    else
        return "You are unable to enroll.";
}

alert(canEnroll(capacity, conflict));
console.log(typeof conflict);

// Apply
var items = prompt("How many items will you buy?");
var expired = prompt("Is the offer expired?");
var premium = prompt("Are you a premium member?");

function canApply (items, expired, premium) {
    if ((expired == "no" || expired == "No" || expired == "NO") && (items > 2 || (premium == "yes" || premium == "Yes" || premium == "YES"))){
        return "You are eligible for this offer!";
    } else{
        return "You are currently ineligible for this offer";
    }
}

alert(canApply(items, expired, premium));