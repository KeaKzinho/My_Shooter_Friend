import { EFFECTS, playerOne, playerTwo } from "../support/values.js";
import { playerRound } from "../app.js";
export function createPlayer(name = "Jogador") {
    return {
        name: name,
        life: 100,
        maxLife: 100,
        attack: 5,
        defense: false,
        extraChanceCriticalDamage: 0,
        extraDamageBase: 0,
        defenseBreaker: false
    };
}
export const applyEffect = {
    applyMaxChanceCriticalDamage(mainPlayer) {
        mainPlayer.extraChanceCriticalDamage = EFFECTS.damage.maxChanceCriticalDamage;
    },
    applyMinChanceCriticalDamage(mainPlayer) {
        mainPlayer.extraChanceCriticalDamage = EFFECTS.damage.minChanceCriticalDamage;
    },
    applyIncreaseChanceCriticalDamage(mainPlayer) {
        mainPlayer.extraChanceCriticalDamage += EFFECTS.damage.increaseChanceCriticalDamage;
    },
    applyDecreaseChanceCriticalDamage(mainPlayer) {
        mainPlayer.extraChanceCriticalDamage += EFFECTS.damage.decreaseChanceCriticalDamage;
    },
    applyIncreaseBaseDamage(mainPlayer) {
        mainPlayer.extraDamageBase += EFFECTS.damage.increaseBaseDamage;
    },
    applyIncreaseLife(mainPlayer) {
        if ((mainPlayer.life + EFFECTS.life.increaseLife) > mainPlayer.maxLife) {
            mainPlayer.life = mainPlayer.maxLife;
            return;
        }
        mainPlayer.life += EFFECTS.life.increaseLife;
    },
    applyDecreaseLife(mainPlayer) {
        if (mainPlayer.life - EFFECTS.life.decreaseLife < 0) {
            mainPlayer.life = 0;
            return;
        }
        mainPlayer.life -= EFFECTS.life.decreaseLife;
    },
    applyIncreaseMaxLife(mainPlayer) {
        mainPlayer.maxLife = EFFECTS.life.increaseMaxLife;
    },
    applyDecreaseMaxLife(mainPlayer) {
        mainPlayer.maxLife = EFFECTS.life.decreaseMaxLife;
    },
    applyDefenseBreaker(mainPlayer) {
        mainPlayer.defenseBreaker = EFFECTS.defense.defenseBreak;
    },
};
export function randomAttackDamage(chanceCriticalDamage, damage) {
    return (Math.random() < chanceCriticalDamage) ? damage : 0;
}
export function applyDamage(targetPlayer, damage) {
    targetPlayer.life -= damage;
}
export function getPlayers() {
    return [playerOne, playerTwo];
}
export function getRound() {
    if ((playerRound == 0.5) || (playerRound == 0)) {
        return "Player One";
    }
    return "Player Two";
}
