import { Game } from 'src/types'

interface Props {
  game: Game
}
const Guess = ({ game }: Props) => {
  let cellKey = 0
  return (
    <div>
      {game.rounds.map((guess) => (
        <div
          key={cellKey++}
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          {guess.map((letter) => (
            <button
              key={cellKey++}
              className="rounded-lg p-0 bg-gray-400 m-1"
              style={{ minWidth: '3rem', minHeight: '3rem' }}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Guess
