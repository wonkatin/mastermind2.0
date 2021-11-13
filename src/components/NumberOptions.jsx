import NumberElement from './NumberElement'

export default function NumberOptions(props) {
    
    const options = props.options.map((option, index) => {
        // function for handleClick
        const handleClick = () => {
            console.log("click happens")
            props.setClickedOption([{value: option.value, color: option.color}])
        }
        return (
            <NumberElement
                key={index}
                value={option.value}
                color={option.color}
                setClickedOption={props.setClickedOption}
                handleClick={handleClick}
            />
        )
    })
    // console.log(options)
    return (
        <div className="number-options">
            {options}
        </div>
    )
}