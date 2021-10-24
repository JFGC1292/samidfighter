class Personaje {
    constructor(nombre, vida, ataque, frases) {
        this.nombre = nombre;
        this.frases = frases;
    }

    frase() {
        return this.frases[getRandomArbitrary(0, this.frases.length)];
    }
}

const samid = new Personaje("Samid", ["Usted se tiene que arrepentir de lo que dijo", "¿Usted cómo se llama?"]);
const viale = new Personaje("Viale", ["Usted avaló la bomba", "Pague sus impuestos"]);

const characterSelectionScreen = $("#characterSelectionScreen");
const battleScreen = $("#battleScreen");
const endGameScreen = $("#endGameScreen");

const vialeChosenBtn = $("#vialeChosenBtn");
const samidChosenBtn = $("#samidChosenBtn");

const computerLife = $("#computerLife");
const playerLife = $("#playerLife");

const computerName = $("#computerName");
const playerName = $("#playerName");

const computerImg = $("#computerImg");
const playerImg = $("#playerImg");

const battleLogParagraph = $("#battleLogParagraph");
const battleLog = $("#battleLog");

const endGameBtn = $("#endGameBtn");

const musicBtn = $("#musicBtn");
const audioDiv = $("#audioDiv");

const vialeImg = $("#vialeImg");
const samidImg = $("#samidImg");