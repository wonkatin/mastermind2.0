export default function NextButton(props) {
    const handleNext = () => {
        props.setInstructions(true)
    }
    return (
        <button className="next hover" onClick={handleNext}>
            Next
        </button>
    )
}