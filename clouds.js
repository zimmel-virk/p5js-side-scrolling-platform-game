//function for drawing clouds
function drawClouds() {
    for (var i = 0; i < clouds.length; i++) {
        fill(255, 255, 255);
        ellipse(clouds[i].Pos_x, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size);
        ellipse(clouds[i].Pos_x, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size);
        fill(192, 192, 192);
        ellipse(clouds[i].Pos_x + 60, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size + 20);
        fill(255);
        ellipse(clouds[i].Pos_x + 50, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size + 20);
        fill(192, 192, 192);
        ellipse(clouds[i].Pos_x + 98, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size);
        fill(255);
        ellipse(clouds[i].Pos_x + 90, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size);
        ellipse(clouds[i].Pos_x + 5, clouds[i].Pos_y + 25, clouds[i].size - 20, clouds[i].size - 30);
        ellipse(clouds[i].Pos_x, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size);
        fill(192, 192, 192);
        ellipse(clouds[i].Pos_x - 7, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size);
        fill(255);
        ellipse(clouds[i].Pos_x, clouds[i].Pos_y, clouds[i].size + 10, clouds[i].size);
    }
}