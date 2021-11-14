export default function SubmitButton(props) {
      // submit guess/check -- will they crack they code???? 
    const tryCode = (arr1, arr2) => {
        //check the values, check check the values
    }
    const handleSubmit = () => {
        updateRowCount()
        props.setGuessCount(0)
        // tryCode()
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