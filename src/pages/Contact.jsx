import React from 'react'
// import "/src/App.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";




const Contact = () => {
  return (
    <>
      <section id="contact">
        <div
          className="lg:flex bg-[#d9e0ef] justify-between"
          style={{ padding: "20px 60px 0 60px" }}>
          <div>
            <div>
              <img src="/logo.png" alt="" />
            </div>
            <p className="lg:">
              Prep makes learning easy and fun! Study anytime, win rewards, and
              prepare for your big exams.
            </p>
          </div>

          <div
            className="flex gap-12 p-6"
            style={{
              borderTop: "2px solid #00246d",
              borderLeft: "2px solid #00246d",
              borderRadius: "20px 0 0 0",
            }}>
            <div>
              <p className='text-[#00246d] font-semibold pb-2'>CONTACTS</p>
              <p>+1 (323) 275-1718</p>
              <p>hello@logoipsum.com</p>
            </div>

            <div>
              <p className='text-[#00246d] font-semibold pb-2'>FOLLOW US</p>
              <div className="flex gap-2">
                <div className="border-1 rounded-full border-[#ff6600] p-2 text-[#ff6600]">
                  <FaInstagram />
                </div>
                <div className="border-1 rounded-full border-[#ff6600] p-2 text-[#ff6600]">
                  <FaWhatsapp />
                </div>
                <div className="border-1 rounded-full border-[#ff6600] p-2 text-[#ff6600]">
                  <FaTelegramPlane/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact
