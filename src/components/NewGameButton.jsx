export default function NewGameButton(props) {
    const handleNewGameClick = () => {
        props.setRowCount(0);
        props.setGuessCount(0);
        props.setWin(false);
        props.setGameOver(false);
        props.newGame()
    }
    return (
        <div className="new-game" onClick={handleNewGameClick}>
            NEW GAME
        </div>
    )
}