import { MetaTags } from '@redwoodjs/web'

import Keyboard from 'src/components/Keyboard/Keyboard'

import { words } from '../../words'

const GamePage = ({ id }) => {
  // random integer between 0 and words[id].length
  const randomIndex = Math.floor(Math.random() * words[id].length)

  const word = words[id][randomIndex]

  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <h1>{id} Word Game</h1>

      <p>
        The word is: <strong>{word}</strong>
      </p>
      <Keyboard />
    </>
  )
}

export default GamePage
