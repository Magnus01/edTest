import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import SortableTree, {
  getTreeFromFlatData,
  getFlatDataFromTree
} from "react-sortable-tree";

import { Sidebar } from "../../Assignments/UI";

import {
  gettreedata,
  fetchChapters,
  choosetime,
  fsweetalert,
  bookstore,
  inassignments,
  fbookstore,
  finassignments,
  bookmovement,
  assignment,
  fstartassignment
} from "../../actions/assignments";
import TreeData from "./Chapter_choice/index";

const myTreeData2 = [
  {
    name: "Introduction",
    id: 1,
    children: [
      {
        name: "Radio",
        id: 2,
        children: [
          { name: "Python", size: 101, id: 3 },
          { name: "Control", size: 101, id: 4 }
        ]
      },
      {
        name: "Radio",
        id: 5,
        children: [
          { name: "Tree", size: 101, id: 6 },
          { name: "Control", size: 101, id: 7 }
        ]
      }
    ]
  }
];

const myTreeData3 = [
  {
    name: "Control Flow",
    parent: null,
    id: "6b024d79-7a0a-4b05-a213-28a6d76e4227",
    treeIndex: 0,
    children: [
      {
        name: "If Statements",
        parent: "6b024d79-7a0a-4b05-a213-28a6d76e4227",
        id: "f481aa93-7218-4356-809a-fcfdab92c476",
        treeIndex: 1
      },
      {
        name: "For Loops",
        parent: "6b024d79-7a0a-4b05-a213-28a6d76e4227",
        id: "7eadec5b-c609-4651-a380-4bbbe9fa03e7",
        treeIndex: 2
      },
      {
        name: "Functions",
        parent: "6b024d79-7a0a-4b05-a213-28a6d76e4227",
        id: "fffdcbc2-ebc2-4ab4-a49b-8c8f4395e83d",
        treeIndex: 3
      }
    ]
  }
];

class Dashboard extends Component {
  constructor() {
    super();
    this.moverassignment = this.moverassignment.bind(this);
    this.bookstore_mover = this.bookstore_mover.bind(this);
    this.moverindex = this.moverindex.bind(this);
    this.moverassignment = this.moverassignment.bind(this);
    this.nextcss = this.nextcss.bind(this);
    // this.getTreeFromFlatDatafunction = this.getTreeFromFlatDatafunction.bind(this);
    this.mover = this.mover.bind(this);
    this.innerfunction = this.innerfunction.bind(this);

    this.state = {
      data: []
    };
  }

  // componentWillMount() {
  //     console.log(this.props.inclass.singlecourse, 'this.props.inclass.singlecourse');
  //
  //
  //
  // }

  componentWillMount() {
    this.innerfunction();
  }

  innerfunction() {
    this.props.fetchChapters(this.props.inclass.singlecourse.id);
  }

  componentDidMount() {
    //  setTimeout(() => this.innerfunction(), 2500);
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

  mover() {
    this.props.fsweetalert();
    this.props.choosetime();
  }

  moverassignment() {
    this.props.fstartassignment();
    this.props.inassignments();
    // setTimeout(() => this.innerfunction(), 700);
  }

  nextcss() {
    this.props.bookmovement();
  }

  renderTree() {
    return (
      <div className=" wrapper ScrollStyle">
        <div>
          <Sidebar />
          <div className="main-panel">
            <nav className="navbar navbar-transparent navbar-absolute">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  {/*<div className="card-nav-tabs" >General Analytics </div>*/}
                </div>
                <div className="collapse navbar-collapse">
                  <div
                    className="meetingdetailtopdiv makeclassrooms "
                    style={{ marginTop: -15 }}
                  >
                    <div className="meetingdetailtopdiv-copy makeclassrooms">
                      <div className="div-block-10">
                        <div className="progressbar">
                          <div className="bar">
                            <div className="bubble">
                              <div className="classinfo">
                                <div className="text-block-5">Info</div>
                              </div>
                            </div>
                          </div>
                          <div className="bar">
                            <div className="bubble">
                              <div className="classinfo">
                                <div className="text-block-5">Book</div>
                              </div>
                            </div>
                          </div>
                          <div className="bar _2">
                            <div className="bubble">
                              <div className="classinfo">
                                <div className="text-block-5">Chapter</div>
                              </div>
                            </div>
                          </div>
                          <div className="bar _2 _3 end">
                            <div className="bubble">
                              <div className="classinfo">
                                <div className="text-block-5">Schedule</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*EDIT*/}
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a
                        href="#pablo"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i className="material-icons">library_books</i>
                        <p className="hidden-lg hidden-md">Class</p>
                      </a>
                    </li>
                  </ul>
                  <form className="navbar-form navbar-right" role="search">
                    <div className="form-group  is-empty">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <span className="material-input" />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-white btn-round btn-just-icon"
                    >
                      <i className="material-icons">search</i>
                      <div className="ripple-container" />
                    </button>
                  </form>
                </div>
              </div>
            </nav>

            <div className="content">
              <div className="container-fluid">
                <div className="meetingdetailcontain float-left makeclassroom makeassignment3">
                  <div className="meetingdetailsmiddle makeclassroommiddle">
                    <div className=" widthcalendar2 ">
                      <div className="widthcalendar ">
                        <h3 className="h3choosechapterToc">Choose Chapter</h3>
                        <div className="border-right-toc">
                          <div
                            style={{
                              transform: "scale(1.5, 1.5)",
                              marginLeft: -230,
                              marginTop: 50
                            }}
                          >
                            {this.props.inclass.myTreeData ? (
                              <TreeData data={this.props.inclass.myTreeData} />
                            ) : null}
                          </div>
                        </div>

                        <div className="border-rightside-toc">
                          {/*<div className="cross-button"*/}
                          {/*onClick={ () => this.fbookmovementstate()} style= {{"marginLeft": 200}} >*/}
                          {/*<div className="leftcross-button" ></div>*/}
                          {/*<div className="leftcross-button-right"></div>*/}
                          {/*</div>*/}
                          <div className="div-book-40">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse varius enim in eros{" "}
                            </p>
                          </div>
                          <div className="w-row">
                            <div  className="w-col w-col-6">

                              <a
                                className="button-6 w-button select-button"
                                onClick={this.mover}
                                style={{ marginLeft: 50 }}
                              >
                                <Link to ="/createassignment3">
                                Choose
                                </Link>
                              </a>

                            </div>
                            <div className="w-col w-col-6">
                              <a
                                className="button-6 w-button"
                                style={{ marginLeft: 20 }}
                                onClick={() => this.exercise()}
                              >
                                Tour Book
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="width-calendar3 " style={{ marginTop: -20 }}>
                    <div className="div-book-14">
                      <div className="div-book-13" />
                      <div className="div-book-12" />
                      <div className="div-book-15" />
                    </div>
                    <div className="div-book-14 rightside">
                      <div className="div-book-13" />
                      <div className="div-book-12" />
                      <div
                        className="div-book-15"
                        onClick={this.getTreeFromFlatDatafunction}
                      />
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
        {(this.props.inclass.myTreeData.length > 0 && this.props.inclass.chapteranalytics.length) > 1 ? (
          this.renderTree()
        ) : (
          <span>Loading data</span>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "STATE IN showwclassrom");
  return {
    user: state.user,
    inclass: state.inclass
  };
}

export default connect(mapStateToProps, {
  gettreedata,
  fetchChapters,
  choosetime,
  fsweetalert,
  bookstore,
  inassignments,
  fbookstore,
  finassignments,
  bookmovement,
  assignment,
  fstartassignment
})(Dashboard);
