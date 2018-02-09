function Clown(name, shoeSize, isScary) {
    this.name = name;
    this.shoeSize = shoeSize;
    this.isScary = isScary;
}

class Clown {
    constructor(name, shoeSize, isScary) {
        this.name = name;
        this.showSize = shoeSize;
        this.isScary = isScary;
    }
}


function HangmanGame(word, guessesUntilLose) {
    this.word = word;
    this.guessesUntilLose = guessesUntilLose;
}

HangmanGame.prototype.wrongGuess = function() {
    this.guessesUntilLose--;
}

class HangmanGame {
    constructor(word, guessesUntilLose) {
        this.word = word;
        this.guessesUntilLose = guessesUntilLose;
    }
    wrongGuess() {
        this.guessesUntilLose--;
    }
}



// Media constructor
function Media(title, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false;
}

Media.prototype.play = function() {
    this.isPlaying = true;
}

Media.prototype.stop = function() {
    this.isPlaying = false;
}


// Song constructor
function Song(title, duration, artist) {
    Media.call(title, duration);
    this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);
Song.prototype.constructor = Song;

//**********************************************************

class Media {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
        this.isPlaying = false;
    }
    play() {
        this.isPlaying = true;
    }
    stop() {
        this.isPlaying = false;
    }
}

class Song extends Media {
    constructor(title, duration, artist) {
        super(titel, duration);
        this.artist = artist;
    }
}
