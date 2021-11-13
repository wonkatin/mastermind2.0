
export default function NumberElement(props) {
    // const numberColor = {
    //     backgroundColor: props.color
    // }
    return (
        <div className={`number-element ${props.color}`}>
            <div className="number-text-container">
                {props.value}
            </div>
        </div>
    )
}