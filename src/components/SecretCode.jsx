import NumberElement from './NumberElement'

export default function SecretCode(props) {
    // console.log(props.randomNums)
    const secretCode = props.randomNums.map((randomNum, index) => {
        return (
            <NumberElement
                key={index}
                index={index}
                number={randomNum}
                color="white"
                // value="?"
                value={randomNum}
            />
        )
    })
    return (
        <div className="secret">
            {secretCode}
        </div>
    )
}