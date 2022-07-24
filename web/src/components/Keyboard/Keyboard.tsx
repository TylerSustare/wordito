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
  '<x',
]

const Keyboard = () => {
  return (
    <div>
      <div>
        {alphabet.slice(0, 10).map((letter) => (
          <button key={letter} className="rounded-lg p-4 bg-purple-400 m-1">
            {letter}
          </button>
        ))}
      </div>
      <div>
        {alphabet.slice(10, 19).map((letter) => (
          <button key={letter} className="rounded-lg p-4 bg-purple-400 m-1">
            {letter}
          </button>
        ))}
      </div>
      <div>
        {alphabet.slice(19, 28).map((letter) => (
          <button key={letter} className="rounded-lg p-4 bg-purple-400 m-1">
            {letter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Keyboard
