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

        <hr
          style={{
            borderBottom: "1px thin #00091ab7",
            marginBottom: "50px",
          }}
        />

        <div className="part2 bg-[#00246d]">
          <h2
            className="font-semibold text-[40px] text-white">
            Learn Smart. Earn Reward. Shine Brighter.
          </h2>

          <div
            className="lg:flex text-white">
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

        <hr
          style={{
            borderBottom: "1px thin #00091ab7",
            marginTop: "50px",
          }}
        />

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

            <div className="lg:flex gap-4" style={{ placeItems: "center" }}>
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
        <hr
          style={{
            borderBottom: "1px thin #00091ab7",
            marginBottom: "50px",
          }}
        />

        <div className="" style={{ placeItems: "center" }}>
          <h1 className="font-semibold text-[40px] text-[#1c1d21] sm:px-8 text-center">
            Learning for Every Level. Success for Every Studednt
          </h1>
          <p className="text-[32px] font-thin text-[#3c3f47] text-center lg:px-50">
            Our lessons are tailored to support students in Primary, Junior
            Secondary, and Senior Secondary school - so everyone can learn at
            their pace and thrive.{" "}
          </p>

          <div className="lg:flex gap-12 pt-6">
            <div
              className="border-1 border-[#b0bfdd] rounded-md p-2"
              style={{ marginBottom: "32px" }}>
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <img src="./read.png" alt="" />
              </div>

              <div className="p-4">
                <h1 h1 className="font-normal text-[32px] text-[#1c1d21]">
                  Primary
                </h1>
                <p className="text-[#3c3f47]">
                  Fun and engaging lessons in Mathematics, English and Science-
                  built to spark curiosity and give young learners a strong
                  academic foundation.
                </p>
              </div>
            </div>

            <div
              className="border-1 border-[#b0bfdd] rounded-md p-2"
              style={{ marginBottom: "32px" }}>
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <img src="./books.png" alt="" style={{ height: "256px" }} />
              </div>

              <div className="p-4">
                <h1 h1 className="font-normal text-[32px] text-[#1c1d21]">
                  Junior Secondary
                </h1>
                <p className="text-[#3c3f47]">
                  Clear, relatable lessons in Maths, English, and Basic Science
                  & Technology designed to help students build confidence and
                  solve real-world problems with ease.
                </p>
              </div>
            </div>

            <div
              className="border-1 border-[#b0bfdd] rounded-md p-2"
              style={{ marginBottom: "32px" }}>
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <img src="./schoolgirl.png" alt="" />
              </div>

              <div className="p-4">
                <h1 h1 className="font-normal text-[32px] text-[#1c1d21]">
                  Senior Secondary
                </h1>
                <p className="text-[#3c3f47]">
                  Tackle complex topics with simplified, easy-to-follow lessons
                  in Mathematics, English, Sciences, Arts, and Commercial
                  subjects — all tailored for exam success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr
        style={{
          borderBottom: "1px thin #00091ab7",
          marginBottom: "50px",
          marginTop: "30px",
        }}
      />
    </>
  );
};

export default About;
