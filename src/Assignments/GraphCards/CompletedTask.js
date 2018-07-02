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

class CompletedTask extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();
    var el = event.target;
    console.log("Div is Completed Task");
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
              <div className="card-header card-chart" data-background-color="pink">
                  <div className="ct-chart" >
                      <XYPlot

                          xType="ordinal"
                          stackBy="y"
                          height={150} width= {300}>
                          <DiscreteColorLegend
                              className="clustered-stacked-bar-chart-example"
                              orientation="vertical" items={[
                              {
                                  title: 'Done',
                                  color: '#12939A'
                              },
                              {
                                  title: 'Not',
                                  color: '#f24444'
                              }
                          ]}
                          />
                          <VerticalGridLines />
                          <HorizontalGridLines />
                          <XAxis   style={{
                              line: {stroke: '#ADDDE1'},
                              ticks: {stroke: '#ADDDE1'},
                              text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                          }}/>
                          <YAxis  style={{
                              line: {stroke: '#ADDDE1'},
                              ticks: {stroke: '#ADDDE1'},
                              text: {stroke: 'ffffff', fill: '#ffffff', fontWeight: 50}
                          }}/>
                          <VerticalBarSeries
                              color="#f24444"
                              // className="vertical-bar-series-red"
                              data={[
                                  {x: 'Python', y: 10},
                                  {x: 'Java', y: 5},
                                  {x: 'Fundamentals', y: 15}
                              ]}/>
                          <VerticalBarSeries
                              color="#12939A"
                              // className="vertical-bar-series-green"
                              data={[
                                  {x: 'Python', y: 12},
                                  {x: 'Java', y: 2},
                                  {x: 'Fundamentals', y: 11}
                              ]}/>
                      </XYPlot>

                  </div>
              </div>
              <div className="card-content">
                  <h4 className="title">Completed Tasks</h4>
                  <p className="category">Weekly Learner Performance</p>
              </div>
              <div className="card-footer">
                  <div className="stats">
                      <i className="material-icons">access_time</i> 1 task made since 7 days ago
                  </div>
              </div>
          </div>
      </div>


    );
  }
}

export default CompletedTask;
