import NumberElement from './NumberElement'

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
    console.log(elements)
    return (
        <div className="row"> 
            {elements}
        </div>
    )
}