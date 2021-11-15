export default function NextButton(props) {
    const handleNext = () => {
        props.setInstructions(true)
    }
    return (
        <div className="next" onClick={handleNext}>
            Next
        </div>
    )
}