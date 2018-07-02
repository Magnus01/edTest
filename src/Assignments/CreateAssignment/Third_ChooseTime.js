import React, { Component } from 'react';



import {connect} from 'react-redux';
import Calendar from './Time_choice/choosetime2';
import {Sidebar} from '../../Assignments/UI';

import {fchoosetime,fsweetalert, bookstore,inassignments,fbookstore, finassignments,bookmovement, assignment, fstartassignment} from '../../actions/assignments';





class Dashboard extends Component {
    constructor() {
        super();
        this.moverassignment = this.moverassignment.bind(this);
        this.bookstore_mover = this.bookstore_mover.bind(this);
        this.moverindex = this.moverindex.bind(this);
        this.mover = this.mover.bind(this);
        this.moverassignment = this.moverassignment.bind(this);
        this.nextcss = this.nextcss.bind(this);
        this.goTo = this.goTo.bind(this);

    }

    mover() {
        this.props.fchoosetime();
        this.props.inassignments();
        this.goTo('assignment');
    }

    goTo(route) {
        console.log( 'route');
        console.log(this.props, 'this.props. what is history');
        this.props.history.replace(`/${route}`);
    }


    bookstore_mover () {
        this.props.fstartassignment();
        this.props.bookstore();
    }


    moverindex () {

        this.props.fstartassignment();
        this.props.assignment();
        // setTimeout(() => this.innerfunction(), 700);
    }

    moverassignment () {

        this.props.fstartassignment();
        this.props.inassignments();
        // setTimeout(() => this.innerfunction(), 700);
    }

    nextcss () {
        this.props.bookmovement();

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
<Sidebar/>
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
                                <div className="meetingdetailtopdiv makeclassrooms " style = {{marginTop: -15}}>
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
                                                <div className="bar">
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
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">library_books</i>
                                            <p className="hidden-lg hidden-md">Class</p>
                                        </a>
                                    </li>

                                </ul>
                                <form className="navbar-form navbar-right" role="search">
                                    <div className="form-group  is-empty">
                                        <input type="text" className="form-control" placeholder="Search"></input>
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
                        <div className="container-fluid" >
                            <div className="meetingdetailcontain float-left makeclassroom makeassignment3">
                            <div className="meetingdetailsmiddle makeclassroommiddle">

                                    <div className=" widthcalendar2" >
                                        <div className="widthcalendar">
                                            <h5>Start Date</h5>
                                            <Calendar/>

                                        </div>
                                        <div className="widthcalendar">
                                            <h5>EndDate</h5>
                                            <Calendar/>

                                        </div>
                                    </div>


                            </div>

                            <div className="width-calendar3 ">
                                <div className="div-book-14">
                                    <div className="div-book-13"></div>
                                    <div className="div-book-12"></div>
                                    <div className="div-book-15" ></div>
                                </div>
                                <div className="div-book-14 rightside">
                                    <div className="div-book-13"></div>
                                    <div className="div-book-12"></div>
                                    <div className="div-book-15" onClick ={this.mover}></div>
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
        user: state.user,
        inclass: state.inclass
    }
}


export default connect(mapStateToProps, {fchoosetime,fsweetalert,bookstore,inassignments,fbookstore, finassignments,bookmovement, assignment, fstartassignment})(Dashboard);
