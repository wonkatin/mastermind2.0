export default function NumberElementOption(props) {

    return (
        <div className={`number-element ${props.color}`} onClick={props.handleClick}>
            <div className="number-text-container">
                {props.value}
            </div>
        </div>
    )
}