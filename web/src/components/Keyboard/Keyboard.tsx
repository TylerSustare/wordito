import { Game } from 'src/types'

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'ENTER',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'DELETE',
]

interface Props {
  game: Game
  onGuess: (guess: string) => void
  onSubmit: () => void
}

const Keyboard = ({ game, onGuess, onSubmit }: Props) => {
  const guess = game.currentGuess
  return (
    <>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        {alphabet.slice(0, 10).map((letter) => (
          <button
            key={letter}
            className="rounded-lg p-4 bg-purple-400 m-1"
            onClick={() => {
              if (letter === 'DELETE') {
                onGuess(game.rounds[game.currentRound].pop())
              } else if (letter === 'ENTER') {
                onSubmit()
              } else {
                onGuess(guess + letter)
              }
            }}
          >
            {letter}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        {alphabet.slice(10, 19).map((letter) => (
          <button
            key={letter}
            className="rounded-lg p-4 bg-purple-400 m-1"
            onClick={() => {
              if (letter === 'DELETE') {
                onGuess(game.rounds[game.currentRound].pop())
              } else if (letter === 'ENTER') {
                onSubmit()
              } else {
                onGuess(guess + letter)
              }
            }}
          >
            {letter}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        {alphabet.slice(19, 28).map((letter) => (
          <button
            key={letter}
            className="rounded-lg p-4 bg-purple-400 m-1"
            onClick={() => {
              if (letter === 'DELETE') {
                onGuess(game.rounds[game.currentRound].pop())
              } else if (letter === 'ENTER') {
                onSubmit()
              } else {
                onGuess(guess + letter)
              }
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  )
}

export default Keyboard
