import NumberElement from './NumberElement'
import SubmitButton from './SubmitButton'

export default function GameBoardRow(props) {
    const elements = Array.from(Array(props.numOfElements)).map((element, index) => {
        return(
            <NumberElement 
                key={index}
                elementIndex={index}
                number=""
                color="white"
                value=""
            />
        )
    })
    
    return (
            <div className="row"> 
                 {elements}

                { (props.rowIndex == props.rowCount) ? 
                    <SubmitButton 
                        rowCount={props.rowCount}
                        setRowCount={props.setRowCount}
                    /> 
                     
                    :
                    <div className="feedback-zone"> </div>
                };


            </div>
        
    )
}