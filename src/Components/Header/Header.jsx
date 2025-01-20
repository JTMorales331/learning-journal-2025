
export default function Header({children}) {
  return (
    <header className="navbar">
      <div className="container">
        <div className="flex-1">
          <a className="btn-ghost text-xl">Learning Journal</a>
        </div>

        {/* for navigation */}
        {children}

        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src='../../public/images/profilepic.JPG' />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div> */}
      </div>
    </header>
  )
}
