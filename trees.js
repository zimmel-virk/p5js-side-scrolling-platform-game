//function for drawing trees
function drawtrees() {
    for (var i = 0; i < treePos_x.length; i++) {
        // draw tree
        fill(102, 51, 0);
        rect(treePos_x[i], treePos_y - 110, 40, 115);
        //branches
        fill(0, 153, 0);
        ellipse(treePos_x[i] + 20, treePos_y - 155, 140, 135);
        ellipse(treePos_x[i] + 75, treePos_y - 185, 110, 120);
        fill(53, 94, 59);
        ellipse(treePos_x[i] - 38, treePos_y - 165, 110, 120);
        ellipse(treePos_x[i] + 70, treePos_y - 115, 70, 60);
        ellipse(treePos_x[i] + 24, treePos_y - 245, 100, 70);
        fill(0, 153, 0);
        ellipse(treePos_x[i] - 30, treePos_y - 165, 110, 120);
        ellipse(treePos_x[i] + 15, treePos_y - 225, 120, 100);
        ellipse(treePos_x[i] + 65, treePos_y - 120, 70, 60);
        //fruits
        fill(255, 255, 0);
        ellipse(treePos_x[i], treePos_y - 215, 20, 24);
        fill(0, 255, 0);
        triangle(treePos_x[i] - 4, treePos_y - 223,
            treePos_x[i] + 5, treePos_y - 223,
            treePos_x[i], treePos_y - 235);
        triangle(treePos_x[i], treePos_y - 223,
            treePos_x[i] + 5, treePos_y - 223,
            treePos_x[i] + 7, treePos_y - 235);
        triangle(treePos_x[i] - 5, treePos_y - 223,
            treePos_x[i] - 1, treePos_y - 223,
            treePos_x[i] - 7, treePos_y - 235);
        fill(255, 255, 0);
        ellipse(treePos_x[i] + 100, treePos_y - 200, 20, 24);
        fill(0, 255, 0);
        triangle(treePos_x[i] + 96, treePos_y - 208,
            treePos_x[i] + 105, treePos_y - 208,
            treePos_x[i] + 100, treePos_y - 220);
        triangle(treePos_x[i] + 100, treePos_y - 208,
            treePos_x[i] + 105, treePos_y - 208,
            treePos_x[i] + 107, treePos_y - 220);
        triangle(treePos_x[i] + 95, treePos_y - 208,
            treePos_x[i] + 99, treePos_y - 208,
            treePos_x[i] + 93, treePos_y - 220);
        fill(255, 255, 0);
        ellipse(treePos_x[i] - 50, treePos_y - 145, 20, 24);
        fill(0, 255, 0);
        triangle(treePos_x[i] - 54, treePos_y - 153,
            treePos_x[i] - 45, treePos_y - 153,
            treePos_x[i] - 50, treePos_y - 165);
        triangle(treePos_x[i] - 50, treePos_y - 153,
            treePos_x[i] - 45, treePos_y - 153,
            treePos_x[i] - 43, treePos_y - 165);
        triangle(treePos_x[i] - 55, treePos_y - 153,
            treePos_x[i] - 51, treePos_y - 153,
            treePos_x[i] - 57, treePos_y - 165);
        fill(255, 255, 0);
        ellipse(treePos_x[i] + 50, treePos_y - 165, 20, 24);
        fill(0, 255, 0);
        triangle(treePos_x[i] + 46, treePos_y - 173,
            treePos_x[i] + 55, treePos_y - 173,
            treePos_x[i] + 50, treePos_y - 185);
        triangle(treePos_x[i] + 50, treePos_y - 173,
            treePos_x[i] + 55, treePos_y - 173,
            treePos_x[i] + 57, treePos_y - 185);
        triangle(treePos_x[i] + 45, treePos_y - 173,
            treePos_x[i] + 49, treePos_y - 173,
            treePos_x[i] + 43, treePos_y - 185);
        fill(255, 255, 0);
        ellipse(treePos_x[i] + 20, treePos_y - 115, 20, 24);
        fill(0, 255, 0);
        triangle(treePos_x[i] + 16, treePos_y - 123,
            treePos_x[i] + 25, treePos_y - 123,
            treePos_x[i] + 20, treePos_y - 135);
        triangle(treePos_x[i] + 20, treePos_y - 123,
            treePos_x[i] + 25, treePos_y - 123,
            treePos_x[i] + 27, treePos_y - 135);
        triangle(treePos_x[i] + 15, treePos_y - 123,
            treePos_x[i] + 19, treePos_y - 123,
            treePos_x[i] + 13, treePos_y - 135);
    }
}