import Cbook from "./Book";

import React, { Component } from "react";
import Student_row from "./Students/Student_row";
import { createclass, fmoveup, fdashboard } from "../actions/classroom";
import Istudent from "./Istudent";
import {
  fclassdashboard,
  classdashboard,
  fbookdashboard,
  bookdashboard
} from "../actions/classroom";

import {
  fbookcss,
  fclassroomcss,
  classroomcss,
  bookcss
} from "../actions/classroom";
import {
  fassignment,
  inassignments,
  bookstore,
  assignment,
  section,
  chapter,
  E_sbar,
  assignments_sbar,
  analytic_sbar,
  fanalytic_sbar,
  fassignments_sbar,
  feattendance_sbar,
  activeC
} from "../actions/assignments";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ClassroomCards from "../Assignments/ClassroomCards/index";
import TopNav from "../Assignments/TopNav/index";
import MainNav from "../Assignments/MainNav/index";
import { Link } from "react-router-dom";
//Importing the Comopnents
import Cchapter from "./Chapter";
import CExcersise from "./Excersice";
import CSection from "./Section";
import { Sidebar } from "../Assignments/UI";
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

class Dashboard extends Component {
  constructor() {
    super();
    this.Esbar = this.Esbar.bind(this);
    this.AnalyticSbar = this.AnalyticSbar.bind(this);
    this.fEsbar = this.fEsbar.bind(this);
    this.active_component = this.active_component.bind(this);
    this.state = {
      show: []
    };
  }

  componentWillMount() {
    this.active_component();
  }

  active_component() {
    let b = "assignment";
    this.props.activeC(b);
    console.log("The value of B" + b);
  }

  Esbar() {
    this.props.E_sbar();
  }
  fEsbar() {
    this.props.feattendance_sbar();
  }

  AnalyticSbar() {
    this.props.analytic_sbar();
    //For Switchig
    this.props.feattendance_sbar();
  }

  ///////////////Functions//////

  render() {
    console.log(this.props.user.sectionShow);
    return (
      <div className=" wrapper ScrollStyle">
        <Sidebar a={this.Esbar} b={this.fEsbar} e={this.active_component} />
        <div className="main-panel">
          {
            // THe main navigation Bar
          }

          <MainNav />

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                {
                  /// Class Room Cards Holding the Upar Four Labels of the Page
                }
              </div>

              {this.props.chart.Show_istudent ? <Istudent /> : null}
              {this.props.chart.row_card ? <Student_row /> : null}

              <div className="card-content" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "STATE IN showwclassrom");

  return {
    user: state.user,
    inclass: state.inclass,
    chart: state.charts
  };
}

export default withRouter(
  connect(mapStateToProps, {
    createclass,
    assignment,
    bookstore,
    fassignment,
    inassignments,

    E_sbar,
    assignments_sbar,
    analytic_sbar,
    fanalytic_sbar,
    fassignments_sbar,
    feattendance_sbar,
    activeC
  })(Dashboard)
);
