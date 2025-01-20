import { Outlet, NavLink } from 'react-router-dom'

// Components
import Header from '../Components/Header/index'
import Footer from '../Components/Footer'

export default function Main() {
  return (
    <div className="content-wrapper">
      <Header>
        <Header.Navigation>
          <div className="nav-item">
            <NavLink className={({isActive}) => isActive ? 'active-link hover:underline' : 'hover:underline'} to="/">Home</NavLink>
          </div>
          <div className="nav-item">
            <NavLink className={({isActive}) => isActive ? 'active-link hover:underline' : 'hover:underline'} to="/about">About Me</NavLink>
          </div>
        </Header.Navigation>
      </Header>
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
