export default function NumberElementOption(props) {
        // function for handleClick
        // set virtual game board to the value and color at that row and number
        const handleClick = () => {
            props.gameBoard[props.rowCount][props.guessCount] = {value: props.value, color: props.color}
            updateGuessCount()
        }
        // track guess count and use to know where we are in the row
        const updateGuessCount = () => {
             props.setGuessCount(props.guessCount + 1)
        }
    // add onclick modal telling user to submit their guess
    // disable onClick if guess count hits level number 
        return (
            <button className={`number-element ${props.guessCount < props.level ? "hover" : " "} ${props.color}`} disabled={props.guessCount >= props.level} onClick={handleClick}>
                <div className="number-text-container">
                    {props.value}
                </div>
            </button>
        )
    
}

    // return( 
    //     <button className={`undo ${props.guessCount ? "hover" : " "}`} disabled={props.guessCount === 0} onClick={handleUndo}>
    //         Undo
    //     </button>
    // )