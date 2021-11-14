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
    // access feedback data
    // const feedbackData = props.feedback[props.rowIndex]
    // if (props.feedback) {
    //     const rightNum = props.feedback[props.rowIndex][0]
    //     const rightPos = props.feedback[props.rowIndex][1]

    // }
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
    if (props.rowIndex === props.rowCount ) {
        return (
            <div className="row">
                {elements}
                <SubmitButton 
                    gameBoard={props.gameBoard}
                    feedback={props.feedback}
                    rowIndex={props.rowIndex}
                    // setFeedback={props.setFeedback}
                    level={props.numOfElements}
                    gameBoardRows={props.gameBoardRows}
                    rowCount={props.rowCount}
                    guessCount={props.guessCount}
                    setRowCount={props.setRowCount}
                    setGuessCount={props.setGuessCount}
                    guess={guessArray}
                    solution={props.randomNums}
                /> 
            </div>
        )
    } else if (props.rowIndex < props.rowCount && props.feedback) {
        return (
            <div className="row">
                {elements}
                <div className="feedback-zone"> {props.feedback[props.rowIndex][0]} right numbers {props.feedback[props.rowIndex][1]} right number and position </div>
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