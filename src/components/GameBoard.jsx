import GameBoardRow from "./GameBoardRow";


export default function GameBoard(props) {
    const rows = Array.from(Array(props.gameBoardRows)).map((row, index) => {
        return (
            <GameBoardRow
                key={index}
                rowIndex={index}
                numOfElements={props.numOfElements}
                rowCount={props.rowCount}
                setRowCount={props.setRowCount}
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