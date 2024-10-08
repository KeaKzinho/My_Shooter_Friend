import { changeGameToOff, changeGameToOn } from "../observer/game.js";
import { changeMusic, stopMusic } from "./music.js";
export function gameOver(playerWinner) {
    const gameOverDiv = document.getElementById("game-over");
    const gameDiv = document.getElementById("game");
    const pWinner = document.getElementById("winner");
    if (!gameOverDiv || !gameDiv || !pWinner)
        return;
    changeGameToOff();
    stopMusic();
    gameDiv.style.display = "none";
    gameOverDiv.style.display = "flex";
    pWinner.innerText = `${playerWinner.name} foi o vencedor!`;
}
export function startGame() {
    const gameDiv = document.getElementById("game");
    const startMenu = document.getElementById("start");
    if (!gameDiv || !startMenu)
        return;
    startMenu.style.display = "none";
    gameDiv.style.display = "flex";
    changeMusic("in-game");
    changeGameToOn();
}
