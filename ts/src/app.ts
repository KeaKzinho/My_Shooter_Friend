import { ACCEPT_KEYS, RANDOMIZE_KEYS, PLAYER_ONE_KEYS, PLAYER_TWO_KEYS } from './support/values'
import { callActions } from './processing/actions'

document.addEventListener("keydown", (event: KeyboardEvent) => {
    handleKeyPress(event.key)
})

export var playerRound = 0


function handleKeyPress(key: string) {

    if ((RANDOMIZE_KEYS.includes(key) && playerRound == 0.5) || (RANDOMIZE_KEYS.includes(key) && playerRound == 1.5)) return
    if (!ACCEPT_KEYS.includes(key)) return
    if (playerRound == 0 && PLAYER_TWO_KEYS.includes(key)) return
    if (playerRound == 1 && PLAYER_ONE_KEYS.includes(key)) return

    playerRound = (callActions as any)[key]()
}