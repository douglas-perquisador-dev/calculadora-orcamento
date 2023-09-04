import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./tables.scss";
import TableLayout from "./TableLayout";
import tableDataContent from "./TableDataContent";
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@material-ui/core";

// import ExtraTable from "./ExtraTable";

const tableColor = {
  bodyColor: "#212529",
  tableColor: "#343A40",
  textColor: "#fff",
  rowColor: "#F2F2F2",
};
const lightGray = "#F2F2F2";

const Tables = () => {
  const [selectedStyles, setSelectedStyles] = useState([]);

  const handleChange = (event) => {
    setSelectedStyles(event.target.value);
  };

  let tableComponents = selectedStyles.map((style) => {
    let tableComponent;
    switch (style) {
      case "Default table":
        tableComponent = (
          <TableLayout
            key={style}
            tableData={tableDataContent.filter((data) =>
              ["default"].includes(data.type)
            )}
            title="Default table"
          />
        );
        break;
      case "Hover table":
        tableComponent = (
          <TableLayout
            key={style}
            tableData={tableDataContent.filter((data) =>
              ["striped"].includes(data.type)
            )}
            title="Table with hover"
          />
        );
        break;
      case "Striped table":
        tableComponent = (
          <TableLayout
            key={style}
            tableData={tableDataContent.filter((data) =>
              ["light"].includes(data.type)
            )}
            lightGray={lightGray}
            title="Striped table"
          />
        );
        break;
      case "Dark table":
        tableComponent = (
          <TableLayout
            key={style}
            tableData={tableDataContent.filter((data) =>
              ["dark"].includes(data.type)
            )}
            tableColor={tableColor}
            title="Dark table"
          />
        );
        break;
      default:
        // Handle unknown table styles
        break;
    }
    return tableComponent;
  });

  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="tables_section my-5">
          <div className="container">
            <div className="d-flex">
              <h2>Tables</h2>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-select-label">
                  &nbsp; Names
                </InputLabel>
                <Select
                  labelId="demo-multiple-select-label"
                  id="demo-multiple-select"
                  multiple
                  value={selectedStyles}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {["Default table", "Hover table", "Striped table", "Dark table"].map((style) => (
                    <MenuItem key={style} value={style}>
                      {/* <Checkbox checked={selectedStyles.indexOf(style) > -1} />   */}
                      <ListItemText primary={style} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="row mt-4">{tableComponents}</div>
          </div>
        </section>
      </div>
      {/* <ExtraTable /> */}
    </>
  );
};

export default Tables;
