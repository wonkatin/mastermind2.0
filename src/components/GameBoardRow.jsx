import NumberElement from './NumberElement'
import SubmitButton from './SubmitButton'

export default function GameBoardRow(props) {
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
    return (
            <div className="row"> 
                 {elements}

                { (props.rowIndex === props.rowCount) ? 
                    <SubmitButton 
                        gameBoard={props.gameBoard}
                        level={props.numOfElements}
                        gameBoardRows={props.gameBoardRows}
                        rowCount={props.rowCount}
                        guessCount={props.guessCount}
                        setRowCount={props.setRowCount}
                        setGuessCount={props.setGuessCount}
                        guess={props.gameBoard[props.rowCount]}
                        solution={props.randomNums}
                    /> 
                     
                    :
                    <div className="feedback-zone"> </div>
                };


            </div>
        
    )
}