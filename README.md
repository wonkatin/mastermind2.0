# Mastermind2.0

## Overview
Mastermind is a deductive reasoning game. The player's goal is to correctly identify the secret code (number combination). Every guess the player attempts will be followed by feedback from the computer whether the user guessed a number correctly and/or if it was in the correct position. The player's task is to analyze the feedback and deduce the secret code. Ten turns/guess attempts will be given.  
## Game Rules
* At the start of the game the computer will randomly select a combination code of four different numbers. 
* The possible numbers are 0, 1, 2, 3, 4, 5, 6, 7. Duplicates are allowed, for example: 3389 or 7567.
* The player has ten attempts to determine the secret code.
* Each guess attempt will be given feedback with one or more of the following responses: 
    * The player has guessed __  correct number(s). 
    * The player has guessed __ correct number(s) in the correct position. 
    * The player's guess was incorrect. 
* The feedback will not directly indicate which numbers are correct.
* For example, if the secret code is 4556 and the players guesses 4357 the feedback for that guess would be: "The player has guessed 2 correct numbers in the correct position. 
* One must use logical deduction to determine the secret code. 
* A player who guesses the secret code by their tenth attempt will win!

## Live Site
* link
* pics of site 

## Installation Instructions
* make sure you have Node installed 
* To run Mastermind2.0 fork and clone this repo 
* in your terminal cd into the new directory
* to install the required dependencies:  
    >`$ npm install` 
* to run the React app: 
    >`$ npm start` 

## Technologies Used
* explanations of the technologies used (including APIs)

## Approach Taken
## User Stories
#### MVP: 
* As a user I want to be able to read the instructions so I can learn how to play the game.
* As a user I want the computer to randomly generate a 4 number code so that I can try to deduce it.
* As as user I want to be able to select numbers and create a four number combination guess attempt.
* As a user I want to be able to submit my guess to check against the secret hidden combination 
* As a user I want to get feedback information about my guess so I can inform my next guess. 
    * Was one of my numbers correct? 
    * Was one of my numbers correct and in the right position? 
* As a user I want have ten chances to deduce the secret code.
* As a user I want to be able to see how many guess attempts remain.
* As user I want to see if I have won or lost
#### STRETCH GOALS: 
* As a user I want to be able to undo my guesses before I submit them.
* As a user I want to be able to forfeit and see the secret code to better understand the game.
* As a user I want to be able to make the game easier or harder for children or advanced users. 
* As a user I want to be able to track my score and play against others

## MVP
* Detailed instructions 
* A randomly generated four number secret code (using API)
* Ability to submit a guess and receive feedback about the guess 
* Ten chances to win
* Show secret code after win/lose 

## Wireframes
![welcome-wireframe](./public/wireframes/welcome.png)
![instructions-wireframe](./public/wireframes/instructions.png)
![game-wireframe](./public/wireframes/game.png)
![game-play-wireframe](./public/wireframes/gameplay.png)
![win-wireframe](./public/wireframes/win.png)
![game-over-wireframe](./public/wireframes/gameover.png)
## Stretch Goals
- Change numbers to color elements (Red, Orange, Yellow, Green, Blue, Indigo, Violet and White)
- Change feedback responses to colored element 
    * red pegs signify right number and right position
    * white pegs signify just right number 
    * For example, if the secret code is 4556 and the players guesses 5357 the feedback for that guess would be one red peg and one white peg
- Add undo option to remove guesses within that turn
- Add more levels, easier (less numbers no duplicates) and harder (more numbers)
- Add ability to see code before game is over (automatic loss/forfeit)
- Add animations
- Ability to keep score (two player game) 
- Add a turn timer


## Sprints
Wed: 
* create react app 
* add Readme with details
* get feedback about previous version of the game 
* review React

Thurs:
* hit API
* make wireframes and conceptualize components 
* update sprints 

Fri:
* create game components 
* update sprints 

Sat: 
* add event handlers
* add state variables

Sun: 
* GAME LOGIC 🍦🍦🍦

Mon:
* add welcome & instructions
* style game 
* add API info to Readme
* work on Readme more 

## Unsolved Problems
## Resources Used


## RESTful routing chart 
## database ERDs


