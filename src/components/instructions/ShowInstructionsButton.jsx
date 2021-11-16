export default function ShowInstructionsButton(props) {
    // show modal which contains instructions 
    const showInstructions = () => {
        props.setModal(true)
    } 
    return (
        <button className="show-instructions hover" onClick={showInstructions}>
            Instructions
        </button>
    )
}