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
                // setFeedback={props.setFeedback}
                numOfElements={props.numOfElements}
                gameBoardRows={props.gameBoardRows}
                rowCount={props.rowCount}
                guessCount={props.guessCount}
                setRowCount={props.setRowCount}
                setGuessCount={props.setGuessCount}
                randomNums={props.randomNums}
                setWin={props.setWin}
                win={props.win}
            />
        )
    })
    
    // fill(<GameBoardRow key={index} numOfElements={props.numOfElements}/>) does not give unique key
    // console.log(rows)

    return (
        <div className="game-board">
            {rows}
        </div>
    )
}