//function for movement of flagpole once it is reached
function renderFlagpole() {
    push();
    strokeWeight(5);
    stroke(200);
    line(flagpole.Pos_x, floorPos_y, flagpole.Pos_x, floorPos_y - 150);
    noStroke();
    fill(255, 0, 255);
    if (flagpole.isReached) {
        rect(flagpole.Pos_x, floorPos_y - 151, 50, 60);
    } else {
        rect(flagpole.Pos_x, floorPos_y - 58, 50, 60);
    }
    pop();
}

//function to check if flagpole moves on reaching it
function checkFlagpole() {
    var d = abs(gameChar_x - flagpole.Pos_x);
    if (d < 15) {
        flagpole.isReached = true;
    }
}