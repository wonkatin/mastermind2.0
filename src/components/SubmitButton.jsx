export default function SubmitButton(props) {
      // submit guess/check -- will they crack they code???? 
    
    console.log(props.solution)
    console.log(props.guess)
    // console.log(props.feedback)
    // console.log(props.feedback[props.rowIndex])
    //copy arrays so I don't change the originals
    let array1 = [...props.guess]
    let array2 = [...props.solution]
    const tryCode = (arr1, arr2) => {
        // separate the logic so it checks and replaces all exact matches first
        for (let i = 0; i < props.level; i ++){
            if(arr1.includes(arr2[i])) {
                if (arr2[i] === arr1[i]) {
                    props.feedback[props.rowIndex][1] = props.feedback[props.rowIndex][1] + 1
                    console.log("right number and right position")
                    // console.log(props.feedback[props.rowIndex][1])
                    arr1[i]="checked"
                    arr2[i]="checked"
                } else {
                    props.feedback[props.rowIndex][0] = props.feedback[props.rowIndex][0] + 1
                    console.log("right number")
                    // remove from array1 the value of array[i]
                    // replace item in array
                    let checked = arr1.indexOf(arr2[i]) 
                    arr1[checked] = "checked"
                }
                
                console.log(arr1)
                console.log(arr2)
            }

        }
    }
    console.log(props.feedback)
    console.log(props.rowCount)
    console.log(props.gameBoardRows)
    console.log(props.rowIndex)
    const handleSubmit = () => {
        tryCode(array1 , array2)
        if (props.feedback[props.rowIndex][1] === 4 ) {
            props.setWin(true)

            // sometimes ten means 9 when you count from 0 
        } else if (props.rowCount < props.gameBoardRows - 1 ) {
            updateRowCount()
            props.setGuessCount(0)
        } else {
            props.setGameOver(true)
        }

       

    }
    const updateRowCount = () => {
        props.setRowCount(props.rowCount +1)
    }
// is submit button active
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