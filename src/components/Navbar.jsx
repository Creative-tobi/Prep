import React from 'react'
import logo from '/public/logo.png'
import "/src/App.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="" />
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#video">Video</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#donate">Donate</a>
          </li>
        </ul>
        <div className="flex gap-2" id='but'>
          <button
            className="bg-[#003091] px-1 py-2"
            style={{ borderRadius: "0 12px 0 12px" }}>
            <a href="#" className="text-white">
              Sign up
            </a>
          </button>

          <button
            className="bg-[#e6eaf4] px-1 py-2"
            style={{ borderRadius: "0 12px 0 12px" }}>
            <a href="#" className="text-[#003091]">
              Log in
            </a>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar
