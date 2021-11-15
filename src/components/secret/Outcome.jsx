export default function Outcome(props) {
    if (props.win) {
        return (
            <div className="outcome">
                YOU WIN!
            </div>
        )
    } else if (props.gameOver) {
        return (
            <div className="outcome">
                GAME OVER
            </div>
        )
    } else {
        return(
            <div className="outcome">
    
            -- can you crack the code?
          </div>
        )
    }
}