import React from "react";

const CardHeader = (props) => {
  return (
    <>
      <div
        className="card-header d-flex justify-content-between"
        style={{ backgroundColor: props.bgColor }}
      >
        <div className="tw-_bar">
          {props.icon ? (
            props.icon
          ) : (
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
          )}

          <b className="mx-3 card_title"> {props.title} </b>
        </div>
        <div class="dropdown" style={{display:props.style}}>
          <i
            className="fa fa-caret-down btn dropdown-toggle"
            aria-hidden="true"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
