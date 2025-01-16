import React from 'react'
import {Outlet} from 'react-router-dom'

// Components
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Main() {
  return (
    <div className="content-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
