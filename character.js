//functions for character movement
//jumping-left code
function character_movement_left_falling() {
    //body and hands
    fill(246, 183, 225);
    ellipse(gameChar_x, gameChar_y - 27, 40, 40);
    ellipse(gameChar_x + 10, gameChar_y - 27, 30, 20);
    ellipse(gameChar_x - 15, gameChar_y - 37, 15, 15);
    // blush
    fill(255, 127, 183);
    ellipse(gameChar_x - 16, gameChar_y - 27, 7, 3);
    ellipse(gameChar_x + 7, gameChar_y - 27, 7, 3);
    //eyes
    fill(53, 78, 239);
    ellipse(gameChar_x - 11, gameChar_y - 34, 5, 9);
    ellipse(gameChar_x + 4, gameChar_y - 34, 5, 9);
    fill(255);
    ellipse(gameChar_x - 11, gameChar_y - 35, 3, 6);
    ellipse(gameChar_x + 4, gameChar_y - 35, 3, 6);
    //mouth
    fill(229, 70, 139);
    ellipse(gameChar_x - 4, gameChar_y - 22, 4, 7);
    //feet
    fill(255, 82, 198);
    ellipse(gameChar_x - 20, gameChar_y - 17, 16, 23);
    ellipse(gameChar_x, gameChar_y - 7, 16, 23);
}

//jumping-right code
function character_movement_right_falling() {
//body and hands
    fill(246, 183, 225);
    ellipse(gameChar_x, gameChar_y - 27, 40, 40);
    ellipse(gameChar_x - 10, gameChar_y - 27, 30, 20);
    ellipse(gameChar_x + 15, gameChar_y - 37, 15, 15);
// blush
    fill(255, 127, 183);
    ellipse(gameChar_x - 7, gameChar_y - 27, 7, 3);
    ellipse(gameChar_x + 16, gameChar_y - 27, 7, 3);
//eyes
    fill(53, 78, 239);
    ellipse(gameChar_x - 4, gameChar_y - 34, 5, 9);
    ellipse(gameChar_x + 11, gameChar_y - 34, 5, 9);
    fill(255);
    ellipse(gameChar_x - 4, gameChar_y - 35, 3, 6);
    ellipse(gameChar_x + 11, gameChar_y - 35, 3, 6);
//mouth
    fill(229, 70, 139);
    ellipse(gameChar_x + 4, gameChar_y - 22, 4, 7);
//feet
    fill(255, 82, 198);
    ellipse(gameChar_x, gameChar_y - 7, 16, 23);
    ellipse(gameChar_x + 20, gameChar_y - 17, 16, 23);
}

//walking left code
function character_movement_left() {
    //body and hands
    fill(246, 183, 225);
    ellipse(gameChar_x, gameChar_y - 27, 40, 40);
    ellipse(gameChar_x + 10, gameChar_y - 27, 30, 20);
    // blush
    fill(255, 127, 183);
    ellipse(gameChar_x - 16, gameChar_y - 27, 7, 3);
    ellipse(gameChar_x + 7, gameChar_y - 27, 7, 3);
    //eyes
    fill(53, 78, 239);
    ellipse(gameChar_x - 11, gameChar_y - 34, 5, 9);
    ellipse(gameChar_x + 4, gameChar_y - 34, 5, 9);
    fill(255);
    ellipse(gameChar_x - 11, gameChar_y - 35, 3, 6);
    ellipse(gameChar_x + 4, gameChar_y - 35, 3, 6);
    //mouth
    fill(229, 70, 139);
    triangle(gameChar_x - 10, gameChar_y - 22, gameChar_x + 1, gameChar_y - 22, gameChar_x - 5, gameChar_y - 17);
    //feet
    fill(255, 82, 198);
    ellipse(gameChar_x - 20, gameChar_y - 17, 16, 23);
    ellipse(gameChar_x + 4, gameChar_y - 7, 23, 16);
}

