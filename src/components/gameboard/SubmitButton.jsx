export default function SubmitButton(props) {
    // submit guess/check -- will they crack they code???? 
    //copy arrays so I don't change the originals
    let array1 = [...props.guess]
    let array2 = [...props.solution]
    const tryCode = (arr1, arr2) => {
        // separate the logic so it checks and replaces all exact matches first
        for (let i = 0; i < props.level; i ++){
            if(arr1.includes(arr2[i])) {
                if (arr2[i] === arr1[i]) {
                    props.feedback[props.rowIndex][1] = props.feedback[props.rowIndex][1] + 1
                    arr1[i]="checked1"
                    arr2[i]="checked2"
                } 
            }
        }
        //check if it includes but not exact match
        for (let i = 0; i < props.level; i ++) {
            if(arr1.includes(arr2[i])) {
                props.feedback[props.rowIndex][0] = props.feedback[props.rowIndex][0] + 1
                // remove from array1 the value of array[i]
                // replace item in array
                let checked = arr1.indexOf(arr2[i]) 
                arr1[checked] = "checked1"
            }
        }
    }

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
            <button className="submit hover" onClick={handleSubmit}>
                Submit
            </button>
        )
    } else {
        return (
            // add onclick method telling user to pick more numbers
            <button className="submit">
                Submit
            </button>
        )
    }

}