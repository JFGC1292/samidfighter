let selectedChar;
let computerChar;
let history;

if (!window.localStorage.getItem("history")) {
    history = {
        samid: 0,
        viale: 0,
    };
} else {
    history = JSON.parse(window.localStorage.getItem("history"));
}
window.localStorage.setItem("history", JSON.stringify(history));

vialeChosenBtn.hover(() => {
    $("#vialeImg").addClass("buttonOnHover");
}, () => {
    $("#vialeImg").removeClass("buttonOnHover");
})

vialeChosenBtn.click(() => {
    selectedChar = "viale";
    computerChar = "samid";
    buildBattleScreen();
});

samidChosenBtn.hover(() => {
    $("#samidImg").addClass("buttonOnHover");
}, () => {
    $("#samidImg").removeClass("buttonOnHover");
})

samidChosenBtn.click(() => {
    selectedChar = "samid";
    computerChar = "viale";
    buildBattleScreen();
});

function getComputerLife() {
    return computerLife.prop("value");
}

function getPlayerLife() {
    return playerLife.prop("value");
}

function toggleButtons(display) {
    $("button").each((index, element) => {
        if (element.id !== "endGameBtn") {
            element.style.display = display;
        }
    })
}

function resetButtons() {
    $("button").each((index, element) => {
        if (element.id === "amarillismoBtn" || element.id === "acusacionBtn" || element.id === "evasionBtn" || element.id === "trompadaBtn") {
            element.remove();
        };
    })
}

function endGame() {
    let actualPlayerLife = getPlayerLife();
    let actualComputerLife = getComputerLife();
    let winner;

    if (actualComputerLife <= 0 || actualPlayerLife <= 0) {
        battleScreen.hide()
        endGameScreen.css("display", "flex");
        if (actualComputerLife <= 0) {
            winner = selectedChar;
        } else {
            winner = computerChar;
        }
        $("#endGameScreen h1").html(`¡El ganador es ${winner[0].toUpperCase() + winner.slice(1)}!`);
        $("#endGameScreen img").attr("src", `./resources/${winner}.jpg`)
        if (winner === "viale") {
            history.viale++;
        } else {
            history.samid++;
        }
        window.localStorage.setItem("history", JSON.stringify(history));
        $("#samidHistory").html(`Samid ganó ${history.samid} veces`);
        $("#vialeHistory").html(`Viale ganó ${history.viale} veces`);
    }
}

function computerAttack() {
    if (getComputerLife() > 0) {
        let randomNumber = Math.floor(Math.random() * 2);
        if (selectedChar === "viale" && randomNumber === 0) {
            playerLife.attr("value", getPlayerLife() - evasion());
            battleLogParagraph.html("Samid utilizó evasión. AFIP pierde un turno.")
        } else if (selectedChar === "viale" && randomNumber === 1) {
            playerLife.attr("value", getPlayerLife() - trompada());
            battleLogParagraph.html("Samid utilizó Trompada. ¡Es muy eficaz!")
        } else if (selectedChar === "samid" && randomNumber === 0) {
            playerLife.attr("value", getPlayerLife() - amarillismo());
            battleLogParagraph.html("Viale utilizó Amarillismo y distrajo al público con noticias tercermundistas. ¡Es muy eficaz!")
        } else {
            playerLife.attr("value", getPlayerLife() - acusacion());
            battleLogParagraph.html("Viale utilizó Acusación y acusó a Samid de avalar la bomba. ¡Vaya declaración!")
        }
        setTimeout(() => {
            battleLogParagraph.html("Selecciona tu ataque");
            toggleButtons("block");
            endGame();
        }, 3500);
    }
}

buildBattleScreen = () => {
    characterSelectionScreen.hide();
    battleScreen.show();

    battleLogParagraph.html("Selecciona tu ataque:");

    if (selectedChar === "viale") {
        playerName.html(viale.nombre);
        playerImg.attr("src", "./resources/viale.jpg");
        computerName.html(samid.nombre);
        computerImg.attr("src", "./resources/samid.jpg");
        battleLog.append("<button id='amarillismoBtn' class='primaryButton'>Amarillismo</button>")
        battleLog.append("<button id='acusacionBtn' class='primaryButton'>Acusación grave</button>")
    } else {
        playerName.html(samid.nombre);
        playerImg.attr("src", "./resources/samid.jpg");
        computerName.html(viale.nombre);
        computerImg.attr("src", "./resources/viale.jpg");
        battleLog.append("<button id='evasionBtn' class='primaryButton'>Evasión</button>")
        battleLog.append("<button id='trompadaBtn' class='primaryButton'>Trompada</button>")
    }

    $("#amarillismoBtn").click((e) => {
        toggleButtons("none");
        computerLife.attr("value", getComputerLife() - amarillismo());
        battleLogParagraph.html("Viale utilizó Amarillismo y distrajo al público con noticias tercermundistas. ¡Es muy eficaz!")
        setTimeout(() => {
            endGame();
            computerAttack();
        }, 3500);
    })

    $("#acusacionBtn").click(() => {
        toggleButtons("none");
        computerLife.attr("value", getComputerLife() - acusacion());
        battleLogParagraph.html("Viale utilizó Acusación y acusó a Samid de avalar la bomba. ¡Vaya declaración!")
        setTimeout(() => {
            endGame();
            computerAttack();
        }, 3500);
    })

    $("#evasionBtn").click(() => {
        toggleButtons("none");
        computerLife.attr("value", getComputerLife() - evasion());
        battleLogParagraph.html("Samid utilizó evasión. AFIP pierde un turno.")
        setTimeout(() => {
            endGame();
            computerAttack();
        }, 3500);
    })

    $("#trompadaBtn").click(() => {
        toggleButtons("none");
        computerLife.attr("value", getComputerLife() - trompada());
        battleLogParagraph.html("Samid utilizó Trompada. ¡Es muy eficaz!")
        setTimeout(() => {
            endGame();
            computerAttack();
        }, 3500);
    })
}

endGameBtn.click(() => {
    endGameScreen.hide();
    characterSelectionScreen.show();
    toggleButtons("block");
    computerLife.attr("value", 100);
    playerLife.attr("value", 100);
    resetButtons();
})
