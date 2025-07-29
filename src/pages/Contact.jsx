import React from 'react'
// import "/src/App.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";




const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="flex bg-[#d9e0ef]">
          <div>
            <div>
              <img src="/logo.png" alt="" />
            </div>
            <p>
              Prep makes learning easy and fun! Study anytime, win rewards, and
              prepare for your big exams.
            </p>
          </div>

          <div
            className="flex"
            style={{
              borderTop: "2px solid black",
              borderLeft: "2px solid black", borderRadius: "20px"
            }}>
            <div>
              <p>CONTACTS</p>
              <p>+1 (323) 275-1718</p>
              <p>hello@logoipsum.com</p>
            </div>

            <div>
              <p>FOLLOW US</p>
              <div className="flex">
                <FaInstagram />
                <FaWhatsapp />
                <FaTelegramPlane />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
