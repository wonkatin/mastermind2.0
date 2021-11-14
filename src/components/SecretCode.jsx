import NumberElementSecret from './NumberElementSecret'

export default function SecretCode(props) {
    // console.log(props.randomNums)
    const secretCode = props.randomNums.map((randomNum, index) => {
        return (
            <NumberElementSecret
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