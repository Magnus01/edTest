import React, { Component } from "react";

import { createclass, fmoveup, fdashboard } from "../actions/classroom";

import {
  fclassdashboard,
  classdashboard,
  fbookdashboard,
  bookdashboard,


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
  fcomponentsShow,
  activeC,
} from "../actions/assignments";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ClassroomCards from "./ClassroomCards/index";
import TopNav from "./TopNav/index";
import MainNav from "./MainNav/index";
import Cbook from "../C_Assignment";
import {Sidebar} from '../Assignments/UI';

import { StudentActivity, CompletedTask, EmailSub } from "./GraphCards";
import { MstudentActivity } from "./MainCards";
import { Link } from "react-router-dom";

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

class Dashboard extends Component {
  constructor() {
    super();
    this.assignment_mover = this.assignment_mover.bind(this);
    this.bookstore_mover = this.bookstore_mover.bind(this);
    this.active_component=this.active_component.bind(this);
    this.back = this.back.bind(this);
  }
  componentWillMount() {
this.active_component()

    }

  active_component()
  {
    let b='about';
this.props.activeC(b);
console.log("The value of B       " + b)
  }

  assignment_mover() {
    this.props.fassignment();
    this.props.inassignments();
  }

  bookstore_mover() {
    this.props.fassignment();
    this.props.bookstore();
  }

  back() {
    this.props.fassignment();
    this.props.createclass();
    this.goTo("classroom");
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
      <div className=" wrapper ScrollStyle">
      <Sidebar   d={this.active_component}/>

        <div className="main-panel">
          {

            // THe main navigation Bar
          }

          <MainNav />

          <div className="content">
            <div className="container-fluid">

{ this.props.chart.componentsShow ? null :<MstudentActivity />   }

              <div className="row">
                {
                  /// Class Room Cards Holding the Upar Four Labels of the Page
                }

{ this.props.chart.componentsShow ? <ClassroomCards /> : null   }

              </div>



              {
                //////
                //////////////////////////////////Graphs Portion ///////////////////////////     <Link to="/assignement">Assignment</Link>
              }

              <div className="row">
                {
                  //////////////////////////////////Student Activity///////////////////////////
                }
{ this.props.chart.componentsShow ? <StudentActivity /> : null   }




                {
                  //////////////////////////////////Completed Task///////////////////////////
                }

              { this.props.chart.componentsShow ? <CompletedTask /> : null   }

                {
                  //////////////////////////////////Email Subscription ///////////////////////////
                }
{ this.props.chart.componentsShow ? <EmailSub /> : null   }

              </div>
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
    activeC,
  })(Dashboard)
);
