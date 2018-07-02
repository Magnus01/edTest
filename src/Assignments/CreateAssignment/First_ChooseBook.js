import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Sidebar } from "../../Assignments/UI";
import AuthorContainer from "./Book_choice/AuthorContainer";
import BookContainer from "./Book_choice/BookContainer";

import OneBook from "./Book_choice/OneBook/OneBook";
import Book_UparNav from "./UIComponent/ChooseBook/UparNav";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import {
  getSingleCourse,
  getAllCourses,
  inassignments,
  fbookstore,
  finassignments,
  bookmovement,
  assignment,
  fstartassignment,
  activeC
} from "../../actions/assignments";

let prev = 0;
let next = 0;
let last = 0;
let first = 0;

class Dashboard extends Component {
  constructor() {
    super();
    this.moverassignment = this.moverassignment.bind(this);
    this.bookstore_mover = this.bookstore_mover.bind(this);
    this.moverindex = this.moverindex.bind(this);
    this.moverassignment = this.moverassignment.bind(this);
    this.nextcss = this.nextcss.bind(this);
    this.rendercourses = this.rendercourses.bind(this);
    this.active_component = this.active_component.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLastClick = this.handleLastClick.bind(this);
    this.handleFirstClick = this.handleFirstClick.bind(this);
    this.state = {
      currentPage: 1,
      PerPage: 6,
      LowerShelv: 1,
      ab: false,
      content: {
        book: [
          {
            id: 1,
            name: "Ahmed",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 2,
            name: "Foo",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 3,
            name: "ALPHA",
            Dscription: "Student of Stavanger",
            Subject: "Master in Robotics"
          },
          {
            id: 4,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },

          {
            id: 5,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 6,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },

          {
            id: 7,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 7,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 7,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 7,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 7,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 7,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          },
          {
            id: 7,
            name: "BETA",
            Dscription: "Student of NTNU",
            Subject: "Master in Information System"
          }
        ]
      }
    };
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

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });

    console.log("CLICK EVENT");
  }

  componentWillMount() {
    this.props.getAllCourses();
    this.active_component();
  }

  componentDidMount() {
    if (this.props.inclass.courses.length == 1) {
      this.setState({
        ab: true
      });
    } else {
      this.setState({
        ab: true
      });
    }
  }

  moverassignment() {
    this.props.fstartassignment();
    this.props.assignment();
    // setTimeout(() => this.innerfunction(), 700);
  }

  bookstore_mover() {
    this.props.fstartassignment();
    this.props.bookstore();
  }

  moverindex() {
    this.props.fstartassignment();
    this.props.assignment();
    // setTimeout(() => this.innerfunction(), 700);
  }

  moverassignment() {
    this.props.fstartassignment();
    this.props.inassignments();
    // setTimeout(() => this.innerfunction(), 700);
  }

  nextcss() {
    this.props.bookmovement();
  }

  active_component() {
    let b = "assignment1";
    this.props.activeC(b);
    console.log("The value of B" + b);
  }

  rendercourses() {


   const filterResults=this.state.content.book.filter((title,id)=>{
     return title.name.toString().toLowerCase().indexOf(this.props.inclass.SearchBar.toString().toLowerCase()) > -1
   })

    const { currentPage, PerPage } = this.state;
    const indexOfLastTodo = currentPage * PerPage;
    const indexOfFirstTodo = indexOfLastTodo - PerPage;

    const currentTodos = filterResults.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );

    const uparShelv = currentTodos.slice(0, 3);
    const lowerShelv = currentTodos.slice(3, 7);

    prev = currentPage > 0 ? currentPage - 1 : 0;
    last = Math.ceil(filterResults.length / PerPage);
    next = last === currentPage ? currentPage : currentPage + 1;

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(filterResults.length / PerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div className=" wrapper ScrollStyle">
        <Sidebar />
        <div className="main-panel">
          <Book_UparNav />
          <div className="content">
            <div className="container-fluid">
              <div className="section _3dchild">
                <div className="pagecontain-copy">
                  <div className="div-block-6 upper">
                    <div className="div-block-7 uppy inclass w-clearfix">
                      <Pagination className="bg-info clearfix pull-right">
                        <PaginationItem>
                          {prev === 0 ? (
                            <PaginationLink disabled>First</PaginationLink>
                          ) : (
                            <PaginationLink
                              onClick={this.handleFirstClick}
                              id={prev}
                            >
                              First
                            </PaginationLink>
                          )}
                        </PaginationItem>
                        <PaginationItem>
                          {prev === 0 ? (
                            <PaginationLink disabled>Prev</PaginationLink>
                          ) : (
                            <PaginationLink
                              onClick={this.handleClick}
                              id={prev}
                            >
                              Prev
                            </PaginationLink>
                          )}
                        </PaginationItem>

                        {pageNumbers.map((number, i) => (
                          <PaginationItem
                            active={
                              pageNumbers[currentPage - 1] === number
                                ? true
                                : false
                            }
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

                      <div className="meetingdetailcontain float-left bookstores">
                        <div className="meetingdetailsmiddle makeclassroommiddle meetingbooks_all_container">
                          <div className="div-book-5 form">
                            {uparShelv.map((title, id) => (
                              <BookContainer
                                title={title}
                                id={id}
                                nextcss={this.nextcss}
                                bookmovement={this.props.inclass.bookmovement}
                                getSingleCourse={this.props.getSingleCourse}
                              />
                            ))}

                            <div className="shelf-copy" />
                          </div>

                          <div className="div-book-5 form">
                            {lowerShelv.map((title, id) => (
                              <BookContainer
                                title={title}
                                id={id}
                                nextcss={this.nextcss}
                                bookmovement={this.props.inclass.bookmovement}
                                getSingleCourse={this.props.getSingleCourse}
                              />
                            ))}
                            <div className="shelf-copy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
      <div>
        {this.props.inclass.courses.length > 0 ? (
          this.rendercourses()
        ) : (
          <span>Loading data</span>
        )}
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
  getSingleCourse,
  getAllCourses,
  inassignments,
  fbookstore,
  finassignments,
  bookmovement,
  assignment,
  fstartassignment,
  activeC
})(Dashboard);
