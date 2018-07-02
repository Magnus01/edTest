import React, { Component } from "react";
import { XYPlot, LineSeries, MarkSeries } from "react-vis";
import {
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from "react-vis";

class EmailSub extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();
    var el = event.target;
    console.log("Div is Clicked Email Sub");
  }

  render() {
    const data = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];

    return (
      <div onClick={this.handleClick.bind(this)} className="col-md-4">
        <div className="card">
          <div className="card-header card-chart" data-background-color="red">
            <div className="ct-chart">
              <XYPlot height={150} width={350}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis
                  style={{
                    line: { stroke: "#ADDDE1" },
                    ticks: { stroke: "#ADDDE1" },
                    text: { stroke: "ffffff", fill: "#ffffff", fontWeight: 50 }
                  }}
                />
                <YAxis
                  style={{
                    line: { stroke: "#ADDDE1" },
                    ticks: { stroke: "#ADDDE1" },
                    text: { stroke: "ffffff", fill: "#ffffff", fontWeight: 50 }
                  }}
                />
                <LineSeries data={data} />
                <MarkSeries data={data} />
              </XYPlot>
            </div>
          </div>
          <div className="card-content">
            <h4 className="title">Email Subscriptions</h4>
            <p className="category">Students Subscribed to classroom</p>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">access_time</i> 5 students
              subscribed since 7 days ago
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailSub;
