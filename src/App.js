import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard'
import NumberOptions from './components/NumberOptions'
import SecretCode from './components/SecretCode'

function App() {
  // secret code in state
  const [randomNums, setRandomNums] = useState([])

  // virtual game board 
  const [gameBoard, setGameBoard] = useState(false)

  // track which row in state
  const [rowCount, setRowCount] = useState(0)

  // track which guess is being played 
  const [guessCount, setGuessCount] = useState(0)
  // guess code
  const [guess, setGuess] = useState(false)
  
  // number of rows in the game
  const gameBoardRows = 10

  // difficulty level
  const level = 4

  useEffect(() => {
      getRandomNums()
      // let innerArray = []
      // for(let i = 0; i < level; i ++) {
      //   innerArray.push(
      //     {
      //       value: "",
      //       color: "white"
      //     }
      //   )
      // }
      // console.log(innerArray)
      const gameBoardArray = []
      for (let i = 0; i < gameBoardRows; i ++) {
        gameBoardArray.push([
          {
            value: "",
            color: "white"
          },
          {
            value: "",
            color: "white"
          },
          {
            value: "",
            color: "white"
          },
          {
            value: "",
            color: "white"
          }
        ])
      }
      setGameBoard(gameBoardArray)
  }, [])


  useEffect(() => {
    console.log("secretcode: " + randomNums)
  }, [randomNums])

  useEffect(() => {
    console.log("guess count: " + guessCount)
  }, [guessCount])

  useEffect(() => {
    console.log("row count: " + rowCount)
  }, [rowCount])

  useEffect(() => {
    console.log(gameBoard)

  }, [gameBoard])

  // Access API for random number generator
  const getRandomNums = async() => {
      try {
          const response = await fetch(`https://www.random.org/integers/?num=${level}&min=0&max=7&col=1&base=10&format=plain&rnd=new`)
          const text = await response.text()
          // API returns HTML text including a new line (\n) after each number
          // console.log(text)
          // for example when originally converted to array using const array = [...text] returned ['5', '\n', '1', '\n', '5', '\n', '1', '\n']
          // I used split to create an array and the limit to remove the extra line (I will probably use a variable for the limit later)
          const array = text.split('\n', text.length/2)
          // console.log(array)
          // the array of strings converted to integers
          const nums = array.map(el => parseInt(el))
          // console.log(nums)
          // set the state of secret code
          setRandomNums(nums)
      }
      catch(error) {
          console.log(error)
      }
  }

  //game options
  const options = [
    {
      value: 0,
      color: "red"
    },
    {
      value: 1,
      color: "orange"
    },
    {
      value: 2,
      color: "yellow"
    },
    {
      value: 3,
      color: "green"
    },
    {
      value: 4,
      color: "blue"
    },
    {
      value: 5,
      color: "purple"
    },
    {
      value: 6,
      color: "pink"
    },
    {
      value: 7,
      color: "white"
    },
  ]
  return (
    <div className="game">
      <div className="game-container">
        <div className="title">Mastermind</div>
        <div className="number-options-container">
          <NumberOptions 
            gameBoard={gameBoard}
            options={options}
            guessCount={guessCount}
            rowCount={rowCount}
            setGuessCount={setGuessCount}
            level={level}
          />
        </div>
        <div className="game-board-container">
          <GameBoard 
            gameBoard={gameBoard}
            numOfElements={level}
            gameBoardRows={gameBoardRows}
            rowCount={rowCount}
            guessCount={guessCount}
            setRowCount={setRowCount}
            setGuessCount={setGuessCount}
            randomNums={randomNums}
          />
        </div>
        <div className="secret-container">
          <SecretCode 
            gameBoard={gameBoard} 
            randomNums={randomNums}
          />
        </div>
      </div>
    </div>
  );
  
}

export default App;
