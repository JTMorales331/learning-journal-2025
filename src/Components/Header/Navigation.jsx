import { RxHamburgerMenu } from 'react-icons/rx'

export default function Navigation({children}) {
  return (
    <>
      {/* shows in smaller screens */}
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn border p-0"><RxHamburgerMenu size={30}/></div>
        <ul
          tabIndex={0}
          className="menu dropdown-content rounded-box z-[1] mt-4 w-48 p-2 shadow">
          {children}
        </ul>
      </div>

      
      
      {/* shows in large screens */}
      <nav
        className='hidden lg:flex flex-row items-end justify-center gap-3'
        aria-label="Main Navigation"
      >
        {children}
      </nav>
    </>
  )
}
