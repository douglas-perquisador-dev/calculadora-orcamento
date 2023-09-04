import React from "react";
import Navbar from "../Navbar/Navbar";
import "./card.scss";
import CardListItem from "./CardListItem";

const cardData = [
  {
    title: "A card",
    icon: <i className="fa fa-bar-chart" aria-hidden="true"></i>,
    bgColor: "#F0F1F7",
    para: "Just a card that can be used to display some content, graphs, tables, and so on.",
  },
  {
    title: "Primary Header",
    icon: <i className="fa fa-bar-chart" aria-hidden="true"></i>,
    bgColor: "#3F84FC",
    para: "Just a card that can be used to display some content, graphs, tables, and so on.",
  },
  {
    title: "Success",
    icon: <i className="fa fa-bar-chart" aria-hidden="true"></i>,
    bgColor: "#1DAB47",
    para: "Just a card that can be used to display some content, graphs, tables, and so on.",
  },
  {
    title: "Danger Header",
    icon: <i className="fa fa-bar-chart" aria-hidden="true"></i>,
    bgColor: "#FC413F",
    para: "Just a card that can be used to display some content, graphs, tables, and so on.",
  },
];

const Card = () => {
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="cards_section my-5">
          <div className="container">
            <div className="title">
              <h2>Cards</h2>
              <p className="mt-4">
                Cards are simply Bootstrap cards with some added features for
                the dashboard environment.
              </p>
            </div>
            <div className="row mt-5">
              {cardData?.map((content, ind) => {
                return <CardListItem key={ind} {...content} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
