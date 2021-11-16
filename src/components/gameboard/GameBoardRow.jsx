import NumberElement from './NumberElement'
import SubmitButton from './SubmitButton'

export default function GameBoardRow(props) {
    // access the guess array to be checked in submit button
    const array = props.gameBoard[props.rowCount]
    let guessArray = []

    // do not forget to check the useeffect
    if(props.gameBoard) {
        guessArray = array.map(el => el.value)
    }

    // render components
    const elementsArray = Array.from(Array(props.numOfElements))
    const elements = elementsArray.map((element, index) => {
        return(
            <NumberElement 
                gameBoard={props.gameBoard}
                key={index}
                elementIndex={index}
                rowIndex={props.rowIndex}
            />
        )
    })

    // is submit button there
    if (props.win) {
        if (props.rowIndex <= props.rowCount) {
            return (
                <div className="row">
                    {elements}
                    { (props.feedback[props.rowIndex][0] === 0 && props.feedback[props.rowIndex][1] === 0) ?
                    <div className="feedback-zone">incorrect </div>
                    :
                    <div className="feedback-zone"> {props.feedback[props.rowIndex][0]} right numbers {props.feedback[props.rowIndex][1]} right numbers and position </div>
                    }
                </div>
            )
        } else {
            return (
                <div className="row">
                    {elements}
                </div>
            )
        }
        
    } else if (props.gameOver) {
        return (
            <div className="row">
                {elements}
                { (props.feedback[props.rowIndex][0] === 0 && props.feedback[props.rowIndex][1] === 0) ?
                <div className="feedback-zone">incorrect </div>
                :
                <div className="feedback-zone"> {props.feedback[props.rowIndex][0]} right numbers {props.feedback[props.rowIndex][1]} right numbers and position </div>
                }
            </div>
        )
    } else if (props.rowIndex === props.rowCount) {
        return (
            <div className="row">
                {elements}
                <SubmitButton 
                    gameBoard={props.gameBoard}
                    feedback={props.feedback}
                    rowIndex={props.rowIndex}
                    level={props.numOfElements}
                    gameBoardRows={props.gameBoardRows}
                    rowCount={props.rowCount}
                    guessCount={props.guessCount}
                    setRowCount={props.setRowCount}
                    setGuessCount={props.setGuessCount}
                    guess={guessArray}
                    solution={props.randomNums}
                    setWin={props.setWin}
                    setGameOver={props.setGameOver}
                /> 
               
            </div>
        )
    } else if (props.rowIndex < props.rowCount && props.feedback) {
        return (
            <div className="row">
                {elements}
                { (props.feedback[props.rowIndex][0] === 0 && props.feedback[props.rowIndex][1] === 0) ?
                <div className="feedback-zone">incorrect </div>
                :
                <div className="feedback-zone"> {props.feedback[props.rowIndex][0]} right numbers {props.feedback[props.rowIndex][1]} right numbers and position </div>
                }
            </div>
        )
    } else {
        return (
            <div className="row">
                {elements}
            </div>
        )
    }
 
    
}