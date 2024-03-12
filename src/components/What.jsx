import React from "react";
import wow from "../assets/etf.png";
const What = () => {
  return (
    <div className="w-full bg-[#111318] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4 rounded-lg" src={wow} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white">
            What are ETFs?
          </h1>
          <p className="text-[#4B5563]">
            ETFs (exchange-traded funds) are investment funds that are traded on
            stock exchanges, much like stocks. An ETF holds assets such as
            stocks, bonds, or futures contracts and aims to track the
            performance of a specific index.
          </p>
          <button className="bg-[#1A80E6] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Start trading
          </button>
        </div>
      </div>
    </div>
  );
};

export default What;
