import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Istudent from "../Istudent";
import { istudent_show, frowCard, icard } from "../../actions/charts.js";

//////////////////For PAgination///////////////
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

//Importing the Comopnents
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

let prev = 0;
let next = 0;
let last = 0;
let first = 0;

class Student_row extends Component {
  constructor() {
    super();
    this.istudent_onclick = this.istudent_onclick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
    this.handleFirstClick = this.handleFirstClick.bind(this);
    this.state = {
      show: [],
      currentPage: 1,
      PerPage: 2,
      content: {
        people: [
          {
            id: 1,
            name: "Ahmed",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System",
            age: 24,
            data: [
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
            ]
          },
          {
            id: 2,
            name: "Foo",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System",
            age: 25,
            data: [
              { x: 0, y: 3 },
              { x: 1, y: 4 },
              { x: 2, y: 5 },
              { x: 3, y: 6 },
              { x: 4, y: 7 },
              { x: 5, y: 8 },
              { x: 6, y: 9 },
              { x: 7, y: 8 },
              { x: 8, y: 1 },
              { x: 9, y: 0 }
            ]
          },
          {
            id: 3,
            name: "ALPHA",
            Dscription: "Student of Stavanger",
            Subject: "Master in Robotics",
            age: 25,
            data: [
              { x: 0, y: 3 },
              { x: 1, y: 7 },
              { x: 2, y: 5 },
              { x: 3, y: 8 },
              { x: 4, y: 3 },
              { x: 5, y: 8 },
              { x: 6, y: 5 },
              { x: 7, y: 8 },
              { x: 8, y: 1 },
              { x: 9, y: 0 }
            ]
          },
          {
            id: 4,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System",
            age: 25,
            data: [
              { x: 0, y: 4 },
              { x: 1, y: 3 },
              { x: 2, y: 8 },
              { x: 3, y: 6 },
              { x: 4, y: 2 },
              { x: 5, y: 8 },
              { x: 6, y: 5 },
              { x: 7, y: 8 },
              { x: 8, y: 5 },
              { x: 9, y: 0 }
            ]
          }
        ],
        pets: [
          {
            name: "Sweety",

            age: 3
          },
          {
            name: "Kitty",

            age: 5
          }
        ]
      }
    };
  }
  ///////////////Functions//////

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });

    console.log("CLICK EVENT");
  }

  handleLastClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: last
    });
  }
  handleFirstClick(event) {
    event.preventDefault();
    this.setState({
      currentPage: 1
    });
  }

  istudent_onclick(id) {
    console.log("This is ID " + id);

    <Istudent student={id} />;
    console.log("This is ID " + id);
    this.props.icard(id);
    this.props.frowCard();
    this.props.istudent_show();
  }

  render() {
    const { currentPage, PerPage } = this.state;
    const indexOfLastTodo = currentPage * PerPage;
    const indexOfFirstTodo = indexOfLastTodo - PerPage;
    const currentTodos = this.state.content.people.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    prev = currentPage > 0 ? currentPage - 1 : 0;
    last = Math.ceil(this.state.content.people.length / PerPage);
    next = last === currentPage ? currentPage : currentPage + 1;

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.state.content.people.length / PerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const Students_row = currentTodos.map((item, id) => (
      <div
        className="meetingdetailcontain float-left assignments"
        onClick={() => this.istudent_onclick(item)}
      >
        <div className="meetingdetailtopdiv">
          <div className="row-7 w-row">
            <div className="w-col w-col-4">
              <div className="text-block-10">Student Card</div>
            </div>
            <div className="w-col w-col-2">
              <div className="text-block-10">Description</div>
            </div>
            <div className="w-col w-col-2">
              <div className="text-block-10">Subjects</div>
            </div>
            <div className="w-col w-col-2">
              <div className="text-block-10">Stats</div>
            </div>
          </div>
          <div className="row-8 w-row">
            <div className="w-col w-col-1" />
            <div
              className="w-col w-col-3"
              onClick={() => this.istudent_onclick(item)}
            >
              <div>
                <div className="text-block-9 bookname">Name:</div>
                <div className="text-block-9 points">{item.name}</div>
              </div>
            </div>
            <div className="w-col w-col-2">
              <div className="text-block-9 bookname info">
                {item.Dscription}
              </div>
            </div>
            <div className="w-col w-col-2">
              <div className="text-block-9 bookname info">{item.Subject}</div>
            </div>
            <div className="w-col w-col-4">
              <XYPlot height={100} width={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis style={{}} />
                <YAxis />
                <LineSeries data={item.data} />
                <MarkSeries data={item.data} />
              </XYPlot>
            </div>
          </div>
        </div>
      </div>
    ));

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div>
        <div>
          <ul>{Students_row}</ul>
        </div>

        <div>
          <Pagination className="bg-info clearfix pull-right">
            <PaginationItem>
              {prev === 0 ? (
                <PaginationLink disabled>First</PaginationLink>
              ) : (
                <PaginationLink onClick={this.handleFirstClick} id={prev}>
                  First
                </PaginationLink>
              )}
            </PaginationItem>

            <PaginationItem>
              {prev === 0 ? (
                <PaginationLink disabled>Prev</PaginationLink>
              ) : (
                <PaginationLink onClick={this.handleClick} id={prev}>
                  Prev
                </PaginationLink>
              )}
            </PaginationItem>

            {pageNumbers.map((number, i) => (
              <PaginationItem
                active={pageNumbers[currentPage - 1] === number ? true : false}
              >
                <PaginationLink
                  onClick={this.handleClick}
                  key={number}
                  id={number}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              {currentPage === last ? (
                <PaginationLink disabled>Next</PaginationLink>
              ) : (
                <PaginationLink
                  onClick={this.handleClick}
                  id={pageNumbers[currentPage]}
                  href={pageNumbers[currentPage]}
                >
                  Next
                </PaginationLink>
              )}
            </PaginationItem>

            <PaginationItem>
              {currentPage === last ? (
                <PaginationLink disabled>Last</PaginationLink>
              ) : (
                <PaginationLink
                  onClick={this.handleLastClick}
                  id={pageNumbers[currentPage]}
                >
                  Last
                </PaginationLink>
              )}
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chart: state.charts,
    inclass: state.inclass,
    chart: state.charts
  };
}

export default connect(mapStateToProps, {
  istudent_show,
  frowCard,
  icard
})(Student_row);
