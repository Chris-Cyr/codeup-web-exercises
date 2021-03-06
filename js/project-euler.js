// Multiples of 3 and 5
// Show HTML problem content
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.


function multiples35(input){
    let sumOfMultiples = 0;
    for(var i = 0; i<input; i++){
        if ((i % 3 == 0) || (i % 5 == 0)){
            sumOfMultiples += i;
        }
    }
    return sumOfMultiples;
}

console.log(multiples35(999));
console.log(multiples35(500));
console.log(multiples35(29));
console.log(multiples35(347));