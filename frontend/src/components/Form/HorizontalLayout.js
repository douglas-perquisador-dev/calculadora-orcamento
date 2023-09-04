import React from "react";
import CardHeader from "../Charts/CardHeader";

const HorizontalLayout = (props) => {
  return (
    <>
      <div className="card spur-card my-2 mt-3">
        <CardHeader title="Horizontal Layout" style={props.style} bgColor={props.bgColor} />
        <div className="card-body ">
          <div>
            <form>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                />
              </div>
              <div>
                <label>Radios</label>
                <div>
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio my-2"
                    className="custom-control-input"
                  />
                  <label
                    for="customRadio1"
                    className="custom-control-label my-2"
                  >
                    &nbsp; Toggle this custom radio
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className="custom-control-input my-2"
                  />
                  <label for="customRadio2" className="custom-control-label">
                    &nbsp; Or toggle this other custom radio
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="customRadio3"
                    name="customRadio"
                    className="custom-control-input my-2"
                  />
                  <label for="customRadio3" className="custom-control-label">
                    &nbsp; This choice seems interesting
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="customRadio4"
                    name="customRadio"
                    className="custom-control-input my-2"
                  />
                  <label for="customRadio4" className="custom-control-label">
                    &nbsp; This one rather outlandish
                  </label>
                </div>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="customCheck1"
                  className="custom-control-input my-2"
                />
                <label for="customCheck1" className="custom-control-label">
                  &nbsp; Check this custom checkbox
                </label>
              </div>
              <button type="submit" className="btn btn-info my-3">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalLayout;