//walking right code
function character_movement_right() {
    //body and hands
    fill(246, 183, 225);
    ellipse(gameChar_x, gameChar_y - 27, 40, 40);
    ellipse(gameChar_x - 10, gameChar_y - 27, 30, 20);
    // blush
    fill(255, 127, 183);
    ellipse(gameChar_x - 7, gameChar_y - 27, 7, 3);
    ellipse(gameChar_x + 16, gameChar_y - 27, 7, 3);
    //eyes
    fill(53, 78, 239);
    ellipse(gameChar_x - 4, gameChar_y - 34, 5, 9);
    ellipse(gameChar_x + 11, gameChar_y - 34, 5, 9);
    fill(255);
    ellipse(gameChar_x - 4, gameChar_y - 35, 3, 6);
    ellipse(gameChar_x + 11, gameChar_y - 35, 3, 6);
    //mouth
    fill(229, 70, 139);
    triangle(gameChar_x, gameChar_y - 22, gameChar_x + 10, gameChar_y - 22, gameChar_x + 5, gameChar_y - 17);
    //feet
    fill(255, 82, 198);
    ellipse(gameChar_x - 4, gameChar_y - 7, 23, 16);
    ellipse(gameChar_x + 20, gameChar_y - 17, 16, 23);
}

//jump facing forwards code
function character_movement_falling_plummeting() {
    //feet
    fill(255, 82, 198);
    ellipse(gameChar_x - 9, gameChar_y - 7, 16, 23);
    ellipse(gameChar_x + 9, gameChar_y - 7, 16, 23);
    //body and hands
    fill(246, 183, 225);
    ellipse(gameChar_x, gameChar_y - 27, 40, 40);
    ellipse(gameChar_x - 12, gameChar_y - 27, 25, 15);
    ellipse(gameChar_x + 12, gameChar_y - 27, 25, 15);
    // blush
    fill(255, 127, 183);
    ellipse(gameChar_x - 12, gameChar_y - 27, 7, 3);
    ellipse(gameChar_x + 12, gameChar_y - 27, 7, 3);
    //eyes
    fill(53, 78, 239);
    ellipse(gameChar_x - 7, gameChar_y - 34, 5, 9);
    ellipse(gameChar_x + 7, gameChar_y - 34, 5, 9);
    fill(255);
    ellipse(gameChar_x - 7, gameChar_y - 35, 3, 6);
    ellipse(gameChar_x + 7, gameChar_y - 35, 3, 6);
    //mouth
    fill(229, 70, 139);
    ellipse(gameChar_x, gameChar_y - 20, 12, 8);
}

//standing front facing code
function character_standing_front() {
    //feet
    fill(255, 82, 198);
    ellipse(gameChar_x - 12, gameChar_y - 7, 23, 16);
    ellipse(gameChar_x + 12, gameChar_y - 7, 23, 16);
    //body and hands
    fill(246, 183, 225);
    ellipse(gameChar_x, gameChar_y - 27, 40, 40);
    ellipse(gameChar_x - 10, gameChar_y - 27, 30, 15);
    ellipse(gameChar_x + 10, gameChar_y - 27, 30, 15);
    // blush
    fill(255, 127, 183);
    ellipse(gameChar_x - 12, gameChar_y - 27, 7, 3);
    ellipse(gameChar_x + 12, gameChar_y - 27, 7, 3);
    //eyes
    fill(53, 78, 239);
    ellipse(gameChar_x - 7, gameChar_y - 34, 5, 9);
    ellipse(gameChar_x + 7, gameChar_y - 34, 5, 9);
    fill(255);
    ellipse(gameChar_x - 7, gameChar_y - 35, 3, 6);
    ellipse(gameChar_x + 7, gameChar_y - 35, 3, 6);
    //mouth
    fill(229, 70, 139);
    triangle(gameChar_x - 4, gameChar_y - 22, gameChar_x + 4, gameChar_y - 22, gameChar_x, gameChar_y - 17);
}
