import React, { Component } from "react";
import { XYPlot, LineSeries, MarkSeries } from "react-vis";
import { Link } from "react-router-dom";
import { fcomponentsShow, componentsShow } from "../../actions/charts";
import {
  show_Section,
  fshow_Section,
  Show_Book,
  fShow_Book,
  Show_Exercise,
  fShow_Exercise
} from "../../actions/charts";
import { connect } from "react-redux";
import { Book_Chart, Excercise_Chart, Section_Chart } from "./index";

class MstudentActivity extends Component {
  constructor(props) {
    super(props);
    this.Cshow = this.Cshow.bind(this);
    this.Section_Show = this.Section_Show.bind(this);
    this.Exercise_Show = this.Exercise_Show.bind(this);
    this.Book_Show = this.Book_Show.bind(this);
  }

  Section_Show() {
    this.props.show_Section();
    this.props.fShow_Book();
    this.props.fShow_Exercise();
  }
  Book_Show() {
    this.props.Show_Book();
    this.props.fshow_Section();
    this.props.fShow_Exercise();
  }

  Exercise_Show() {
    this.props.fShow_Book();
    this.props.fshow_Section();
    this.props.Show_Exercise();
  }

  Cshow() {
    this.props.componentsShow();
  }

  handleClick(event) {
    event.preventDefault();
    var el = event.target;
    setTimeout(() => this.Cshow(), 200);
    console.log("Div is Clicked" + this.props.chart.Show_Section);
  }

  back() {}

  render() {
    const x = 100;
    const y = 100;
    const styles = {
      transform: `translate(${x}px, ${y}px)`
    };

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
      <div>
        <div className="card">
          <div className="card-header card-chart" data-background-color="green">
            <div className="col">
              {this.props.chart.Show_Book ? null : (
                <button className="btn btn-primary" onClick={this.Book_Show}>
                  BOOK
                </button>
              )}
              <button className="btn btn-primary" onClick={this.Exercise_Show}>
                Excersises
              </button>
              <button className="btn btn-primary" onClick={this.Section_Show}>
                Section
              </button>
              <button className="btn btn-primary">Chapter</button>

              <div className="icon-remove pull-right">
                <img
                  onClick={this.handleClick.bind(this)}
                  src={"images/cross.png"}
                  resizeMode={"contain"}
                  alt="Canvas Logo"
                  width={30}
                  height={30}
                  style={{ width: 40, height: 40 }}
                />
              </div>
            </div>
          </div>

          <div className="card-content">
            {this.props.chart.Show_Book ? <Book_Chart /> : null}
            {this.props.chart.Show_Section ? <Section_Chart /> : null}
            {this.props.chart.Show_Exercise ? <Excercise_Chart /> : null}

            <h4 className="title">Student Activity</h4>
            <p className="category">
              <span className="text-success">
                <i className="fa fa-long-arrow-up" /> 55%{" "}
              </span>{" "}
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

export default connect(mapStateToProps, {
  fcomponentsShow,
  componentsShow,
  show_Section,
  fshow_Section,
  Show_Book,
  fShow_Book,
  Show_Exercise,
  fShow_Exercise,
  fShow_Book
})(MstudentActivity);
