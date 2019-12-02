console.log("Hello from external JavaScript")

//alert
alert("Welcome to my Website!")

//prompt
var userInput = prompt("What is your favorite color?");

//alert 2
alert("Great!, " + userInput + " is my favorite color too!");

// movies
var mermaid = prompt("How many nights do you want to keep the Little Mermaid?");
var brotherBear = prompt("How many nights do you want to keep Brother Bear?");
var hercules = prompt("How many nights do you want to keep Hercules?");
console.log(typeof mermaid)
var movies = ((Number(mermaid) + Number(brotherBear) + Number(hercules)) * 3);
alert("It will cost $" + (movies) + " to rent these movies");

// money
var google = prompt("How much did Google give you?");
var amazon = prompt("How much did Amazon give you?");
var facebook = prompt("How much did Facebook give you?");

alert("You earned $" + ((Number(facebook) * 10) + (Number(google) * 6) + (Number(amazon) * 4)) + " so far!");

// Enrollment
var capacity = prompt("How many students are in the class?");
var conflict = prompt("Does this conflict with your schedule (true or false)?");


function canEnroll (capacity, conflict) {
    if (capacity < 100 && (conflict == "false" || conflict == "False" || conflict == "FALSE"))
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
    if (expired == "false" && (items >= 2 || premium == "true")){
        return "You are eligible for this offer!";
    } else{
        return "You are currently ineligible for this offer";
    }
}

alert(canApply(items, expired, premium));