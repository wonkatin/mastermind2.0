export default function NextButton(props) {
    const handleNext = () => {
        props.setInstructions(true)
    }
    return (
        <div className="next hover" onClick={handleNext}>
            Next
        </div>
    )
}