export default function NumberElementSecret(props) {
    // show color and number of secret code if game is won or over
    if (props.win || props.gameOver) {
        return (
            <div className={`number-element ${props.options[props.number].color}`}>
                <div className="number-text-container">
                    {props.number}
                </div>
            </div>
        )
    } else {
        return (
            <div className={`number-element ${props.color}`} onClick={props.handleClick}>
                <div className="number-text-container">
                    {props.value}
                </div>
            </div>
        )
    }
}