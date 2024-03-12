import React from "react";
import stock from "../assets/bull-graph.svg";
const Box = ({ children }) => {
    
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "250px",
        height: "250px",
        border: "1px  solid #4B5563", // Add border with white color and 2px width
        margin: "5px", // Add margin for spacing
        background: "#1C2227",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-wrap items-center justify-center ">
      <Box>
        {" "}
        <div className="w-full  ">
          <img
            className="w-10 mx-auto mt-[1rem] bg-[#1C2227]"
            src={stock}
            alt=""
          />
          <h2 className="text-2xl px-2 text-left text-white">
            Trade instantly
          </h2>
          <p className="text-[#4B5563] px-2 text-left">
            Once you've connected your wallet, you can trade instantly. No more
            waiting for orders to fill.
          </p>
        </div>
      </Box>
      <Box>
        {" "}
        <div className="w-full  ">
          <img
            className="w-10 mx-auto mt-[1rem] bg-[#1C2227]"
            src={stock}
            alt=""
          />
          <h2 className="text-2xl px-2 text-left text-white">
            Buy and sell without waiting for orders to fill.
          </h2>
          <p className="text-[#4B5563] px-2 text-left">
            You can buy and sell at any time, without waiting for orders to
            fill.
          </p>
        </div>
      </Box>
      <Box>
        {" "}
        <div className="w-full  ">
          <img
            className="w-10 mx-auto mt-[1rem] bg-[#1C2227]"
            src={stock}
            alt=""
          />
          <h2 className="text-2xl px-2 text-left text-white">
            No rebalancing
          </h2>
          <p className="text-[#4B5563] px-2 text-left">
            We handle all the work of maintaining your target allocations. No
            need to worry about rebalancing.
          </p>
        </div>
      </Box>
      <Box>
        {" "}
        <div className="w-full  ">
          <img
            className="w-10 mx-auto mt-[1rem] bg-[#1C2227]"
            src={stock}
            alt=""
          />
          <h2 className="text-2xl px-2 text-left text-white">
            We handle all the work of maintaining your target allocations.
          </h2>
          <p className="text-[#4B5563] px-2 text-left">
            You can diversify your portfolio with just one click.
          </p>
        </div>
      </Box>
      <Box>
        {" "}
        <div className="w-full  ">
          <img
            className="w-10 mx-auto mt-[1rem] bg-[#1C2227]"
            src={stock}
            alt=""
          />
          <h2 className="text-2xl px-2 text-left text-white">
            Diversify in one click
          </h2>
          <p className="text-[#4B5563] px-2 text-left">
            We handle all the work of maintaining your target allocations. No
            need to worry about rebalancing.
          </p>
        </div>
      </Box>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default App;
