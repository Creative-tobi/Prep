import React from 'react'

const Signup = () => {
  return (
    <>
      <div
        className="lg:flex gap-12"
        style={{ margin: "40px", placeItems: "center" }}>
        <form action="">
          <h1 className="text-[40px] text-normal text[#1c1d21]">
            Create Your Free Account
          </h1>
          <p>
            Get instant access to engaging lessons, smart rewards, and your
            learning dashboard.
          </p> <br />
          <input
            type="text"
            placeholder="Full Name"
            className="text-[#50545e] bg-[#f3f6ff] rounded-[12px] lg:w-100"
            style={{
              margin: "6px 4px",
              boxShadow: "0 2px 4px 0 #a3baffb4",
              padding: "16px 32px",
            }}
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Email Address"
            className="text-[#50545e] bg-[#f3f6ff] rounded-[12px] lg:w-100"
            style={{
              margin: "6px 4px",
              boxShadow: "0 2px 4px 0 #a3baffb4",
              padding: "16px 32px",
            }}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            className="text-[#50545e] bg-[#f3f6ff] rounded-[12px] lg:w-100"
            style={{
              margin: "6px 4px",
              boxShadow: "0 2px 4px 0 #a3baffb4",
              padding: "16px 32px",
            }}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            className="text-[#50545e] bg-[#f3f6ff] rounded-[12px] lg:w-100"
            style={{
              margin: "6px 4px",
              boxShadow: "0 2px 4px 0 #a3baffb4",
              padding: "16px 32px",
            }}
          />{" "}
          <br /> <br />
          <button
            className="bg-[#003091] px-[60px] py-[16px] lg:w-100"
            style={{ borderRadius: "0 12px 0 12px" }}>
            <a href="#" className="text-white">
              Create Account
            </a>
          </button>
          <p>
            Already have an account?{" "}
            <font className="text-[#003091]">Sign In</font>
          </p>
        </form>
        <div>
          <img
            src="./children.png"
            alt=""
            style={{ width: "710px", height: "500px", objectFit: "cover", borderRadius: "50px 0 0 50px"  }}
          />
        </div>

        
      </div>
    </>
  );
}

export default Signup
