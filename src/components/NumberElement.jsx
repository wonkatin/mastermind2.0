
export default function NumberElement(props) {
    if (props.gameBoard) {
        const gameData = props.gameBoard[props.rowIndex][props.elementIndex]
        return (
            <div className={`number-element default ${gameData.color}`}>
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
