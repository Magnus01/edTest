import React, { Component } from 'react';


import {startassignment, bookstore, finassignments, assignment} from '../actions/assignments';
import { Link, withRouter } from "react-router-dom";

import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor() {
        super();
        this.moverassignment = this.moverassignment.bind(this);
        this.bookstore_mover = this.bookstore_mover.bind(this);
        this.start_assignment = this.start_assignment.bind(this);



    }

    moverassignment () {

        this.props.finassignments();
        this.props.assignment();
        // setTimeout(() => this.innerfunction(), 700);
    }

    start_assignment () {

        this.props.finassignments();
        this.props.startassignment();
        // setTimeout(() => this.innerfunction(), 700);
    }

    bookstore_mover () {
        this.props.finassignments();
        this.props.bookstore();
    }


    render() {
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
        ];
        return (


            <div className=" wrapper ScrollStyle">
                <div className="sidebar" data-color="purple" >

                    <div className="logo">
                        <div className="simple-text">

                        </div>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li >
                                <a onClick = {this.moverassignment} >
                                    <i className="material-icons">search</i>
                                    <p>Analytics</p>
                                </a>
                            </li>
                            <li className="active">
                                <a >
                                    <i className="material-icons" >content_paste</i>
                                    <p>Assignments</p>
                                </a>
                            </li>
                            <li >
                                <a onClick = {this.bookstore_mover}  >
                                    <i className="material-icons">library_books</i>
                                    <p>Book Store</p>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <i className="material-icons">access_time</i>
                                    <p>Calendar</p>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <i className="material-icons text-gray">computer</i>
                                    <p>E-Attendance</p>
                                </a>
                            </li>
                            <li className="active-pro">
                                <a href="upgrade.html">
                                    <i className="material-icons">unarchive</i>
                                    <p>Upgrade to PRO</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="main-panel">
                    <nav className="navbar navbar-transparent navbar-absolute">
                        <div className="container-fluid">
                            <div className="navbar-header">

                                <button type="button" className="navbar-toggle" data-toggle="collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                {/*<div className="card-nav-tabs" >General Analytics </div>*/}

                            </div>
                            <div className="collapse navbar-collapse">
                                {/*EDIT*/}

                                <div className="tab-centre">

                                    <Link   to="/createassignment1" className="form-control material-button-tab" onClick = {this.start_assignment}  >
                                    <p className="paddingleftmaterial" >Create Assignment </p></Link>
                                    <div className="tab-label-content" id="tab1-content">

                                        {/*<label for="Create Assignment"></label>*/}
                                        {/*<div className="tab-content">TAB 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet eget lectus eu congue. Nam finibus urna eget nisl aliquam, in dictum ligula feugiat. Donec mollis ligula purus, et interdum velit bibendum eget. Aliquam magna diam, tristique eu libero nec, sagittis finibus sapien. Cras a ex ultricies, faucibus elit sagittis, maximus nisi. Donec quis arcu sapien. Aenean risus nibh, varius sed porttitor a, ornare nec leo. Sed vitae lacus in ipsum varius sagittis. Ut in quam cursus, ullamcorper sapien posuere, laoreet elit. Suspendisse interdum, risus ut ultricies scelerisque, nibh est commodo leo, sed tristique nisl odio et turpis. Fusce pellentesque nunc nec arcu feugiat accumsan. Praesent mauris sem, eleifend sit amet tortor in, cursus vehicula arcu. Curabitur convallis sit amet nunc ac feugiat. Sed at risus id diam porta pretium id vel felis. Donec nec dui id nisl hendrerit laoreet eu id odio.</div>*/}
                                    </div>





                                    <div className="slide-centre "></div>

                                </div>


                                {/*EDIT*/}
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">library_books</i>
                                            <p className="hidden-lg hidden-md">Class</p>
                                        </a>
                                    </li>

                                </ul>
                                <form className="navbar-form navbar-right" role="search">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" placeholder="Search Assignments"></input>
                                        <span className="material-input"></span>
                                    </div>
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i>
                                        <div className="ripple-container"></div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="container-fluid">

                            <div className="div-block-7 uppy inassignment w-clearfix">

                                <div className="meetingdetailcontain float-left assignments">
                                    <div className="meetingdetailtopdiv">
                                        <div className="row-7 w-row">
                                            <div className="w-col w-col-4">
                                                <div className="text-block-10">Book points</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">Start Date</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">End Date</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">Chapter Name</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">% Done</div>
                                            </div>
                                        </div>
                                        <div className="row-8 w-row">
                                            <div className="w-col w-col-1">
                                                <div className="div-block-28"></div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div>
                                                    <div className="text-block-9 bookname">Python Programming</div>
                                                    <div className="text-block-9 points">100 points</div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">January 20th, 2017</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">January 25th, 2017</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">Ch. 1: Functions</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">52%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="meetingdetailcontain float-left assignments">
                                    <div className="meetingdetailtopdiv">
                                        <div className="row-7 w-row">
                                            <div className="w-col w-col-4">
                                                <div className="text-block-10">Book points</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">Start Date</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">End Date</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">Chapter Name</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-10">% Done</div>
                                            </div>
                                        </div>
                                        <div className="row-8 w-row">
                                            <div className="w-col w-col-1">
                                                <div className="div-block-28 pythonicon"></div>
                                            </div>
                                            <div className="w-col w-col-3">
                                                <div>
                                                    <div className="text-block-9 bookname">Python Programming</div>
                                                    <div className="text-block-9 points">100 points</div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">January 22th, 2017</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">January 25th, 2017</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">Ch. 1: Functions</div>
                                            </div>
                                            <div className="w-col w-col-2">
                                                <div className="text-block-9 bookname info">52%</div>
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
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom')
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {startassignment, bookstore, finassignments, assignment})(Dashboard);
