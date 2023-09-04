import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import StateCard from "./StateCard";
import cardDataContent from "./CardData";
import { InputLabel, Select, MenuItem, OutlinedInput } from "@material-ui/core";
import FormControl from '@mui/material/FormControl';
import "./state.scss";


const States = () => {
  const [cardData, setCardData] = useState(cardDataContent);
  const [selectedTitles, setSelectedTitles] = useState([]);

  const handleChange = (event) => {
    setSelectedTitles(event.target.value);
  };

  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="states my-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Stats</h2>
              <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-select-label">
                  Select title
                </InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={selectedTitles}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                >
                  {cardData.map((card) => (
                    <MenuItem key={card.title} value={card.title}>
                      {card.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="row mt-3">
              {cardData
                .filter((content) => selectedTitles.includes(content.title))
                .map((content, ind) => (
                  <StateCard key={ind} {...content} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default States;
