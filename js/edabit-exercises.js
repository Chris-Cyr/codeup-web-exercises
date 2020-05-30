//Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes) and converts them into seconds.
//
// Examples
// convert(1, 3) ➞ 3780
//
// convert(2, 0) ➞ 7200
//
// convert(0, 0) ➞ 0

function convert(hours, minutes) {
    hours *= 3600;
    minutes *= 60;
    return hours + minutes;
}
