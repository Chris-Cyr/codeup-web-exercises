// var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu", "Lily"];
//
// for (var i = 0;i<pets.length;i++) {
//     console.log(pets[i]);
// }
// // i
// // 0 Toby
// // 1 Princess
// // 2 Samson
// // 3 Jill
// // 4 Bubbles
// // 5 Malu
// // 6 Lily
//
var favoriteHockeyTeams = ["Canucks", "Maple Leafs", "Islanders"];

for (var i = 0; i<favoriteHockeyTeams.length;i++){
    console.log(favoriteHockeyTeams[i]);
}

favoriteHockeyTeams.forEach(function(team, i, favoriteHockeyTeams){
    console.log(team);
})

var fruit = ["apple", "orange", "banana"];
console.log(fruit);
fruit.push("pear");
console.log(fruit);



var sentence = "The quick brown fox jumps over the lazy dog";




// for (var i = 0;i<words.length; i++) {
//     // capitalize first letter
//     var word = words[i];
//     // var firstLetter = word.split()[0];
//     var letters = word.split();
//     var capitalFirstLetter = letters[0].toUpperCase();
//     var capitalizedWord = "";
//     capitalizedWord += capitalFirstLetter;
//     for (var j=1;j<letters.length;j++) {
//         capitalizedWord += letters[j];
//     }
//     words[i] = capitalizedWord;
// }
// sentence = words.join(" ");
// console.log(sentence);



