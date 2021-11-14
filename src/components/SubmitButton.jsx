export default function SubmitButton(props) {
      // submit guess/check -- will they crack they code???? 
    
    console.log(props.solution)
    console.log(props.guess)
    // console.log(props.feedback)
    // console.log(props.feedback[props.rowIndex])

    const tryCode = (arr1, arr2) => {
       for (let i = 0; i < props.level; i ++){
            if(arr1.includes(arr2[i])) {
                if (arr2.indexOf(arr2[i]) === arr1.indexOf(arr2[i])) {
                    props.feedback[props.rowIndex][1] = props.feedback[props.rowIndex][1] + 1
                    console.log("right number and right position")
                    // console.log(props.feedback[props.rowIndex][1])
                } else {
                    props.feedback[props.rowIndex][0] = props.feedback[props.rowIndex][0] + 1
                    console.log("right number")
                    // console.log(props.feedback[props.rowIndex][0])
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

    if (props.level === props.guessCount) {

        return (
            <div className="submit" onClick={handleSubmit}>
                Submit
            </div>
        )
    } else {
        return (
            // add onclick method telling user to pick more numbers
            <div className="submit">
                Submit
            </div>
        )
    }

}