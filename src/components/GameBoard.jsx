import GameBoardRow from "./GameBoardRow";


export default function GameBoard(props) {
    const rowsArray = Array.from(Array(props.gameBoardRows))
    const rows = rowsArray.map((row, index) => {
        return (
            <GameBoardRow
                key={index}
                rowIndex={index}
                numOfElements={props.numOfElements}
                rowCount={props.rowCount}
                guessCount={props.guessCount}
                setRowCount={props.setRowCount}
                setGuessCount={props.setGuessCount}
                clickedOption={props.clickedOption}
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