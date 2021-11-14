import NumberElementOption from './NumberElementOption'

export default function NumberOptions(props) {

    const options = props.options.map((option, index) => {
        // function for handleClick
        const handleClick = () => {
            props.gameBoard[props.rowCount][props.guessCount] = {value: option.value, color: option.color}
            updateGuessCount()
            // set state of guess with spread opperator? 
        }
        
        const updateGuessCount = () => {
             props.setGuessCount(props.guessCount + 1)
        }

        return (
            <NumberElementOption
                key={index}
                value={option.value}
                color={option.color}
                // setClickedOption={props.setClickedOption}
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