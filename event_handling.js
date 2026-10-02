function keyPressed() {
    // if statements to control the animation of the character when keys are pressed.
    if (isPlummeting == false) {
        //key 'a'
        if (keyCode == 65) {
            isLeft = true;
        } else if (keyCode == 68) {
        //key 'd'
            isRight = true;
        }
        if (keyCode == 87) {
            if (isFalling == false && !isPlummeting) {
                gameChar_y -= 150;
                jumpSound.play();
                isFalling = true;
            } else {
                isFalling = false;
            }
        }
    }
    if ((lives < 1 || flagpole.isReached) && keyCode == 32) {
        flagpole.isReached = false;
        gameChar_x = width / 2;
        lives = 3;
        gameScore = 0;
        addCollectable(collectables)
        gameEnd = false;
    }
}

function keyReleased() {
    // if statements to control the animation of the character when keys are released.
    if (keyCode == 65) {
        //key 'a'
        isLeft = false;
    }
    if (keyCode == 68) {
       //key 'd'
        isRight = false;

    }
}

