import React from "react";
import ComplexLayout from "../Form/ComplexLayout";
import Navbar from "../Navbar/Navbar";

const Setting = () => {
  return (
    <>
      <div className="dashboard-container">
        <Navbar />
        <section className="settings_section my-5">
          <div className="container">
            <h2>Settings</h2>
          </div>
          {/* setting */}
          <ComplexLayout />
        </section>
      </div>
    </>
  );
};

export default Setting;
