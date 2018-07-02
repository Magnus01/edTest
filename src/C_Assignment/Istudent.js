import React, { Component } from "react";

import PropTypes from 'prop-types';

import { connect } from "react-redux";
import {istudent_show, frowCard, icard, fistudent_show,rowCard} from '../actions/charts.js';
import {
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend
} from "react-vis";

import { XYPlot, LineSeries, MarkSeries } from "react-vis";






class Istudent extends Component {



  constructor(props) {
    super(props);

  }


  crossClick(){
this.props.fistudent_show();
this.props.rowCard();


  }
//col-md-3 col-md-offset-3
  render() {

    return (
      <div className="card">

      <div className="col-md-3">
      <h6>Name:</h6>
      <h6>Description:</h6>
      <h6>Subject:</h6>
      <h6>Age:</h6>
</div>

<div className="col-md-3">
<h6>{this.props.chart.icard.name}</h6>
<h6>{this.props.chart.icard.Dscription}</h6>
<h6>{this.props.chart.icard.Subject}</h6>
<h6>{this.props.chart.icard.age}</h6>
</div>
<div className="col-md-6">

<div className="icon-remove  pull-right">
  <img
    onClick={this.crossClick.bind(this)}
    src={"images/cross.png"}
    resizeMode={"contain"}
    alt="Canvas Logo"
    width={5}
    height={5}
    style={{ width: 25, height: 25 }}
  />
</div>
<h3>Performence</h3>


<XYPlot height={250} width={400}>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis style={{}} />
  <YAxis />
  <LineSeries data={this.props.chart.icard.data} />
  <MarkSeries data={this.props.chart.icard.data} />
</XYPlot>

</div>


      </div>
    );
  }
}


function mapStateToProps(state) {
  return {

    chart: state.charts
  };
}



export default connect(mapStateToProps, {
istudent_show, frowCard, icard, fistudent_show,rowCard
})( Istudent);
