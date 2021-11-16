export default function NewGameButton(props) {
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