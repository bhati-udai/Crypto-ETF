import React from "react";

function App() {
  return (
    <div className="bg-[#111318] min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center pb-8">
          <div className="text-white text-4xl font-bold ">Dashboard</div>
        </div>

        {/* Wallet Balance */}
        <div className="flex justify-between items-center bg-gray-800 rounded-lg py-4 px-6">
          <div className="text-white font-medium">Wallet Balance</div>
          <div className="text-white font-bold">$0.00</div>
        </div>

        {/* Pending Transactions */}
        <div className="text-white text-lg mt-4">Pending Transactions</div>

        {/* Connect Wallet Section */}
        <div className="bg-gray-800 rounded-lg py-6 px-8 mt-8">
          <h2 className="text-white text-xl font-medium mb-4">
            Connect a wallet
          </h2>
          <p className="text-white text-base mb-4">
            Connect to a wallet to manage your balance and transactions.
          </p>
          <button className="bg-[#1A80E6] text-white py-2 px-4 rounded-md font-medium">
            Connect Wallet
          </button>
        </div>

        {/* ETF Holdings Section */}
        <div className="bg-gray-800 rounded-lg mt-8">
          <h2 className="text-white text-xl font-medium py-4 px-6 border-b border-gray-700">
            Your ETF Holdings
          </h2>
          <table className="w-full text-white text-sm mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2">ETF Name</th>
                <th className="px-4 py-2">Shares</th>
                <th className="px-4 py-2">Market Price</th>
                <th className="px-4 py-2">Total Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Bitcoin ETF</td>
                <td className="px-4 py-2">0.0000</td>
                <td className="px-4 py-2">SO</td>
                <td className="px-4 py-2">$0.00</td>
              </tr>
              {/* ... more ETF rows can be added here dynamically based on data */}
            </tbody>
          </table>
        </div>

        {/* Buy or Sell ETF Shares Section */}
        <div className="bg-gray-800 rounded-lg mt-8 flex justify-between items-center py-6 px-8">
          <h2 className="text-white text-xl font-medium">
            Buy or Sell ETF Shares
          </h2>
          <div className="flex items-center">
            <button className="bg-[#1A80E6] text-white py-2 px-4 rounded-md mr-4 font-medium">
              Buy
            </button>
            <button className="bg-[#1A80E6] text-white py-2 px-4 rounded-md font-medium">
              Sell
            </button>
          </div>
        </div>

        {/* Order Details Section (placeholder) */}
        <div className="bg-gray-800 rounded-lg mt-8 hidden">
          <h2 className="text-white text-xl font-medium py-4 px-6 border-b border-gray-700">
            Review Order
          </h2>
          <div className="text-white text-base mb-4">
            {/* Order details will be displayed here dynamically */}
          </div>
          <button className="bg-[#1A80E6] text-white py-2 px-4 rounded-md font-medium">
            Review Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
