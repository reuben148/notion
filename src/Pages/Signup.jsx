import React from "react";

function Signup() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <p className="text-3xl font-bold mb-6 text-center">Sign Up</p>
      <div className="text-center w-full max-w-md">
        <p className="mb-2 text-start font-serif">Email</p>
        <input
          type="text"
          placeholder="Enter your email address..."
          className="border border-gray-300 rounded px-4 py-2 w-full bg-gray-200"
        />
        <p className="text-start font-serif py-2">Password</p>
        <input
          type="password"
          placeholder="******"
          className="border border-gray-300 rounded px-4 py-2 w-full bg-gray-200"
        />

        <div className="border mt-5 rounded-[10px] bg-blue-100 border-blue-100 px-2 py-2">
          <div className="flex gap-2 mb-1">
            <i className="fa fa-info-circle text-xs mt-1" aria-hidden="true"></i>
            <p className="text-sm">Password must contain at least:</p>
          </div>

          <div className="flex gap-2 mb-1">
            <i className="fa fa-circle text-xs mt-1" aria-hidden="true"></i>
            <p className="text-sm">8 characters</p>
          </div>

          <div className="flex gap-2 mb-1">
            <i className="fa fa-circle text-xs mt-1" aria-hidden="true"></i>
            <p className="text-sm">1 Lowercase letter</p>
          </div>

          <div className="flex gap-2 mb-1">
            <i className="fa fa-circle text-xs mt-1" aria-hidden="true"></i>
            <p className="text-sm">1 uppercase letter</p>
          </div>

          <div className="flex gap-2">
            <i className="fa fa-circle text-xs mt-1" aria-hidden="true"></i>
            <p className="text-sm">1 digit (0-9)</p>
          </div>
        </div>

        <button className="text-sm border h-[50px] w-full rounded-[10px] text-white bg-black border-black mt-3">
          Continue
        </button>

        <hr className="mt-10" />
      </div>
    </div>
  );
}

export default Signup;
