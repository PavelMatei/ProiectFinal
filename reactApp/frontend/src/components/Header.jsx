import React from 'react'

export default function Header() {
  return (
        // Page header with logo and tagline
        <header className="py-3 bg-light border-bottom ">  
            <div className="container">
                <div className="text-center my-3">
                    <h1 className="fw-bolder">Welcome to my blog!</h1>
                    <p className="lead mb-0">This is a fullstack blog app designed using React.js for the frontend!</p>
                    <p className="lead mb-0">For the backend part the app uses Node.js!</p>
                </div>
            </div>
        </header>
  )
}