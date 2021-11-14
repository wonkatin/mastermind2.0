export default function NumberElementOption(props) {

    if (props.guessCount >= props.level) {
        return (
            <div className={`number-element ${props.color}`}>
                <div className="number-text-container">
                    {props.value}
                </div>
            </div>
        )
    } else {
        return (
            <div className={`number-element hover ${props.color}`} onClick={props.handleClick}>
                <div className="number-text-container">
                    {props.value}
                </div>
            </div>
        )
    }
}