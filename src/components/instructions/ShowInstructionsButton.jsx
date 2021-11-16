export default function ShowInstructionsButton(props) {
    const showInstructions = () => {
        props.setModal(true)
    } 
    return (
        <button className="show-instructions hover" onClick={showInstructions}>
            Instructions
        </button>
    )
}