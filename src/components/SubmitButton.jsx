export default function SubmitButton(props) {
    const handleSubmit = () => {
        updateRow()
    }
    const updateRow = () => {
        props.setRow(props.row +1)
    }
    return (
        <div className="submit" onClick={handleSubmit}>
            Submit
        </div>
    )
}