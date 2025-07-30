import React from 'react'

const Login = () => {
  return (
    <>
      <div
        className="lg:flex gap-12"
        style={{ margin: "40px", placeItems: "center" }}>
        <div className='hidden lg:flex'>
          <img
            src="./kids.png"
            alt=""
            style={{
              width: "710px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "0 50px 50px 0",
            }}
          />
        </div>
        <form action="">
          <h1 className="text-[40px] text-normal text[#1c1d21]">
            Welcome Back!
          </h1>
          <p>
            Log in to continue learning, earning rewards, and tracking your
            progress.
          </p>{" "}
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
          <div className="flex lg:gap-40">
            <div className="flex">
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </div>
            <div>
              <p>
                <a
                  href="#"
                  className="text-[#003091]"
                  style={{ textDecoration: "underline" }}>
                  Forget Password
                </a>
              </p>
            </div>
          </div>
          <br /> <br />
          <button
            className="bg-[#003091] px-[60px] py-[16px] w-60 lg:w-100"
            style={{ borderRadius: "0 12px 0 12px" }}>
            <a href="#" className="text-white">
              Sign In
            </a>
          </button>
          <p>
            Don't have an account?{" "}
            <font className="text-[#003091]">Sign Up now</font>
          </p>
        </form>
        <div className="flex lg:hidden">
          <img
            src="./kids.png"
            alt=""
            style={{
              width: "710px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "50px 0 0 50px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Login
