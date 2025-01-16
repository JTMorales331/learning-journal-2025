import { RxHamburgerMenu } from 'react-icons/rx'

export default function Navigation({children}) {
  return (
    <>
      {/* shows in large screens */}
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn"><RxHamburgerMenu size={30}/></div>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-[1] mt-4 w-48 p-2 shadow">
          {children}
        </ul>
      </div>

      
      
      {/* shows in screens smaller than large */}
      <nav
        className='hidden lg:flex flex-row items-center gap-3 mr-3'
        aria-label="Main Navigation"
      >
        {children}
      </nav>
    </>
  )
}
