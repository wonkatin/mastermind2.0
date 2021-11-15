import NumberElementSecret from './NumberElementSecret'

export default function SecretCode(props) {
    const secretCode = props.randomNums.map((randomNum, index) => {
        return (
            <NumberElementSecret
                key={index}
                index={index}
                number={randomNum}
                color="white"
                value="?"
                options={props.options}
                win={props.win}
                gameOver={props.gameOver}
                // value={randomNum}
            />
        )
    })
    return (
        <div className="secret">
            {secretCode}
        </div>
    )
}