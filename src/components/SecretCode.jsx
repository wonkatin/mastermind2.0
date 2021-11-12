import NumberElement from './NumberElement'

export default function SecretCode(props) {
    console.log(props.randomNums)
    const secretCode = props.randomNums.map((randomNum, index) => {
        return (
            <NumberElement
                key={index}
                number={randomNum}
                default= "?"
                color="white"
            />
        )
    })
    return (
        <div className="secret">{secretCode}</div>
    )
}