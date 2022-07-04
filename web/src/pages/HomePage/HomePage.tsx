import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div id="app" className="bg-slate-50 h-screen dark:bg-slate-900">
        <header>
          <section className="h-32 grid grid-flow-row-dense grid-cols-1 grid-rows-1 gap-2 content-center items-center">
            <h1 className="text-6xl text-center dark:text-white uppercase">
              Wordito
            </h1>
          </section>
        </header>
        <div className="flex align-middle justify-center">
          <div className="h-56 grid grid-cols-1 dark:text-slate-200">
            <Link to={routes.home()}>
              <button
                className="bg-gradient-to-r from-cyan-400 via-cyan-200 dark:via-cyan-600 to-cyan-200
              p-4 pl-20 pr-20 rounded-full uppercase text-xl"
              >
                4 Letters
              </button>
            </Link>
            <Link to={routes.home()}>
              <button
                className="bg-gradient-to-r from-red-500 via-red-200 dark:via-red-600 to-red-200
              p-4 pr-20 pl-20 rounded-full uppercase text-xl"
              >
                3 Letters
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
