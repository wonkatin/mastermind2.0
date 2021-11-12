import React, { useState, useEffect } from 'react'

export default function Game() {
    const [randomNums, setRandomNums] = useState("")

    useEffect(() => {
        getRandomNums()
    }, [])

    const getRandomNums = async() => {
        try {
            const response = await fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")
            const text = await response.text()
            const nums = text.split('\n', text.length/2).map(el => parseInt(el))
            console.log("secret code: " + nums)
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