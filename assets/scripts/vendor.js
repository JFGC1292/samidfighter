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

function amarillismo() {
    return Math.floor(Math.random() * 40) + 1;
}

function acusacion() {
    return Math.floor(Math.random() * 25) + 1;
}

function evasion() {
    return Math.floor(Math.random() * 25) + 1;
}

function trompada() {
    return Math.floor(Math.random() * 40) + 1;
}


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