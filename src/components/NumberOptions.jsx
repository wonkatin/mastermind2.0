import NumberElement from './NumberElement'

export default function NumberOptions(props) {
    console.log(props.options)
    const options = props.options.map((option, index) => {
        return (
            <NumberElement
                key={index}
                value={option.value}
                color={option.color}
            />
        )
    })
    return (
        <div className="number-options">
            {options}
        </div>
    )
}