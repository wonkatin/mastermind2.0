import GameBoardRow from "./GameBoardRow";

export default function GameBoard(props) {
    const rowsArray = Array.from(Array(props.gameBoardRows))
    const rows = rowsArray.map((row, index) => {
        return (
            <GameBoardRow
                key={index}
                rowIndex={index}
                gameBoard={props.gameBoard}
                feedback={props.feedback}
                numOfElements={props.numOfElements}
                gameBoardRows={props.gameBoardRows}
                rowCount={props.rowCount}
                guessCount={props.guessCount}
                setRowCount={props.setRowCount}
                setGuessCount={props.setGuessCount}
                randomNums={props.randomNums}
                setWin={props.setWin}
                win={props.win}
                setGameOver={props.setGameOver}
                gameOver={props.gameOver}
            />
        )
    })

    return (
        <div className="game-board">
            {rows}
        </div>
    )
}