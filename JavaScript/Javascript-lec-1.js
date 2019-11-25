// movies
var mermaid = 3;
var brotherBear = 5;
var hercules = 1;

var movies = (mermaid + brotherBear + hercules) * 3;

// money
var google = 400;
var amazon = 380;
var facebook = 350;

(facebook * 10) + (google * 6) + (amazon * 4);

// Enrollment
function canEnroll (capacity, conflict) {
    if (capacity < 100 && conflict == false)
        return true;
    else
        return false;
}


console.log(canEnroll(95, false))

// Apply
function canApply (items, expired, premium) {
    if (expired == false && (items >= 2 || premium == true)){
        return true;
    } else{
        return false;
    }
}
//
// var username ='codeup';
// var password = 'notastrongpasswordcodeup';
// var pwMinLength = password.length;
// var pwUsername = password.indexOf(username);
// console.log(pwUsername);
//
//
// var pwMaxLength = password.length;
// var pwSpace = password.charAt(0) || password.charAt(-1);


function loginSuccess (usernameInput, passwordInput) {
    var username = usernameInput;
    var password = passwordInput;
    var pwMinLength = password.length;
    var userMaxLength = username.length;
    var pwUsername = password.indexOf(username);

    if (pwMinLength >= 5 && pwUsername === -1 && userMaxLength <= 20 && password.charAt(0) !== " " && password.charAt(-1) !== " "){
        return true;
    }else{
        return false;
    }

}

var noWhiteSpace = username.trim() === username && password.trim() === password;