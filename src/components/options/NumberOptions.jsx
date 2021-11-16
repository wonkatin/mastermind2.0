import NumberElementOption from './NumberElementOption'

export default function NumberOptions(props) {
    // use options array to map elements with value and color
    const options = props.options.map((option, index) => {
        // function for handleClick
        // set virtual game board to the value and color at that row and number
        const handleClick = () => {
            props.gameBoard[props.rowCount][props.guessCount] = {value: option.value, color: option.color}
            updateGuessCount()
        }
        // track guess count and use to know where we are in the row
        const updateGuessCount = () => {
             props.setGuessCount(props.guessCount + 1)
        }

        return (
            <NumberElementOption
                key={index}
                value={option.value}
                color={option.color}
                handleClick={handleClick}
                level={props.level}
                guessCount={props.guessCount}
            />
        )
    })
   
    return (
        <div className="number-options">
            {options}
        </div>
    )
}