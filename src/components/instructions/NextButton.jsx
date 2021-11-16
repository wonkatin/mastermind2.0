export default function NextButton(props) {
    // move from welcome mode to instructions mode
    // instructions stays on modal unless page refresh 
    const handleNext = () => {
        props.setInstructions(true)
    }
    return (
        <button className="next hover" onClick={handleNext}>
            Next
        </button>
    )
}