
export default function Header({children}) {
  return (
    <nav className="navbar py-3 px-2 md:px-3">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Learning Journal</a>
      </div>

      {children}

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src='images/profilepic.JPG' />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </nav>
  )
}
