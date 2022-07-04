import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NavButton from 'src/components/NavButton/NavButton'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <NavButton
        id="4"
        style="bg-gradient-to-r from-cyan-400 via-cyan-200 dark:via-cyan-600 to-cyan-200"
      />
      <NavButton
        id="3"
        style="bg-gradient-to-r from-red-500 via-red-200 dark:via-red-600 to-red-200"
      />
    </>
  )
}

export default HomePage
