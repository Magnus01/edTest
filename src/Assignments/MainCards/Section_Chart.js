import React, { Component } from "react";
import { XYPlot, LineSeries, MarkSeries } from "react-vis";
import { fcomponentsShow } from "../../actions/assignments";
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

class Section_Chart extends Component {
  constructor(props) {
    super(props);
    this.Cshow = this.Cshow.bind(this);
  }

  Cshow() {
    this.props.fcomponentsShow();
  }
  handleClick(event) {
    event.preventDefault();
    var el = event.target;
    //setTimeout(() =>   this.Cshow(), 200);

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

        <div className="">
          <XYPlot height={350} width={800} color="#800000" stroke="#800000">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis
            title="Time in days For SECTION" position="start"
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "#000000", fill: "#000000", fontWeight: 50 }
              }}
            />
            <YAxis
            title="Students" position="end"
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "#000000", fill: "#000000", fontWeight: 50 }
              }}
            />
            <LineSeries data={data} />
            <MarkSeries data={data} />
          </XYPlot>
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    inclass: state.inclass
  };
}

export default connect(mapStateToProps, { fcomponentsShow })(Section_Chart);
