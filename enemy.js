//function for creating enemy
function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentX = x;
    this.inc = 1;
    this.update = function () {
        this.currentX += this.inc;
        if (this.currentX >= this.x + this.range) {
            this.inc = -1;
        } else if (this.currentX < this.x) {
            this.inc = 1;
        }
    }
    this.draw = function () {
        this.update();
        //thorns
        fill(255, 30, 0);
        triangle(this.currentX - 45, this.y - 62, this.currentX - 11, this.y - 52, this.currentX - 18, this.y - 42);
        triangle(this.currentX + 33, this.y - 75, this.currentX + 5, this.y - 55, this.currentX + 14, this.y - 45);
        triangle(this.currentX - 35, this.y + 2, this.currentX - 5, this.y - 21, this.currentX - 14, this.y - 30);
        triangle(this.currentX + 35, this.y + 2, this.currentX + 5, this.y - 21, this.currentX + 14, this.y - 30);
        triangle(this.currentX - 3, this.y - 65, this.currentX - 8, this.y - 52, this.currentX + 9, this.y - 42);
        triangle(this.currentX - 1, this.y - 4, this.currentX - 5, this.y - 17, this.currentX + 5, this.y - 17);
        triangle(this.currentX - 27, this.y - 37, this.currentX - 12, this.y - 38, this.currentX - 18, this.y - 30);
        triangle(this.currentX + 35, this.y - 37, this.currentX + 12, this.y - 38, this.currentX + 18, this.y - 30);
        //body
        fill(0, 70, 250);
        ellipse(this.currentX, this.y - 35, 40, 40);
        //eyes
        fill(255, 255, 255, 150);
        ellipse(this.currentX - 10, this.y - 38, 15, 15);
        ellipse(this.currentX + 10, this.y - 38, 15, 15);
        fill(255, 255, 255);
        ellipse(this.currentX - 8, this.y - 38, 13, 13);
        ellipse(this.currentX + 8, this.y - 38, 13, 13);
        fill(0);
        ellipse(this.currentX - 7, this.y - 38, 11, 11);
        ellipse(this.currentX + 7, this.y - 38, 11, 11);
        fill(255);
        ellipse(this.currentX - 6, this.y - 40, 4, 4);
        ellipse(this.currentX + 6, this.y - 40, 4, 4);
    }
    this.checkContact = function (gameChar_x, gameChar_y) {
        var d = dist(gameChar_x, gameChar_y, this.currentX, this.y)
        if (d < 50) {
            dieSound.play();
            return true;
        }
        return false;
    }
}