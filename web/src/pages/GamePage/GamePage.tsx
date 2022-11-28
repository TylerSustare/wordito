import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Guess from 'src/components/Guess/Guess'
import Keyboard from 'src/components/Keyboard/Keyboard'
import { Game } from 'src/types'

import { words } from '../../words'

const RANDOM_NUMBER = Math.random()
const GamePage = ({ id }) => {
  // random integer between 0 and words[id].length
  const length = words[id].length
  const randomIndex = Math.floor(RANDOM_NUMBER * length)

  const word = words[id][randomIndex]

  const [game, setGame] = useState({
    currentGuess: '',
    currentRound: 0,
    length,
    rounds: [
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
    ],
    hints: [
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
      new Array(word.length).fill(''),
    ],
  } as Game)

  const onGuess = (guess: string) => {
    const newGame = { ...game }
    newGame.currentGuess = guess
    newGame.rounds[newGame.currentRound] = guess.split('')
    // limit newGame.rounds[newGame.currentRound] to word.length
    newGame.rounds[newGame.currentRound] = newGame.rounds[
      newGame.currentRound
    ].slice(0, 4)

    if (newGame.rounds[newGame.currentRound].length < word.length) {
      // fill the rest of the array with empty strings to length
      newGame.rounds[newGame.currentRound] = newGame.rounds[
        newGame.currentRound
      ].concat(new Array(word.length - guess.length).fill(''))
    }
    setGame(newGame)
  }

  const onSubmit = () => {
    const newGame = { ...game }
    newGame.currentRound = newGame.currentRound + 1
    newGame.currentGuess = ''
    setGame(newGame)
  }

  // if (guess.length === length) {
  //   if (guess.toLowerCase() === word) {
  //     alert('You win!')
  //   } else {
  //     alert('Not Yet')
  //   }
  // }

  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <h1 style={{ textAlign: 'center' }}>{id} Word Game</h1>

      <p style={{ textAlign: 'center' }}>
        The word is: <strong>{word}</strong>
      </p>

      {/* <p style={{ textAlign: 'center' }}> */}
      {/* The Guess is: <strong>{guess}</strong> */}
      {/* </p> */}
      <Guess game={game} />

      <Keyboard game={game} onGuess={onGuess} onSubmit={onSubmit} />
    </>
  )
}

export default GamePage
