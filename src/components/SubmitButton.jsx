export default function SubmitButton(props) {
    const handleSubmit = () => {
        updateRowCount()
    }
    const updateRowCount = () => {
        props.setRowCount(props.rowCount +1)
    }
    return (
        <div className="submit" onClick={handleSubmit}>
            Submit
        </div>
    )
}