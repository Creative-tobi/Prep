import React from 'react'
import hero from "/hero.png"
import "/src/App.css"

const Home = () => {
  return (
    <>
      <section id="home">
        <div id="back">
          <div>
            <p className="border-1 border-[#ff6600] rounded-xl px-2 py-1 w-[180px] text-white font-light">
              Learn, Grow and Shine
            </p>

            <h1 className="text-white font-bold lg:text-[86px] text-[36px] ">
              Unlock your best <font className="text-[#ff6600]">future</font>
            </h1>

            <p className="text-white font-normal text-md/6 font-2xl">
              Prep makes learning easy and fun! study anytime, win reward and{" "}
              <br />
              prepare for your big exams
            </p>

            <button
              className="bg-[#003091] px-3 py-2"
              style={{
                borderRadius: "0 12px 0 12px",
                margin: "20px 0",
                boxShadow: "2px 4px 8px #002060",
              }}>
              <a href="#" className="text-white font-normal text-2xl">
                Get started
              </a>
            </button>
          </div>

          <div>
            <img src="/girl.png" alt="" className="herogirl" />
          </div>
        </div>
      </section>
      <hr
        style={{
          borderBottom: "1px thin #00091ab7",
        }}
      />
    </>
  );
}

export default Home
