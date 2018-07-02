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

class Excercise_Chart extends Component {
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
      { x: 0, y: 3 },
      { x: 1, y: 8 },
      { x: 2, y: 5 },
      { x: 3, y: 6 },
      { x: 4, y: 1 },
      { x: 5, y: 2 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];

    return (

        <div className="">
          <XYPlot height={350} width={800} color="#F00" stroke="#F00">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis
            title="Time in days For Excersises" position="start"
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

export default connect(mapStateToProps, { fcomponentsShow })(Excercise_Chart);
