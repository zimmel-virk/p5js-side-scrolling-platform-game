//function for drawing canyon
function drawCanyon(t_canyon) {
    fill(59, 189, 185);
    rect(t_canyon.Pos_x, t_canyon.Pos_y, t_canyon.width, 144);
    fill(105, 70, 5);
    rect(t_canyon.Pos_x - 15, t_canyon.Pos_y, 15, 144);
    rect(t_canyon.Pos_x + t_canyon.width, t_canyon.Pos_y, 15, 144);
    fill(75, 44, 13);
    ellipse(t_canyon.Pos_x + 20, t_canyon.Pos_y + 130, 20, 20);
    ellipse(t_canyon.Pos_x + 10, t_canyon.Pos_y + 120, 20, 20);
    ellipse(t_canyon.Pos_x + 38, t_canyon.Pos_y + 132, 25, 20);
    ellipse(t_canyon.Pos_x + 60, t_canyon.Pos_y + 130, 20, 25);
    ellipse(t_canyon.Pos_x + 45, t_canyon.Pos_y + 116, 20, 20);
    ellipse(t_canyon.Pos_x, t_canyon.Pos_y + 133, 30, 20);
}

// function to check if character falls into the canyon
function checkCanyon(t_canyon) {
    if (gameChar_x > t_canyon.Pos_x - 15 && gameChar_x < (t_canyon.Pos_x + 15 + t_canyon.width) && gameChar_y == t_canyon.Pos_y) {
        isPlummeting = true;
        dieSound.play();
    }
    if (isPlummeting == true) {
        gameChar_y += 2;
        isLeft = false
        isRight = false
    }
}

//checking if player dies after falling into canyon
function checkPlayerDie() {
    if (gameChar_y > height) {
        if (lives != 0) {
            startGame();
            lives -= 1
        }
    }
}


