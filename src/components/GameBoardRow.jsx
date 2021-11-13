import NumberElement from './NumberElement'
import SubmitButton from './SubmitButton'

export default function GameBoardRow(props) {
    const elements = Array.from(Array(props.numOfElements)).map((element, index) => {
        return(
            <NumberElement 
                key={index}
                number=""
                color="white"
                value=""
            />
        )
    })
    
    return (
        <div className="row"> 
            {elements}
            <SubmitButton 
                row={props.row}
                setRow={props.setRow}
            />
        </div>
    )
}