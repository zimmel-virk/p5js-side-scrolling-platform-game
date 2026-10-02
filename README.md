# p5.js Side-Scrolling Platform Game

A browser-based 2D side-scrolling platform game developed with **JavaScript, p5.js and p5.sound**.

The game combines character movement, scrolling world navigation, platforms, canyons, moving enemies, collectable items, lives, scoring, a level-completion flagpole and event-driven sound effects.

All original gameplay code, audio assets, bundled p5 libraries and the original project commentary PDF are preserved unchanged.

## Game Overview

The player controls a character through a horizontally scrolling environment containing:

- platforms;
- canyons;
- moving enemies;
- collectable items;
- trees, mountains and clouds;
- a final flagpole marking level completion.

The camera follows the player's horizontal movement by translating the world around the character.

The game begins with:

```text
3 lives
0 score
```

The player loses lives by:

- falling into a canyon;
- falling below the playable area;
- colliding with an enemy.

Reaching the flagpole completes the level.

## Controls

The original keyboard controls are:

```text
A       move left
D       move right
W       jump
Space   restart after game over or level completion
```

Movement state is handled through `keyPressed()` and `keyReleased()` events.

## Character Movement

The character has different drawing states for:

- standing;
- walking left;
- walking right;
- jumping/falling left;
- jumping/falling right;
- falling/plummeting.

The movement logic uses state variables such as:

```text
isLeft
isRight
isFalling
isPlummeting
```

Horizontal movement changes the world position while vertical movement is managed through jump and fall logic.

## Side-Scrolling Camera

The camera follows the player's x-position using:

```javascript
cameraPos_x = width / 2 - gameChar_x;
```

The world is then rendered inside a translated p5 drawing context.

This allows the playable level to extend substantially beyond the width of the 1024 × 576 canvas.

## Platforms

The game creates several elevated platforms using `createPlatforms()`.

Each platform contains:

- x/y coordinates;
- platform length;
- its own drawing function;
- collision/contact detection.

Platform contact prevents the character from falling when positioned correctly on top of a platform.

The original level contains five platform definitions.

## Canyons

The game contains multiple ground gaps represented by canyon objects.

Each canyon has:

```text
x-position
y-position
width
```

Collision logic checks whether the character has entered a canyon and activates the plummeting/death sequence.

The original level contains five canyons.

## Enemies

Enemies are created with the `Enemy` constructor.

Each enemy stores:

- starting x-position;
- y-position;
- movement range;
- current horizontal position;
- movement direction.

Enemies patrol horizontally within their assigned ranges.

Contact is detected using distance between the player and enemy. A collision plays the death sound, removes one life and restarts the game state.

The original level creates seven enemy instances.

## Collectable Items

The level includes 12 collectable objects.

Each item stores:

```text
x-position
y-position
size
isFound
```

When the player moves within the collection distance:

1. the item is marked as found;
2. the score increases by one;
3. the collectable sound effect is played.

The collectables are drawn as custom geometric objects rather than image sprites.

## Lives and Scoring

The game starts with three lives.

The interface displays:

- current score;
- remaining lives.

Lives are represented graphically by small circles.

The score increases when collectable items are collected.

## Flagpole and Level Completion

The level-completion flagpole is positioned at:

```text
x = 2690
```

When the character comes close enough to the flagpole:

```javascript
flagpole.isReached = true;
```

The flag is raised and the game displays:

```text
Level complete. Press space to continue.
```

A dedicated completion sound is also played.

## Game Over

When the number of lives falls below one, the application displays:

```text
Game over. Press space to continue.
```

The game pauses its active play state until the user presses the space bar.

## Environment Graphics

The game world is drawn entirely through p5.js graphics.

It includes custom implementations for:

- gradient sky;
- ground;
- clouds;
- mountains;
- snow details;
- trees;
- fruit details;
- canyons;
- platforms;
- collectables;
- enemies;
- player character;
- flagpole.

No external image sprites are required for the main visual scene.

## Audio

The project includes five MP3 sound assets:

```text
assets/bg.mp3
assets/collectable.mp3
assets/dies.mp3
assets/jump.mp3
assets/levelcomplete.mp3
```

These provide:

- looping background music;
- jump feedback;
- collectable feedback;
- death feedback;
- level-completion feedback.

Audio playback is implemented with `p5.sound`.

## Source Structure

The project separates major game responsibilities into individual JavaScript files:

```text
p5js-side-scrolling-platform-game/
├── index.html
├── sketch.js
├── character.js
├── enemy.js
├── event_handling.js
├── canyon.js
├── collectable item.js
├── flagpole.js
├── platforms.js
├── clouds.js
├── mountains.js
├── trees.js
├── sounds.js
├── p5.min.js
├── p5.sound.min.js
├── commentry.pdf
└── assets/
    ├── bg.mp3
    ├── collectable.mp3
    ├── dies.mp3
    ├── jump.mp3
    └── levelcomplete.mp3
```

## Main Files

### `sketch.js`

Contains the main game state, initialisation, level configuration, draw loop, camera handling, scoring, lives, enemies, platform interaction and end-state logic.

### `character.js`

Contains the custom p5 drawing functions for the different player movement/animation states.

### `enemy.js`

Defines the moving `Enemy` constructor, patrol logic, rendering and player-contact detection.

### `event_handling.js`

Handles keyboard input for left/right movement, jumping and restarting.

### `platforms.js`

Creates platform objects and checks player/platform contact.

### `canyon.js`

Draws canyons and manages plummeting/player-death behaviour.

### `collectable item.js`

Draws collectable items, checks collection distance and updates score.

### `flagpole.js`

Renders the flagpole and detects level completion.

### `sounds.js`

Loads and configures the original MP3 sound effects.

## Technologies

- JavaScript
- p5.js
- p5.sound
- HTML5 Canvas
- event-driven programming
- collision detection
- game-state management
- side-scrolling camera logic
- procedural drawing
- browser audio

## Running the Game

The repository includes the p5.js and p5.sound libraries locally.

From the project directory, start a local web server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

in a browser.

Using a local server is recommended for reliable browser audio loading.

## Original Project Notes

The original project includes:

```text
commentry.pdf
```

This file is preserved exactly as supplied.

The source also contains a few original naming inconsistencies, such as the restart handler referring to `gameScore` while the main score variable is named `game_score`. These are documented rather than silently corrected because the original submitted implementation is being preserved.

## Original-File Preservation

All original JavaScript, HTML, bundled p5 libraries, MP3 assets and the original PDF were copied byte-for-byte from the supplied project.

No original implementation file was rewritten or refactored.

Only repository-support files were added:

```text
README.md
.gitignore
ORIGINAL_FILES_VERIFIED.txt
```

Excluded only:

```text
.DS_Store
.idea/
```

## Author

**Zimmel Javed Virk**  
BSc Computer Science — University of London
