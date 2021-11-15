export default function NumberElementSecret(props) {
    if (props.win || props.gameOver) {
        return (
            <div className={`number-element ${props.options[props.number].color}`} onClick={props.handleClick}>
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