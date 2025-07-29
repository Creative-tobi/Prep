import React from "react";
import "/src/App.css";

const About = () => {
  return (
    <>
      <section id="about">
        <div
          className="lg:flex gap-40"
          style={{ placeItems: "center", margin: "60px 30px" }}>
          <div className="">
            <p className="px-2 py-[12px] bg-[#ffe8d9] rounded-xl text-[#bf4d00] w-[100px]">
              About Prep
            </p>
            <p className="text-[36px] font-thin text-[#3c3f47]">
              Prep makes learning easy and fun! Study anytime, win rewards, and
              prepare for your big exams
            </p>
          </div>

          <div>
            <img src="/run.png" alt="" className="w-350" />
          </div>
        </div>

        <div className="part2">
          <h2
            className="font-semibold text-[40px] text-white"
            style={{ textShadow: "2px 2px 5px #003091" }}>
            Learn Smart. Earn Reward. Shine Brighter.
          </h2>

          <div
            className="lg:flex text-white"
            style={{ textShadow: "2px 2px 2px #00091ab7" }}>
            <div className="p-8">
              <h1 className="text-[60px] font-semibold" id="text">
                1.
              </h1>
              <p>Sign Up Easily.</p>
              <p className="text-[#eeeeef]">
                Create your free prep account with just your phone number or
                email. it only take a minutes!
              </p>
            </div>

            <div className="p-8">
              <h1 className="text-[60px] font-semibold" id="text">
                2.
              </h1>
              <p>Earn Points and Unlock Rewards.</p>
              <p className="text-[#eeeeef]">
                Build your learning streak, earn points everyday, and redeem
                exciting rewards like free mobile data.
              </p>
            </div>

            <div className="p-8">
              <h1 className="text-[60px] font-semibold" id="text">
                3.
              </h1>
              <p>Sign Up Easily.</p>
              <p className="text-[#eeeeef]">
                Create your free prep account with just your phone number or
                email. it only take a minutes!
              </p>
            </div>
          </div>
        </div>

        <div
          className="lg:flex gap-20"
          style={{ placeItems: "center", margin: "60px 30px" }}>
          <div>
            <h1 className="font-semibold text-[40px] text-[#1c1d21]">
              Ready to Stat Learning and Earning?
            </h1>
            <p className="text-[32px] font-thin text-[#3c3f47]">
              Join thousands of students using Prep to watch fun lessons, earn
              points, and unlock awesome rewards like free mobile data. <br />
              It's free, simple, and made just for you!
            </p>

            <div className="lg:flex gap-4" style={{placeItems: "center"}}>
              <button
                className="border-1 border-[#003091] px-3 py-2"
                style={{
                  borderRadius: "0 12px 0 12px",
                  margin: "20px 0",
                  boxShadow: "2px 4px 8px #002060",
                }}>
                <a href="#" className="text-[#003091] font-normal text-2xl">
                  Get started
                </a>
              </button>

              <p className="text-[#ff6600] font-normal text-2xl">-It's Free!</p>
            </div>
          </div>

          <div>
            <img src="/herogirl.png" alt="" className="w-400" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
