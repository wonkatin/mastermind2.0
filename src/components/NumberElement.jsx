
export default function NumberElement(props) {
    const numberColor = {
        backgroundColor: props.color
    }
    return (
        <div className="number-element" style={numberColor}>{props.default}</div>
    )
}