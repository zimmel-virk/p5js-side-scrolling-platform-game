//function for drawing collectable item
function drawCollectable(t_collectable) {
    // blue diamond
    stroke(8, 143, 143);
    fill(8, 143, 143, 100);
    triangle(t_collectable.Pos_x, t_collectable.Pos_y + 5, t_collectable.Pos_x + 3, t_collectable.Pos_y, t_collectable.Pos_x + 6, t_collectable.Pos_y + 5);
    triangle(t_collectable.Pos_x + 20, t_collectable.Pos_y + 5, t_collectable.Pos_x + 17, t_collectable.Pos_y, t_collectable.Pos_x + 14, t_collectable.Pos_y + 5);
    triangle(t_collectable.Pos_x + 6, t_collectable.Pos_y + 5, t_collectable.Pos_x + 10, t_collectable.Pos_y, t_collectable.Pos_x + 14, t_collectable.Pos_y + 5);
    triangle(t_collectable.Pos_x + 3, t_collectable.Pos_y, t_collectable.Pos_x + 6, t_collectable.Pos_y + 5, t_collectable.Pos_x + 10, t_collectable.Pos_y);
    triangle(t_collectable.Pos_x + 10, t_collectable.Pos_y, t_collectable.Pos_x + 14, t_collectable.Pos_y + 5, t_collectable.Pos_x + 17, t_collectable.Pos_y);
    triangle(t_collectable.Pos_x, t_collectable.Pos_y + 5, t_collectable.Pos_x + 10, t_collectable.Pos_y + 15, t_collectable.Pos_x + 6, t_collectable.Pos_y + 5);
    triangle(t_collectable.Pos_x + 20, t_collectable.Pos_y + 5, t_collectable.Pos_x + 11, t_collectable.Pos_y + 15, t_collectable.Pos_x + 14, t_collectable.Pos_y + 5);
    triangle(t_collectable.Pos_x + 6, t_collectable.Pos_y + 5, t_collectable.Pos_x + 14, t_collectable.Pos_y + 5, t_collectable.Pos_x + 11, t_collectable.Pos_y + 15);
    // orange diamond
    stroke(255, 152, 0);
    fill(255, 152, 0, 120);
    triangle(t_collectable.Pos_x - 25, t_collectable.Pos_y + 10, t_collectable.Pos_x - 22, t_collectable.Pos_y + 5, t_collectable.Pos_x - 19, t_collectable.Pos_y + 10);
    triangle(t_collectable.Pos_x - 5, t_collectable.Pos_y + 10, t_collectable.Pos_x - 8, t_collectable.Pos_y + 5, t_collectable.Pos_x - 11, t_collectable.Pos_y + 10);
    triangle(t_collectable.Pos_x - 19, t_collectable.Pos_y + 10, t_collectable.Pos_x - 15, t_collectable.Pos_y + 5, t_collectable.Pos_x - 11, t_collectable.Pos_y + 10);
    triangle(t_collectable.Pos_x - 22, t_collectable.Pos_y + 5, t_collectable.Pos_x - 19, t_collectable.Pos_y + 10, t_collectable.Pos_x - 15, t_collectable.Pos_y + 5);
    triangle(t_collectable.Pos_x - 15, t_collectable.Pos_y + 5, t_collectable.Pos_x - 11, t_collectable.Pos_y + 10, t_collectable.Pos_x - 8, t_collectable.Pos_y + 5);
    triangle(t_collectable.Pos_x - 25, t_collectable.Pos_y + 10, t_collectable.Pos_x - 15, t_collectable.Pos_y + 20, t_collectable.Pos_x - 19, t_collectable.Pos_y + 10);
    triangle(t_collectable.Pos_x - 5, t_collectable.Pos_y + 10, t_collectable.Pos_x - 14, t_collectable.Pos_y + 20, t_collectable.Pos_x - 11, t_collectable.Pos_y + 10);
    triangle(t_collectable.Pos_x - 19, t_collectable.Pos_y + 10, t_collectable.Pos_x - 11, t_collectable.Pos_y + 10, t_collectable.Pos_x - 14, t_collectable.Pos_y + 20);
    // purple diamond
    stroke(216, 27, 96);
    fill(236, 64, 122, 180);
    triangle(t_collectable.Pos_x - 10, t_collectable.Pos_y + 25, t_collectable.Pos_x - 7, t_collectable.Pos_y + 20, t_collectable.Pos_x - 4, t_collectable.Pos_y + 25);
    triangle(t_collectable.Pos_x + 10, t_collectable.Pos_y + 25, t_collectable.Pos_x + 7, t_collectable.Pos_y + 20, t_collectable.Pos_x + 4, t_collectable.Pos_y + 25);
    triangle(t_collectable.Pos_x - 4, t_collectable.Pos_y + 25, t_collectable.Pos_x, t_collectable.Pos_y + 20, t_collectable.Pos_x + 4, t_collectable.Pos_y + 25);
    triangle(t_collectable.Pos_x - 7, t_collectable.Pos_y + 20, t_collectable.Pos_x - 4, t_collectable.Pos_y + 25, t_collectable.Pos_x, t_collectable.Pos_y + 20);
    triangle(t_collectable.Pos_x, t_collectable.Pos_y + 20, t_collectable.Pos_x + 4, t_collectable.Pos_y + 25, t_collectable.Pos_x + 7, t_collectable.Pos_y + 20);
    triangle(t_collectable.Pos_x - 10, t_collectable.Pos_y + 25, t_collectable.Pos_x, t_collectable.Pos_y + 35, t_collectable.Pos_x - 4, t_collectable.Pos_y + 25);
    triangle(t_collectable.Pos_x + 10, t_collectable.Pos_y + 25, t_collectable.Pos_x + 1, t_collectable.Pos_y + 35, t_collectable.Pos_x + 4, t_collectable.Pos_y + 25);
    triangle(t_collectable.Pos_x - 4, t_collectable.Pos_y + 25, t_collectable.Pos_x + 4, t_collectable.Pos_y + 25, t_collectable.Pos_x + 1, t_collectable.Pos_y + 35);
    noStroke();
}

//function to check if collectable item is being collected
function checkCollectable(t_collectable) {
    if (dist(gameChar_x, gameChar_y, t_collectable.Pos_x, t_collectable.Pos_y) < 50) {
        t_collectable.isFound = true;
        game_score += 1;
        collectableSound.play();
    }
}

//adding multiple collectables
function addCollectable(t_collectable) {
    for (var i = 0; i < t_collectable.length; i++) {
        if (t_collectable[i].isFound == false) {
            checkCollectable(t_collectable[i])
            drawCollectable(t_collectable[i])
        }
        t_collectable[i].isFound = false
    }
}

