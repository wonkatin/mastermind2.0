export default function SubmitButton(props) {
    // submit guess/check -- will they crack they code???? 
    //copy arrays so I don't change the originals
    let arrayGuess = [...props.guess]
    let arraySolution = [...props.solution]
    const tryCode = (guess, solution) => {
        // separate the logic so it checks and replaces all exact matches first
        for (let i = 0; i < props.level; i ++){
            if(guess.includes(solution[i])) {
                if (solution[i] === guess[i]) {
                    props.feedback[props.rowIndex][1] = props.feedback[props.rowIndex][1] + 1
                    guess[i]="checked1"
                    solution[i]="checked2"
                } 
            }
        }
        //check if it includes but not exact match
        for (let i = 0; i < props.level; i ++) {
            if(guess.includes(solution[i])) {
                props.feedback[props.rowIndex][0] = props.feedback[props.rowIndex][0] + 1
                // "check" from guess array the value of solution[i]
                let checked = guess.indexOf(solution[i]) 
                guess[checked] = "checked1"
            }
        }
    }

    const handleSubmit = () => {
        if (props.guessCount < props.level  ) {
            return
        } else {
            tryCode(arrayGuess , arraySolution)
            // if there are 4 right number and position WIN WIN WIN
            if (props.feedback[props.rowIndex][1] === props.level ) {
                props.setWin(true)
                // sometimes ten means 9 when you count from 0 
                // game crashes if count goes above 9 b/c it is then 
                // referring to and index (10) elsewhere in the game that doesn't exist
                // since parts of logic count on rowCount
                // gameBoard and feedback go to 9
            } else if (props.rowCount < props.gameBoardRows - 1 ) {
                updateRowCount()
                props.setGuessCount(0)
            } else {
                props.setGameOver(true)
            }
        }
    }
    // track row count so we know what row we are on in virtual gameboard
    const updateRowCount = () => {
        props.setRowCount(props.rowCount +1)
    }
    
    // is submit button active
    // enable submit button if guessCount hits level number
    
    return (
        <button className={`submit ${props.guessCount < props.level ? "hover" : " "}`} disabled={props.guessCount < props.level} onClick={handleSubmit}>
            Submit
        </button>
    )
    
    

}
