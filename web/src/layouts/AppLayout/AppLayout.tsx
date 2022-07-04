type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
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
          <>{children}</>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
