import React, { useState, useEffect } from 'react'

export default function Game() {
    // secret code in state
    const [randomNums, setRandomNums] = useState("")

    useEffect(() => {
        getRandomNums()
    }, [])

    // Access API for random number generator
    const getRandomNums = async() => {
        try {
            const response = await fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")
            const text = await response.text()
            console.log(text)
            // API returns HTML text including a new line (\n) after each number
            // for example when originally converted to array using const array = [...text] returned ['5', '\n', '1', '\n', '5', '\n', '1', '\n']
            // I used split to create an array and the limit to remove the extra line (I will probably use a variable for the limit later)
            const array = text.split('\n', text.length/2)
            console.log(array)
            // the array of strings converted to integers
            const nums = array.map(el => parseInt(el))
            console.log(nums)
            // set the state of secret code
            setRandomNums(nums)
        }
        catch(error) {
            console.log(error)
        }
    }
    return (
        <div>Mastermind</div>
    )
}