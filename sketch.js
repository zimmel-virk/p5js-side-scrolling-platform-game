/*
Game Project Final
*/
//variables for game character
var gameChar_x;
var gameChar_y;
//variables for background
var floorPos_y;
var background_Color1
var background_Color2
//variables for movement of character
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
//jump
var isJumping;
var jumpHeight;
//variable for canyon
var canyons;
//variables for tree position
var treePos_x;
var treePos_y;
//variable for cloud and mountains
var clouds;
var mountains;
//variable for movement of camera
var cameraPos_x;
//variable for collectable
var collectables;
//variable for gameScore and lives
var game_score;
var lives;
//variable for flagpole
var flagpole;
//variable for sound
var jumpSound;
var collectableSound;
var backgroundSound;
var dieSound;
var levelCompleteSound;
//variable for platforms
var platforms;
//variable for gameEnd
var gameEnd = false;

function setup() {
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    //number of lives of character
    lives = 3;
    startGame()
    BackgroundSound();
}

//function where all objects and arrays are initialized
function startGame() {
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    isJumping = false;
    jumpHeight = 200;
    treePos_x = [-1950, -1350, -600, -130, 340, 720, 1150, 1550, 2300]
    treePos_y = floorPos_y;
    clouds = [
        {Pos_x: -350, Pos_y: 70, size: 80},
        {Pos_x: -600, Pos_y: 130, size: 80},
        {Pos_x: -850, Pos_y: 80, size: 80},
        {Pos_x: -1100, Pos_y: 110, size: 80},
        {Pos_x: -1350, Pos_y: 70, size: 80},
        {Pos_x: -1600, Pos_y: 130, size: 80},
        {Pos_x: -1850, Pos_y: 80, size: 80},
        {Pos_x: -2100, Pos_y: 110, size: 80},
        {Pos_x: -100, Pos_y: 110, size: 80},
        {Pos_x: 150, Pos_y: 80, size: 80},
        {Pos_x: 400, Pos_y: 110, size: 80},
        {Pos_x: 650, Pos_y: 70, size: 80},
        {Pos_x: 900, Pos_y: 130, size: 80},
        {Pos_x: 1150, Pos_y: 80, size: 80},
        {Pos_x: 1400, Pos_y: 110, size: 80},
        {Pos_x: 1650, Pos_y: 70, size: 80},
        {Pos_x: 1900, Pos_y: 130, size: 80},
        {Pos_x: 2150, Pos_y: 110, size: 80},
        {Pos_x: 2400, Pos_y: 80, size: 80},
        {Pos_x: 2650, Pos_y: 130, size: 80},
        {Pos_x: 2900, Pos_y: 110, size: 80},
    ]
    mountains = [
        {Pos_x: -1550, Pos_y: 400},
        {Pos_x: -1050, Pos_y: 400},
        {Pos_x: -550, Pos_y: 400},
        {Pos_x: -140, Pos_y: 400},
        {Pos_x: 450, Pos_y: 400},
        {Pos_x: 900, Pos_y: 400},
        {Pos_x: 1380, Pos_y: 400},
        {Pos_x: 1880, Pos_y: 400},
        {Pos_x: 2380, Pos_y: 400},
    ]
    cameraPos_x = 0;
    collectables = [
        {Pos_x: -950, Pos_y: floorPos_y - 140, size: 50, isFound: false},
        {Pos_x: 60, Pos_y: floorPos_y - 30, size: 50, isFound: false},
        {Pos_x: -650, Pos_y: floorPos_y - 140, size: 50, isFound: false},
        {Pos_x: 880, Pos_y: floorPos_y - 30, size: 50, isFound: false},
        {Pos_x: 1720, Pos_y: floorPos_y - 30, size: 50, isFound: false},
        {Pos_x: -140, Pos_y: floorPos_y - 140, size: 50, isFound: false},
        {Pos_x: -1250, Pos_y: floorPos_y - 90, size: 50, isFound: false},
        {Pos_x: 1300, Pos_y: floorPos_y - 140, size: 50, isFound: false},
        {Pos_x: 590, Pos_y: floorPos_y - 140, size: 50, isFound: false},
        {Pos_x: 2050, Pos_y: floorPos_y - 140, size: 50, isFound: false},
        {Pos_x: 200, Pos_y: floorPos_y - 120, size: 50, isFound: false},
        {Pos_x: 2400, Pos_y: floorPos_y - 150, size: 50, isFound: false},
    ]
    canyons = [
        {Pos_x: 160, Pos_y: floorPos_y, width: 90},
        {Pos_x: -480, Pos_y: floorPos_y, width: 90},
        {Pos_x: 900, Pos_y: floorPos_y, width: 90},
        {Pos_x: 1740, Pos_y: floorPos_y, width: 90},
        {Pos_x: -1230, Pos_y: floorPos_y, width: 90},
    ]
    platforms = [];
    platforms.push(createPlatforms(-180, floorPos_y - 100, 300));
    platforms.push(createPlatforms(500, floorPos_y - 100, 200));
    platforms.push(createPlatforms(-750, floorPos_y - 100, 200));
    platforms.push(createPlatforms(1200, floorPos_y - 100, 150));
    platforms.push(createPlatforms(1880, floorPos_y - 100, 350));
    game_score = 0;
    flagpole = {isReached: false, Pos_x: 2690};
    Enemies = [];
    Enemies.push(new Enemy(600, floorPos_y + 10, 80));
    Enemies.push(new Enemy(-750, floorPos_y + 10, 80));
    Enemies.push(new Enemy(1200, floorPos_y + 10, 80));
    Enemies.push(new Enemy(-30, floorPos_y - 100, 80));
    Enemies.push(new Enemy(1920, floorPos_y + 10, 80));
    Enemies.push(new Enemy(2080, floorPos_y + 10, 80));
    Enemies.push(new Enemy(-1700, floorPos_y + 10, 110));
}


