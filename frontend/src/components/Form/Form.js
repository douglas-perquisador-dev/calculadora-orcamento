import React from "react";
import Navbar from "../Navbar/Navbar";
import CardHeader from "../Charts/CardHeader";
import HorizontalLayout from "./HorizontalLayout";
import ComplexLayout from "./ComplexLayout";

const Form = () => {
  const style = "none";
  const bgColor = "#F0F0F0";

  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="forms_section my-5">
          <div className="container">
            <h2>Forms</h2>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-12">
              <div class="card spur-card my-2">
                <CardHeader
                  title="Simple Form"
                  style={style}
                  bgColor={bgColor}
                />
                <div class="card-body ">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlInput1">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control my-2"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Example select</label>
                      <select className="form-control my-2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect2">
                        Example multiple select
                      </label>
                      <select className="form-control my-2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Example textarea</label>
                      <textarea
                        className="form-control my-2"
                        rows="3"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-info my-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="card spur-card my-2">
                <CardHeader
                  title="Inline Form"
                  style={style}
                  bgColor={bgColor}
                />
                <div className="card-body ">
                  <form className="form-inline">
                    <label htmlFor="">email@example.com</label>
                    <div className="form-group mx-sm-3 my-2">
                      <div className="row">
                        <div className="col">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword2"
                            placeholder="Password"
                            style={{ width: "260px" }}
                          />
                        </div>
                        <div className="col">
                          <button type="submit" className="btn btn-info mb-2">
                            Confirm identity
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* horizontal layout */}
              <HorizontalLayout style={style} bgColor={bgColor} />
            </div>
          </div>

          {/* Complex layout */}
          <ComplexLayout style={style} bgColor={bgColor} />
        </section>
      </div>
    </>
  );
};

export default Form;
