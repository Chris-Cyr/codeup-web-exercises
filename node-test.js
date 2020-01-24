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