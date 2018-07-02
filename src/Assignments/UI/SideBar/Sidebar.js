import React, { Component } from "react";
import Back from "../../../images/back3.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
  feattendance_sbar
} from "../../../actions/assignments";
class Sidebar extends Component {
  constructor() {
    super();
    this.Esbar = this.Esbar.bind(this);
    this.AnalyticSbar = this.AnalyticSbar.bind(this);
    this.fEsbar = this.fEsbar.bind(this);
    this.AssBar = this.AssBar.bind(this);
  }

  Esbar() {
    this.props.E_sbar();
    this.props.fassignments_sbar();
  }

  fEsbar() {
    this.props.feattendance_sbar();
  }

  AnalyticSbar() {
    this.props.analytic_sbar();
    //For Switchig
    this.props.feattendance_sbar();
  }

  AssBar() {
    this.props.assignments_sbar();
    this.props.feattendance_sbar();
  }

  render() {

if(this.props.inclass.Active=='assignment')
{

}


    return (
      <div className="sidebar" data-color="purple">
        <Link to={`/assignment`} className=" logo">
          <div className="simple-text">
            <a>
              <img className="transformbackbutton" src={Back} />
            </a>
          </div>
        </Link>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className={this.props.inclass.Active=='index' ? "active" : ""}>

              <Link to="/index">
                <i className="material-icons">search</i>
                <p>Analytics</p>
                </Link>

            </li>
            <li className={this.props.inclass.Active=='assignment1' ? "active" : ""}>

                <Link to={"/createassignment1"}>
                  <i className="material-icons">content_paste</i>
                  <p>Assignments</p>

                </Link>

            </li>
            <li>

              <Link to="/index">
                <i className="material-icons">library_books</i>
                <p>Book Store</p>
                </Link>

            </li>
            <li>

              <Link to="/index">
                <i className="material-icons">access_time</i>
                <p>Calendar</p>
                </Link>

            </li>

            <li className={this.props.inclass.Active=='assignment' ? "active" : ""}>

                <Link to="/assignement">
                  <i className="material-icons">computer</i>
                  <p>E-Attendance</p>
                </Link>

            </li>
            <li className="active-pro">

              <Link to="/index">
                <i className="material-icons">unarchive</i>
                <p>Upgrade to PRO</p>
                </Link>

            </li>
          </ul>
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
    assignment,
    bookstore,
    fassignment,
    inassignments,

    E_sbar,
    assignments_sbar,
    analytic_sbar,
    fanalytic_sbar,
    fassignments_sbar,
    feattendance_sbar
  })(Sidebar)
);
