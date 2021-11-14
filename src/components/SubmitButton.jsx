export default function SubmitButton(props) {
      // submit guess/check -- will they crack they code???? 
    
    console.log(props.solution)
    console.log(props.guess)

    const tryCode = (arr1, arr2) => {
       for (let i = 0; i < props.level; i ++){
            if(arr1.includes(arr2[i])) {
                if (arr2.indexOf(arr2[i]) === arr1.indexOf(arr2[i])) {
                    console.log("right number and right position")
                } else {
                    console.log("right number")
                }
            }
       }
    }
    const handleSubmit = () => {
        updateRowCount()
        props.setGuessCount(0)
        tryCode(props.guess, props.solution)
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