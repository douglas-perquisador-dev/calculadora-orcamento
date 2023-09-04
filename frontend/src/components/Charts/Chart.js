import Navbar from "../Navbar/Navbar";
import CardHeader from "./CardHeader";
import CircleChart from "./CircleChart";
import LineCharts from "./LineChart";
import PolarChart from "./PolarChart";
import TwoBarChart from "./TwoBarChart";
import "./chart.scss";

function Chart() {
  return (
    <div className="table-container">
      {/* navbar */}
      <Navbar />

      <section className="charts my-5">
        <div className="container">
          <div className="title">
            <h2>Chart.js</h2>
            <p>
              These charts are made using the Chart.js library. You can find
              more examples and ways to configure the charts in the{" "}
              <a href="" style={{ color: "blue" }}>
                Chart.js Documentation
              </a>
              .
            </p>
          </div>
          <div className="row mt-5">
            {/* Two bar chart */}
            <div className="col-lg-6 col-md-6">
              <div className="two_bar_chart mt-4">
                <div className="card">
                  <CardHeader title="Two bars" />
                  <div className="card-body p-3 ms-0">
                    <TwoBarChart />
                  </div>
                </div>
              </div>
            </div>

            {/* Line chart */}
            <div className="col-lg-6 col-md-6">
              <div className="two_bar_chart mt-4">
                <div className="card">
                  <CardHeader title="Line" />
                  <div className="card-body p-3 ms-0">
                    <LineCharts />
                  </div>
                </div>
              </div>
            </div>

            {/* circle chart */}
            <div className="col-lg-6 col-md-6">
              <div className="two_bar_chart mt-4">
                <div className="card">
                  <CardHeader title="Doughnut" />
                  <div className="card-body p-3 ms-0">
                    <CircleChart />
                  </div>
                </div>
              </div>
            </div>

            {/* circle chart */}
            <div className="col-lg-6 col-md-6">
              <div className="two_bar_chart mt-4">
                <div className="card">
                  <CardHeader title="Polar Area" />
                  <div className="card-body p-3 ms-0">
                    <PolarChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chart;
