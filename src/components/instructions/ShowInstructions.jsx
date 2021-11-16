export default function ShowInstructions(props) {
    const showInstructions = () => {
        props.setModal(true)
    } 
    return (
        <div className="show-instructions hover" onClick={showInstructions}>
            Instructions
        </div>
    )
}