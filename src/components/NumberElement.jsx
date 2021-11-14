
export default function NumberElement(props) {
    if (props.gameBoard) {
        const gameData = props.gameBoard[props.rowIndex][props.elementIndex]
        // console.log(data)
        return (
            <div className={`number-element ${gameData.color}`} onClick={props.handleClick}>
                <div className="number-text-container">
                    {gameData.value}
                </div>
            </div>
        )
    } else {
        return (
            <div>help</div>
        )
    }

    }
