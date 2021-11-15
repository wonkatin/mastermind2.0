import { useState, useEffect } from 'react'
import GameBoard from './components/GameBoard'
import NewGameButton from './components/NewGameButton'
import NumberOptions from './components/NumberOptions'
import Outcome from './components/Outcome'
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

  // feedback array
  const [feedback, setFeedback] = useState([])
  // win state
  const [win, setWin] = useState(false)
  // game over state
  const [gameOver, setGameOver] = useState(false)

  // difficulty level
  const level = 4

  // number of rows in the game
  const gameBoardRows = 10

  // set game state
  useEffect(() => {
    newGame()
  }, [])

  // new game
  const newGame = () => {
    // get secret code
    getRandomNums()
    // set gameboard state
    let innerArray = []
    for(let i = 0; i < level; i ++) {
      innerArray.push(
        {
          value: "",
          color: "white"
        }
      )
    }
    const gameBoardArray = []
    for (let i = 0; i < gameBoardRows; i ++) {
      // make a copy of the array 10 x
      gameBoardArray.push([...innerArray])
    }
    setGameBoard(gameBoardArray)
    // set feedback state
    const feedbackArray = []
    const innerFeedback = [0,0]
    for (let i = 0; i < gameBoardRows; i ++) {
      // make a copy of the array 10 x
      feedbackArray.push([...innerFeedback])
    }
    setFeedback(feedbackArray)
  }

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

  useEffect(() => {
    console.log(feedback)

  }, [feedback])

  useEffect(() => {
    console.log(win)

  }, [win])

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
          {(win || gameOver) ? 
            <NewGameButton 
              setRowCount={setRowCount}
              setGuessCount={setGuessCount}
              setWin={setWin}
              setGameOver={setGameOver}
              newGame={newGame}
            /> 
            : 
            <NumberOptions 
              gameBoard={gameBoard}
              level={level}
              options={options}
              rowCount={rowCount}
              guessCount={guessCount}
              setGuessCount={setGuessCount}
              // setGuess={setGuess}
            />
          }
        </div>
        <div className="game-board-container">
          <GameBoard 
            gameBoard={gameBoard}
            feedback={feedback}
            numOfElements={level}
            gameBoardRows={gameBoardRows}
            rowCount={rowCount}
            guessCount={guessCount}
            setRowCount={setRowCount}
            setGuessCount={setGuessCount}
            randomNums={randomNums}
            setWin={setWin}
            win={win}
            setGameOver={setGameOver}
            gameOver={gameOver}
          />
        </div>
        <div className="secret-container">
          <SecretCode 
            gameBoard={gameBoard} 
            randomNums={randomNums}
            options={options}
            win={win}
            gameOver={gameOver}
          />
          <div className="outcome-container">
            <Outcome             
              win={win}
              gameOver={gameOver}
            />
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
