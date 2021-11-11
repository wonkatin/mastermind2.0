import React, { useState, useEffect } from 'react'

export default function Game() {
    // const [randomNums, setRandomNums] = useState("")

    useEffect(() => {
        getRandomNums()
        // fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")
        //     .then((response) => {
        //         console.log(response)
        //         return response.text()
        //     }).then((html) => {
        //         console.log(html[0])
        //     }).catch((error) => {
        //         console.log(error)
        //     })
    }, [])

    const getRandomNums = async() => {
        try {
            const response = await fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")
            const text = await response.text()
            console.log(text)
        }
        catch(error) {
            console.log(error)
        }
    }
    return (
        <div> Mastermind</div>
    )
}