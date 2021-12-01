import NumberElement from './NumberElement'
import SubmitButton from './SubmitButton'
import UndoButton from './UndoButton'

export default function GameBoardRow(props) {
    // access the guess array to be checked in submit button
    const array = props.gameBoard[props.rowCount]
    let guessArray = []

    // do not forget to check the useEffect has finished
    if(props.gameBoard) {
        guessArray = array.map(el => el.value)
    }

    // render number components
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

    const handleCircle = () => {
        props.setFeedbackInfo(true)
    }
    
    const feedback = (num) => {
        let arr = []
        if (num > 0) {
            for (let i = 1; i <= num; i ++) {
                arr.push(<button className="circle hover" onClick={handleCircle} key={i}></button>)
            }
            return arr
        }
    }
    // console.log(props.feedback)

    // is submit button there? is feed back there?
    // remove remaining submit buttons if game is won before 10 -- would have to include game over if add option to end game early
    // show submit button if virtual row and row count are the same
    // render "incorrect" if both numbers in feedback array at that row are 0
    // check for feedback and if component row is less than count (row in virtual gameboard)
    // don't show virtual feedback for future rows (ie: [0,0])
    if (props.win) {
        if (props.rowIndex <= props.rowCount) {
            return (
                <div className="row">
                    {elements}
                    { (props.feedback[props.rowIndex][0] === 0 && props.feedback[props.rowIndex][1] === 0) ?
                    <div className="feedback-zone">incorrect </div>
                    :
                    // <div className="feedback-zone"> {props.feedback[props.rowIndex][0]} right numbers <br/>{props.feedback[props.rowIndex][1]} right numbers and position </div>
                    <div className="feedback-zone"> 
                        <div className="right-number">
                            {feedback(props.feedback[props.rowIndex][0])}
                        </div>
                        <div className="right-position">
                            {feedback(props.feedback[props.rowIndex][1])}
                        </div>
                        <div className="feedback-info"> </div>
                    </div>
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
                // <div className="feedback-zone"> {props.feedback[props.rowIndex][0]} right numbers <br/>{props.feedback[props.rowIndex][1]} right numbers and position </div>
                <div className="feedback-zone"> 
                    <div className="right-number">
                        {feedback(props.feedback[props.rowIndex][0])}
                    </div>
                    <div className="right-position">
                        {feedback(props.feedback[props.rowIndex][1])}
                    </div>
                </div>
                }
            </div>
        )
    } else if (props.rowIndex === props.rowCount) {
        return (
            <div className="row">
                {elements}
                <UndoButton 
                    gameBoard={props.gameBoard}
                    rowCount={props.rowCount}
                    setGuessCount={props.setGuessCount}
                    guessCount={props.guessCount}
                />
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
                // <div className="feedback-zone"> {props.feedback[props.rowIndex][0]} right numbers <br/>{props.feedback[props.rowIndex][1]} right numbers and position </div>
                <div className="feedback-zone"> 
                    <div className="right-number">
                        {feedback(props.feedback[props.rowIndex][0])}
                    </div>
                    <div className="right-position">
                        {feedback(props.feedback[props.rowIndex][1])}
                    </div>
                </div>
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