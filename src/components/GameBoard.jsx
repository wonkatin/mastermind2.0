import GameBoardRow from "./GameBoardRow";


export default function GameBoard(props) {
    const rows = Array.from(Array(props.gameBoardRows)).map((row, index) => {
        return (
            <GameBoardRow
                key={index}
                numOfElements={props.numOfElements}
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