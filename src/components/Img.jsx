import React from "react";
import introImg from "../assets/eth.jpeg";
const First = () => {
  return (
    <div>
      <div className="w-full bg-[#111318] py-0 border-b border-gray-600 max-w-[1000px] mx-auto h-[500px] max-h-[1000px] bg-gradient-to-tl from-purple-900 to-green-700 relative">
        <img
          className="rounded-lg h-[500px] w-full absolute object-cover  mix-blend-overlay "
          src={introImg}
          alt="/"
        />
        <div className="p-24">
          <h1 className="text-white text-6xl text-center font-bold ">
            Crypto ETF
          </h1>
          <div className="flex">
            <button className="absolute bg-[#1A80E6] text-white w-[200px] rounded-md font-medium my-16 inset-x-80 py-3">
              Connect Wallet
            </button>
            <p className="text-white text-2xl font-light mt-5">
              Once you've connected your wallet, you can trade instantly. No
              more waiting for orders to fill.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
