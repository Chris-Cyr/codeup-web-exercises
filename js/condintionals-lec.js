"use strict";

console.log("hello from conditionals lec.js!");

// // ================ REAL WORLD SCENARIO ================
// // If a user is an admin,show a specific navbar
// // If weather is rainy, show rain icon
// // If number of lives is 0, game is over
//
//
// // ================ IF STATEMENT SYNTAX ================
//
// // if(condition){
// // code here runs if condition evaluates to true
// // }
//
//
// // ================ IF STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin
// //1 if user is admin show navbar
// //2 else dont
// // if(isAdmin){
// //     //show admin navbar
// //     //showAdminNavbar() <--- function
// // }
// //
// //
// // //TODO Together: Send a 20% off coupon if its users birthday
// // if(isBirthday){
// //     //send 20% off coupon
// //     //sendBirthdayEmail()<--- function
// // }
//
//
//
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// // var isRainy = true;
// //
// // // if(isRainy === true){
// // //     alert("it's raining")
// // // }
// //
// // if(isRainy){
// //     alert("Its Gon Rain!")
// // }
// //TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 100;
// var currentBalance = 200;
//
// if(itemCost <= currentBalance){
//     alert("You have enough Money!!!")
// }
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 0
//
// // // function gameOver (numberOfLives) {
// //     if(numberOfLives === 0){
// //         alert("Sorry, game over")
// //     }
// // // }
// // //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// // var weather = "snowing"
// //
// // // function isItSnowing(weather){
// //     if(weather === "snowing"){
// //         alert("It's snowing!")
// //     }
// // // }
// // // alert(isItSnowing(weather))
// // //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// // var numberInput = 11
// //
// // // function greaterThanTen (numberInput){
// //     if(numberInput > 10){
// //         alert(true)
// //     }
// // // }
// // // alert(greaterThanTen(numberInput))
// //
// //
// // //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
// //
// //
//
//
//
// // =============== IF / ELSE SYNTAX ================
//
// // if(condition){
// //     // code here runs if condition evaluates to true
// // } else {
// //     // code here runs if condition evaluates to false
// // }
//
//
//
// // =============== IF / ELSE STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = false;
// if(isAdmin === true){
//     alert("Admin Nav Bar")
// } else {
//     alert("No Admin Nav Bar")
// }
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = false
//
// if(isRainy === true){
//     alert("it's raining!")
// }else{
//     alert("it's a beautiful day in the neighborhood")
// }
//
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 0
//
// if(numberOfLives === 0){
//     alert("Sorry, game over")
// }else{
//     alert("Next Level!")
// }
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "raining"
//
// if(weather === "snowing"){
//     alert("It's snowing!")
// }else{
//     alert("Check back later for more details!")
// }
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 26
//
// if(numberInput > 10){
//     alert("True!")
// }else{
//     alert("the number is less than 10")
// }
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// function checkIfGameIsOver (numberOfLives){
//     if(numberOfLives === 0){
//         return "Sorry, game over"
//     }else{
//         return "Next Level!"
//     }
// }
// console.log(checkIfGameIsOver(0))
//
//
// //TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
// function weatherStatus(weather){
//     if(weather === "snowing"){
//         return ("It's snowing!")
//     }else{
//         return ("Check back later for more details!")
//     }
// }
// console.log(weatherStatus("snowing"))


// SHOULD WE DELETE STUFF EXAMPLE
// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// console.log("the value of the confirm is: " + weShouldDeleteStuff);
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("delete everything");
// } else {
//     alert("Operation Canceled!");
// }



//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "poop-storm"
// if(weather === "snowing"){
//     alert("It's snowing!")
// }else if(weather === "raining"){
//     alert("It's raining!")
// }else if(weather === "sleeting"){
//     alert("It's sleeting!")
// }else{
//     alert("Have a nice day!")
// }



//TODO Together: refactor the above statement as a function

// function checkWeather(weather){
//     if(weather === "snowing"){
//         return "It's snowing!"
//     }else if(weather === "raining"){
//         return("It's raining!")
//     }else if(weather === "sleeting"){
//         return("It's sleeting!")
//     }else{
//         return("Have a nice day!")
//     }
// }
// console.log(checkWeather("raining"))


// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
// var lightColor = prompt("What color is the light?")
//
// function trafficLightColor (lightColor){
//     if(lightColor === "red"){
//         return ("HIT THE BRAKES!!!")
//     }else if(lightColor === "yellow"){
//         return ("You either gotta slow down or punch it!")
//     }else if(lightColor === "green"){
//         return ("Maintain speed and proceed")
//     }else{
//         return ("You might be colorblind")
//     }
// }
// alert(trafficLightColor(lightColor))


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
// var age = 15
// var hasPermit = true;
//
// function licenseEligibility(age, hasPermit){
//     if (age < 15){
//         alert("Sorry no baby drivings");
//     } else {
//         if (age === 15){
//             alert("You can get that permit")
//         }else if (age >= 16 && hasPermit){
//             alert("You can get that license thoooo")
//         }else if (age >= 16 && !hasPermit){
//             alert("You gotta go back and get that permit big dawg....probably need some new friends that are down with not driving.")
//         }else {
//             alert("Please see front desk")
//         }
//     }
// }
// licenseEligibility(73,false)
//





// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);
//
//
// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
// var weather = "rainy";
// var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
// console.log(weatherMessage)


// =============== SWITCH STATEMENT ================
//TODO Together:

// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham":
//         alert("ham is nice and easy to spell")
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
// var weather = "purpble"
//
// switch(weather){
//     case "rainy":
//         alert("It's raining men")
//         break;
//     case "sunny":
//         alert("Sunshine")
//         break;
//     case "snow":
//         alert("So Snowy")
//         break;
//     default:
//         alert("I have no idea what it's like out...maybe go out there and let me know?")
//         break;
// }

// function checkWeather(weather){
//     var weatherMessage;
//
//     switch (weather) {
//         case "rainy":
//             weatherMessage = "it's raining";
//             break;
//         case "sunny":
//             weatherMessage = "It's sunny";
//             break;
//         case "snow":
//             weatherMessage = "It's snowy";
//             break;
//         default:
//             weatherMessage = "Have a nice day";
//             break;
//     }
//
//     return weatherMessage;
//
// }
//
// console.log(checkWeather("sunny"));



//TODO: Rewrite the intersection function from earlier as a switch statement.
function checkTrafficLightColor (lightColor) {
    var colorMessage;

    switch (lightColor) {
        case "red":
            colorMessage = "HIT THE BRAKES!";
            break;
        case "yellow":
            colorMessage = "Punch it, Junior!";
            break;
        case "green":
            colorMessage = "It's green so you're good!";
            break;
        default:
            colorMessage = "You're probably colorblind"
            break;
    }
    return colorMessage
}
alert(checkTrafficLightColor("red"));


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html




// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

