import { MetaTags } from '@redwoodjs/web'

const GamePage = ({ id }) => {
  console.log(id)
  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <h1>GamePage</h1>
      <p>
        Find me in <code>./web/src/pages/GamePage/GamePage.tsx</code>
      </p>
      <p>
        My default route is named <code>game</code>, link to me with `
        {/* <Link to={routes.game()}>Game</Link>` */}
      </p>
    </>
  )
}

export default GamePage
