import { Link, routes } from '@redwoodjs/router'
type NavButtonProps = {
  id: string
  style?: string
}

const NavButton = ({ id, style }: NavButtonProps) => {
  return (
    <Link to={routes.game({ id })}>
      <button
        className={`bg-gradient-to-r p-4 pr-20 pl-20 rounded-full uppercase text-xl ${style}`}
      >
        {id} Letters
      </button>
    </Link>
  )
}

export default NavButton
