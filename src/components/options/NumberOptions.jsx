import NumberElementOption from './NumberElementOption'

export default function NumberOptions(props) {
    // use options array to map elements with value and color
    const options = props.options.map((option, index) => {

        return (
            <NumberElementOption
                key={index}
                value={option.value}
                color={option.color}
                gameBoard={props.gameBoard}
                level={props.level}
                rowCount={props.rowCount}
                guessCount={props.guessCount}
                setGuessCount={props.setGuessCount}
            />
        )
    })
   
    return (
        <div className="number-options">
            {options}
        </div>
    )
}