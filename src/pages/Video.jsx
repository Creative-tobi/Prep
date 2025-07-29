import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import "/src/App.css";


const Video = () => {
  return (
    <>
      <section id="video">
        <div className="" style={{ placeItems: "center" }}>
          <h1 className="font-semibold text-[40px] text-[#1c1d21] sm:px-8 text-center">
            Explorer Our Rich Video Library
          </h1>
          <p className="text-[32px] font-thin text-[#3c3f47] text-center lg:px-50">
            Learn at your own pace with flexible subscription plans — choose
            from monthly, yearly, or lifetime access to unlock all lessons.
          </p>

          <div className="lg:flex gap-12 pt-6">
            <div
              className="border-1 border-[#b0bfdd] rounded-md p-2"
              style={{ marginBottom: "32px" }}>
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <img src="./teach.png" alt="" />
              </div>

              <div className="flex gap-30" style={{ placeItems: "center" }}>
                <div className="p-4">
                  <h1 h1 className="font-normal text-[32px] text-[#1c1d21]">
                    Mathematics
                  </h1>
                  <p className="text-[#3c3f47]">Linear Algebra.</p>
                </div>
                <IoIosPlayCircle className="text-4xl text-[#ff6600]" />
              </div>
            </div>

            <div
              className="border-1 border-[#b0bfdd] rounded-md p-2"
              style={{ marginBottom: "32px" }}
              id="image">
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <img src="./chemical.png" alt="" />
              </div>

              <div className="flex gap-30" style={{ placeItems: "center" }}>
                <div className="p-4">
                  <h1 h1 className="font-normal text-[32px] text-[#1c1d21]">
                    Chemistry
                  </h1>
                  <p className="text-[#3c3f47]">Chemical and Reactions.</p>
                </div>

                <IoIosPlayCircle className="text-4xl text-[#ff6600]" />
              </div>
            </div>

            <div
              className="border-1 border-[#b0bfdd] rounded-md p-2"
              style={{ marginBottom: "32px" }}
              id="image">
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <img
                  src="./lab.png"
                  alt=""
                  style={{ height: "280px", width: "600px" }}
                />
              </div>

              <div className="flex gap-30" style={{ placeItems: "center" }}>
                <div className="p-4">
                  <h1 h1 className="font-normal text-[32px] text-[#1c1d21]">
                    Biology
                  </h1>
                  <p className="text-[#3c3f47]">Micro-organisms.</p>
                </div>

                <IoIosPlayCircle className="text-4xl text-[#ff6600]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video
