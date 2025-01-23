import React from 'react'

export default function Intro({
  children,
  userIcon,
  userName
}) {
  return (
    <section className='mt-4'>
      <div className="container flex flex-col md:flex-row md:items-center md:gap-6">
        <img
          className="rounded-full w-64 mb-5"
          src={userIcon}
          alt="icon image of current user icon"
        />
        <div className="about-descriptions">
          <h1 className="text-2xl font-bold mb-1">Hi there! My name is {userName} and welcome to my learning journal.</h1>
          <p>{children}</p>
        </div>
      </div>
    </section>
  )
}
