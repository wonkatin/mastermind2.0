
export default function NumberElement(props) {
    const numberColor = {
        backgroundColor: props.color
    }
    return (
        <div className="number-element" style={numberColor}>
            <div className="number-text-container">
                {props.default}
            </div>
        </div>
    )
}