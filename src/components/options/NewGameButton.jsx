export default function NewGameButton(props) {
    // reset game state
    const handleNewGameClick = () => {
        props.setRowCount(0);
        props.setGuessCount(0);
        props.setWin(false);
        props.setGameOver(false);
        props.newGame()
    }
    return (
        <button className="new-game hover" onClick={handleNewGameClick}>
            NEW GAME
        </button>
    )
}