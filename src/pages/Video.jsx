import React from 'react'
import { IoIosPlayCircle } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
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
              style={{
                marginBottom: "32px",
                boxShadow: "0 4px 4px 0 #c9c9c9",
              }}>
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <MdFavoriteBorder
                  className="bg-white text-[20px] right-10 lg:left-100 rounded-full absolute"
                  style={{ marginTop: "8px" }}
                />
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
              style={{ marginBottom: "32px", boxShadow: "0 4px 4px 0 #c9c9c9" }}
              id="image">
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{
                  placeItems: "center",
                  marginBottom: "16px",
                  boxShadow: "0 4px 4px 0 #c9c9c9",
                }}>
                <MdFavoriteBorder
                  className="bg-white text-[20px] right-112 rounded-full absolute"
                  style={{ marginTop: "8px" }}
                />
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
              style={{ marginBottom: "32px", boxShadow: "0 4px 4px 0 #c9c9c9" }}
              id="image">
              <div
                className="bg-[#e6eaf4] rounded-md"
                style={{ placeItems: "center", marginBottom: "16px" }}>
                <MdFavoriteBorder
                  className="bg-white text-[20px] right-10 rounded-full absolute"
                  style={{ marginTop: "8px" }}
                />
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

          <div className="flex gap-[60px]" style={{marginBottom: "12px"}}>
            <div className="rounded-full border-1 bg-[#bobfdd] text-[28px] border-gray-200 bg-gray-400 text-white">
              <IoIosArrowBack />
            </div>

            <div className="rounded-full border-1 bg-[#bobfdd] text-[28px] border-gray-200 bg-gray-400 text-white">
              <IoIosArrowForward />
            </div>
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

export default Video
