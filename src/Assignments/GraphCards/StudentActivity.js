import React, { Component } from "react";
import { XYPlot, LineSeries, MarkSeries } from "react-vis";
import { fcomponentsShow} from "../../actions/charts";
import { connect } from "react-redux";

import {
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from "react-vis";

class StudentActivity extends Component {
  constructor(props) {
    super(props);
    this.Cshow=this.Cshow.bind(this);

  }

Cshow ()
{
  this.props.fcomponentsShow();
}

  handleClick(event) {
    event.preventDefault();
    var el = event.target;
setTimeout(() =>   this.Cshow(), 200);




    console.log("Div is Clicked");
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
          <div className="card-header card-chart" data-background-color="green">
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
            <h4 className="title">Student Activity</h4>
            <p className="category">
              <span className="text-success">
                <i className="fa fa-long-arrow-up" /> 55%{" "}
              </span>{" "}
              increase in todays activity.
            </p>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">access_time</i> updated 4 minutes
              ago
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.user,
    inclass: state.inclass,
      chart: state.charts

  };
}

export default connect(mapStateToProps, {fcomponentsShow})(StudentActivity);
