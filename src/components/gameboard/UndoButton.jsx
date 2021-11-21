export default function UndoButton(props) {
    console.log(props.gameBoard)

    const handleUndo = () => {
        if(props.guessCount === 0) {
            return
        } 

        props.gameBoard[props.rowCount][props.guessCount - 1] = {value: " ", color: "white"}
        props.setGuessCount(props.guessCount - 1)
    }
    
    return( 
        <button className={`undo ${props.guessCount ? "hover" : " "}`} disabled={props.guessCount === 0} onClick={handleUndo}>
            Undo
        </button>
    )

}