function draw() {
    if (gameEnd == false) {
        ///////////DRAWING CODE//////////
        //code for moving the camera
        cameraPos_x = width / 2 - gameChar_x;
        //code for the sky
        background_Color1 = color(21, 161, 201);
        background_Color2 = color(255);
        for (let y = 0; y < height; y++) {
            n = map(y, 0, height, 0, 1);
            let newc = lerpColor(background_Color1, background_Color2, n);
            stroke(newc);
            line(0, y, width, y);
        }
        //set background volume
        backgroundSound.setVolume(0.05);
        //code for ground
        noStroke();
        fill(0, 155, 0);
        rect(0, floorPos_y, width, height - floorPos_y);
        //push & translate function(camera)
        push();
        translate(cameraPos_x, 0);
        //code for drawing clouds
        drawClouds();
        //code for drawing mountains
        drawMountains();
        //code for drawing trees
        drawtrees();
        //for loop for drawing the canyon
        for (var i = 0; i < canyons.length; i++) {
            drawCanyon(canyons[i])
            checkCanyon(canyons[i])
        }
        //for loop for platforms
        for (var i = 0; i < platforms.length; i++) {
            platforms[i].draw();
        }
        // for loop for collectable item
        for (var i = 0; i < collectables.length; i++) {
            if (collectables[i].isFound == false) {
                checkCollectable(collectables[i])
                drawCollectable(collectables[i])
            }
        }
        //code for the game character
        if (isLeft && isFalling) {
            character_movement_left_falling();
        } else if (isRight && isFalling) {
            character_movement_right_falling();
        } else if (isLeft) {
            character_movement_left();
        } else if (isRight) {
            character_movement_right()
        } else if (isFalling || isPlummeting) {
            character_movement_falling_plummeting();
        } else {
            character_standing_front();
        }
        //code for writing game score
        fill(255);
        noStroke();
        textSize(15);
        text("Game Score " + game_score, gameChar_x - 500, 20);
        //code to check flag pole functionality
        if (flagpole.isReached == false) {
            checkFlagpole();
        }
        //code for the flag pole
        renderFlagpole();
        // code for lives of the character
        fill(255);
        noStroke();
        textSize(15);
        text("Lives: ", gameChar_x - 500, 40);
        for (let i = 1; i <= lives; i++) {
            fill(156, 39, 176);
            ellipse(gameChar_x - 470 + i * 20, 37, 15, 15);
        }
        //code for checking character die
        checkPlayerDie();
        //for loop for enemies
        for (var i = 0; i < Enemies.length; i++) {
            Enemies[i].draw();
            var isContact = Enemies[i].checkContact(gameChar_x, gameChar_y);
            if (isContact) {
                if (lives > 0) {
                    lives -= 1;
                    startGame();
                    break;
                }
            }
        }
        //pop function(camera)
        pop()
        // First conditional statement for "Game over"
        if (lives < 1) {
            fill(0);
            noStroke();
            textSize(30);
            text("Game over. Press space to continue.", width / 4, height / 2);
            backgroundSound.setVolume(0);
            dieSound.play();
            gameEnd = true;
            return;
        }
        // Second conditional statement for "Level complete"
        if (flagpole.isReached) {
            fill(0);
            noStroke();
            textSize(30);
            text("Level complete. Press space to continue.", width / 4, height / 2);
            levelCompleteSound.play();
            gameEnd = true;
            gameEnd = true;
            return;
        }
        ///////////INTERACTION CODE//////////
        //Put conditional statements to move the game character below here
        if (isLeft == true) {
            gameChar_x -= 5;
        }
        if (isRight == true) {
            gameChar_x += 5;
        }
        if (gameChar_y < floorPos_y) {
            // Check for platform contact
            var isContact = false;
            for (var i = 0; i < platforms.length; i++) {
                if (platforms[i].checkContact(gameChar_x, gameChar_y) == true) {
                    isContact = true;
                    isFalling = false;
                    break;
                }
            }
            if (isContact == false) {
                // Not in contact with any platform, falling
                // isJumping = false; // Reset double jump state
                gameChar_y += 3;
                isFalling = true;
            }
        } else {
            // Reset jump state if on the ground
            // isJumping = false;
            isFalling = false
        }
    }
}















