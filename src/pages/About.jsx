import React from 'react'
import "/src/App.css";

const About = () => {
  return (
    <>
        <section id='about'>
          <div className='lg:flex'>
            <div>
              <p className='px-2 py-[12px] bg-[#ffe8d9] rounded-xl text-[#bf4d00] w-[100px]'>About Prep</p>
              <p>Prep makes learning easy and fun! Study anytime, win rewards, and prepare for your big exams</p>
            </div>

            <div>
              <img src="/public/run.png" alt="" />
            </div>
          </div>
        </section>
    </>
  )
}

export default About
