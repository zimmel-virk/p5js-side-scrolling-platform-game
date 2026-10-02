function preload() {
    soundFormats('mp3', 'wav');
    //load your sounds here
    jumpSound = loadSound('assets/jump.mp3');
    jumpSound.setVolume(1.5);
    collectableSound = loadSound('assets/collectable.mp3');
    collectableSound.setVolume(0.4);
    backgroundSound = loadSound('assets/bg.mp3');
    backgroundSound.setVolume(0.02);
    dieSound = loadSound('assets/dies.mp3');
    dieSound.setVolume(0.2);
    levelCompleteSound = loadSound('assets/levelcomplete.mp3');
    levelCompleteSound.setVolume(0.4);
}

function BackgroundSound() {
    backgroundSound.play()
    backgroundSound.loop()
}