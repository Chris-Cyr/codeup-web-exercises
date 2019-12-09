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
