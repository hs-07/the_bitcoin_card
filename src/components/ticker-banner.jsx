import React from "react";

const TickerBanner = () => {
  const tickers = [
    { text: "Cashbacks" },
    { text: "Offline usage" },
    { text: "Shopping" },
    { text: "Rewards" },
    { text: "Instant credit card" },
    { text: "Online use" },
  ];

  return (
    <div className="w-full overflow-x-hidden py-2 lg:py-4 bg-light_primary">
      <ul className="ticker flex items-center">
        {tickers.concat(tickers).map((ticker, index) => (
          <li
            className="mr-8 flex items-center text-[16px] lg:text-[24px] gap-2"
            key={index}
          >
            <img src="/star.svg" alt="" className="" />
            <div className="text-white font-sofia">{ticker.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TickerBanner;
