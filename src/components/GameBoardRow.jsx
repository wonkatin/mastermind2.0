import NumberElement from './NumberElement'
import SubmitButton from './SubmitButton'

export default function GameBoardRow(props) {
    const elementsArray = Array.from(Array(props.numOfElements))
    const elements = elementsArray.map((element, index) => {
        return(
            <NumberElement 
                key={index}
                elementIndex={index}
                rowIndex={props.rowIndex}
                number=""
                color="white"
                value=""
            />
        )
    })
    // console.log(elementsArray)
    console.log(elements)
    
    return (
            <div className="row"> 
                 {elements}

                { (props.rowIndex === props.rowCount) ? 
                    <SubmitButton 
                        rowCount={props.rowCount}
                        setRowCount={props.setRowCount}
                        guessCount={props.guessCount}
                        setGuessCount={props.setGuessCount}
                    /> 
                     
                    :
                    <div className="feedback-zone"> </div>
                };


            </div>
        
    )
}