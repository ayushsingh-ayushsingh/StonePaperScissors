function stone() {
    returnOutput(1);
}
function paper() {
    returnOutput(2);
}
function scissors() {
    returnOutput(3);
}
function returnOutput(input) {
    var output = Math.floor(Math.random()*3) + 1;
    switch (output) {
        case 1:
            document.getElementById("out").innerHTML = "👍";
            break;
        case 2:
            document.getElementById("out").innerHTML = "✋";
            break;
        case 3:
            document.getElementById("out").innerHTML = "✌️";
            break;
        default:
            break;
    }
    if(output == 1 && input == 2) {
        increaseCounter();
    }
    else if(output == 2 && input == 3) {
        increaseCounter();
    }
    else if(output == 3 && input == 1) {
        increaseCounter();
    }
    else if(output == input) {
        document.getElementById("draw").innerHTML = "DRAW";
    }
    else{
        increaseComputerCounter();
    }
}
function increaseCounter() {
    document.getElementById("draw").innerHTML = "GOOD!";
    document.getElementById("ctr1").innerHTML = ++counter;
    checkCounter();
}
function increaseComputerCounter() {
    document.getElementById("draw").innerHTML = "OH! NO";
    document.getElementById("ctr2").innerHTML = ++computerCounter;
    checkCounter();
}
var counter = 0;
var computerCounter = 0;
function checkCounter() {
    if(counter == 10) {
        document.getElementById("out").style.fontSize = "36px";
        document.getElementById("out").innerHTML = "You Won";
    }
    else if(computerCounter == 10) {
        document.getElementById("out").style.fontSize = "36px";
        document.getElementById("out").innerHTML = "Bot Won";
    }
}