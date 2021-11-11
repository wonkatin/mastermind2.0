# Mastermind2.0

## Overview
Mastermind is a deductive reasoning game. The player's goal is to correctly identify the secret number combination code. Every guess the player attempts will be followed by feedback from the computer whether the user guessed a number correctly and/or if it was in the correct position. The player's task is to analyze the feedback and deduce the secret code. Ten guess attempts will be given.  
## Game Rules
* At the start of the game the computer will randomly select a combination code of four different numbers. 
* The possible numbers are 0, 1, 2, 3, 4, 5, 6, 7. Duplicates are allowed, for example: 3389 or 7567.
* The player has ten attempts to determine the secret code.
* Each guess attempt will be given feedback with one or more of the following responses: 
    * The player has guessed __  correct number(s). 
    * The player has guessed __ correct number(s) and its correct position. 
    * The player's guess was incorrect. 
* The feedback will not indicate which numbers it is referring to
* For example, if the secret code is 4556 and the players guesses 4357 the feedback for that guess would be: "The player has guessed 2 correct numbers and their correct position. 
* One must use logical deduction to determine the secret code. 
* A player who guesses the secret number combination code by their tenth attempt will win!
## Live Site
* link
* pics of site 

## Installation Instructions
    * install React
    * To run Mastermind2.0 fork and clone this repo 
    * in your terminal cd into the new directory
    * type $ npm install to install the required dependencies 
    * type $ npm start to run the React app
## Technologies Used
* explanations of the technologies used (including APIs)
## Wireframes
## User Stories
* As a user I want to be able to read the instructions so I can learn how to play the game.
* As as user I want to be able to select numbers and create a four number combination.
* As a user I want to be able to undo my guesses before I submit them.
* As a user I want to be able to submit my guess to check against the secret hidden combination 
* As a user I want to get feedback information about my guess so I can inform my next guess. Was one of my numbers correct? Was one of my numbers correct and in the right position? 
* As a user I want have ten chances to deduce the secret code.
* As a user I want to see how many guess attempts remain.
* As user I want to see if I have won or lost
* As a user I want to be able to make the game easier or harder.

## MVP
* Detailed instructions 
* A randomly generated four number secret code (using API)
* Ability to submit a guess and receive feedback about the guess 
* Ten chances to win
* Show secret code after win/lose 
## Stretch Goals
- Change numbers to color elements (ROYGBIV)
- Change feedback responses to colored element (red pegs signify right number and right position, white pegs signify just right number. For example, if the secret code is 4556 and the players guesses 5357 the feedback for that guess would be one red peg and one white peg.)
- Add undo option to remove guesses within a turn
- Add more levels, easier and harder 
- Add ability to see code before game is over (automatic loss)
- Ability to keep score (two player game) 


## Sprints
Wed: 
* create react app 
* add Readme with details
* get feedback about previous version of the game 
* review React

Thurs: 
* work on wireframes and conceptualize components 
* create game components 
* create game state and event handlers 
* update sprints 

Fri: 
* style game components

Sat: 

Sun: 

Mon:

## Approach Taken
## Unsolved Problems
## Resources Used


## RESTful routing chart 
## database ERDs


