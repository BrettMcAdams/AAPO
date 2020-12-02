import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <a className="nav__listItem" href="home">Home</a>
                <a className="nav__listItem" href="plumbing">Plumbing</a>
                <a className="nav__listItem" href="about">About</a>
                <a className="nav__listItem" href="testimonials">Testimonials</a>
                <a className="nav__listItem" href="contact">Contact Us</a>
            </ul>
        </nav>
    )
}

export default Navbar
