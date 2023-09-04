import React from "react";
import CardHeader from "../Charts/CardHeader";

const CardListItem = (content) => {
  const { icon, bgColor ,para , title } = content;
  return (
    <>
      <div className="col-lg-6">
        <div className="card_details my-3">
          <div className="card">
            <CardHeader icon={icon} bgColor={bgColor}  title={title} />
            <div className="card-body p-3 ms-0">
              <p>
             {para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListItem;
