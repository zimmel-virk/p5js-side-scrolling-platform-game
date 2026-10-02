//function for drawing mountains
function drawMountains() {
    for (var i = 0; i < mountains.length; i++) {
        fill(110, 69, 66, 210);
        triangle(mountains[i].Pos_x + 50, mountains[i].Pos_y + 32,
            mountains[i].Pos_x + 280, mountains[i].Pos_y + 32,
            mountains[i].Pos_x + 170, mountains[i].Pos_y - 180);
        fill(110, 69, 66);
        triangle(mountains[i].Pos_x - 50, mountains[i].Pos_y + 32,
            mountains[i].Pos_x + 150, mountains[i].Pos_y + 32,
            mountains[i].Pos_x + 60, mountains[i].Pos_y - 130);
        fill(110, 69, 66, 230);
        triangle(mountains[i].Pos_x + 20, mountains[i].Pos_y + 32,
            mountains[i].Pos_x + 250, mountains[i].Pos_y + 32,
            mountains[i].Pos_x + 120, mountains[i].Pos_y - 120);
        //snow
        fill(255, 255, 255);
        beginShape()
        vertex(mountains[i].Pos_x + 170, mountains[i].Pos_y - 180);
        vertex(mountains[i].Pos_x + 153, mountains[i].Pos_y - 150);
        vertex(mountains[i].Pos_x + 160, mountains[i].Pos_y - 140);
        vertex(mountains[i].Pos_x + 170, mountains[i].Pos_y - 150);
        vertex(mountains[i].Pos_x + 175, mountains[i].Pos_y - 130);
        vertex(mountains[i].Pos_x + 186, mountains[i].Pos_y - 150);
        vertex(mountains[i].Pos_x + 170, mountains[i].Pos_y - 180);
        endShape()
        beginShape()
        vertex(mountains[i].Pos_x + 60, mountains[i].Pos_y - 130);
        vertex(mountains[i].Pos_x + 40, mountains[i].Pos_y - 100);
        vertex(mountains[i].Pos_x + 50, mountains[i].Pos_y - 90);
        vertex(mountains[i].Pos_x + 60, mountains[i].Pos_y - 100);
        vertex(mountains[i].Pos_x + 65, mountains[i].Pos_y - 80);
        vertex(mountains[i].Pos_x + 76, mountains[i].Pos_y - 100);
        vertex(mountains[i].Pos_x + 60, mountains[i].Pos_y - 130);
        endShape()
        beginShape()
        vertex(mountains[i].Pos_x + 120, mountains[i].Pos_y - 120);
        vertex(mountains[i].Pos_x + 100, mountains[i].Pos_y - 90);
        vertex(mountains[i].Pos_x + 105, mountains[i].Pos_y - 80);
        vertex(mountains[i].Pos_x + 115, mountains[i].Pos_y - 90);
        vertex(mountains[i].Pos_x + 125, mountains[i].Pos_y - 80);
        vertex(mountains[i].Pos_x + 135, mountains[i].Pos_y - 90);
        vertex(mountains[i].Pos_x + 149, mountains[i].Pos_y - 85);
        vertex(mountains[i].Pos_x + 120, mountains[i].Pos_y - 120);
        endShape()
    }
}