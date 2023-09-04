import React from "react";

const StateCard = (content) => {
  const { icon, bgColor, title, price, discount, color } = content;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div
          className="cardList my-2 text-white"
          style={{ backgroundColor: bgColor, color: color }}
        >
          <h4 style={{ color }}>{title}</h4>
          <h2 style={{ color }}>{price}</h2>
          <div
            className="icon d-flex justify-content-between"
            style={{ color }}
          >
            {icon}
            <p style={{ color }}>
              {discount} <span>from last month</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateCard;
