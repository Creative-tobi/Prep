import React from 'react'
import "/src/App.css";

const Donate = () => {
  return (
    <>
      <section id="donate">
        <div className="" style={{ placeItems: "center", margin: "20px" }}>
          <h1 className="font-semibold text-[40px] text-[#1c1d21] sm:px-8 text-center">
            Support a Child's Learning Journey
          </h1>
          <p className="text-[32px] font-thin text-[#3c3f47] text-center lg:px-50">
            Your donation helps us keep education accessible for every child —
            one lesson, one student, one future at a time.
          </p>

          <div className="lg:flex gap-12" style={{ margin: "6px 40px" }}>
            <div id="donatecard" className="bg-[#00246d]">
              <h1 className="text-[32px] text-white font-semibold">
                One-Time Donation
              </h1>
              <p className="text-white font-light">
                Make a one-time contribution to support free lessons, platform
                access, and data rewards for underserved students.
              </p>
              <button
                className="text-[#00246d] bg-[#e6eaf4] font-normal p-2 rounded-lg"
                style={{ margin: "6px 0" }}>
                Donate Once
              </button>
            </div>

            <div id="donatecard" className="bg-[#ff6600]">
              <h1 className="text-[32px] text-white font-semibold">
                Recurring Donation
              </h1>
              <p className="text-white font-light">
                Become a Prep Champion by giving monthly. Help us reach more
                learners and provide consistent, quality education.
              </p>
              <button
                className="text-[#00246d] bg-[#e6eaf4] font-normal p-2 rounded-lg"
                style={{ margin: "6px 0" }}>
                Set Up Monthly Gift
              </button>
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
}

export default Donate
