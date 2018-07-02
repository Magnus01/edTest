import React, { Component } from 'react';

import {createclass,fmakeclass2,fmakeclass3, dashboard, fcreateclass,fdashboard, moveup} from '../actions/classroom';

import {connect} from 'react-redux';


import { Redirect } from 'react-router';


class Dashboard extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.innerfunction = this.innerfunction.bind(this);
        this.mover = this.mover.bind(this);
        this.MoveToUser = this.MoveToUser.bind(this);
        // this.goTo = this.goTo.bind(this);
        this.state =
            {

                profile: '',
                redirect: false
            };
    }
















    innerfunction () {
        this.props.fmakeclass2();
        this.props.dashboard();

        // this.props.fmoveup();
    }

    multiple () {
        this.props.moveup();
        setTimeout(() => this.innerfunction(), 700);
    }

    mover () {
        this.props.fmakeclass3();
        this.setState({redirect: true});

    }


    MoveToUser () {

        this.props.fcreateclass();
        this.props.User();
        // setTimeout(() => this.innerfunction(), 700);
    }


    render() {


        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }

        return (


            <div className=" wrapper ScrollStyle">
                <div className="sidebar" data-color="purple" >

                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">

                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li className="active">
                                <a>
                                    <i className="material-icons">group</i>
                                    <p>Classroom
                                    </p>
                                </a>
                            </li>
                            <li>
                                <div onClick = {this.MoveToUser}>
                                    <a >
                                        <i className="material-icons">person</i>
                                        <p>User Profile</p>
                                    </a>
                                </div>
                            </li>

                            <li className="active-pro">

                                <a >
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
                                <div className="navbar-brand">Classroom Management </div>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">Class</i>
                                            <p className="hidden-lg hidden-md">Class</p>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">notifications</i>
                                            <span className="notification">5</span>
                                            <p className="hidden-lg hidden-md">Notifications</p>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="#">Mike John responded to your email</a>
                                            </li>
                                            <li>
                                                <a href="#">You have 5 new tasks</a>
                                            </li>
                                            <li>
                                                <a href="#">You're now friend with Andrew</a>
                                            </li>
                                            <li>
                                                <a href="#">Another Notification</a>
                                            </li>
                                            <li>
                                                <a href="#">Another One</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="material-icons">person</i>
                                            <p className="hidden-lg hidden-md">Profile</p>
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
                        <div className="container-fluid">

                            <div className="makeclassroom3"  style={{ marginLeft: 100, marginTop:-100, height: "auto"}}>


                                <div className="w-form" style={{ height: "auto", marginTop: 150}}>
                                    <form id="email-form" name="email-form" data-name="Email Form" className="form class"  style={{marginTop: 150 }}>

                                        <div className="div-book-11" style={{marginTop: 50, marginLeft: 60, height: "auto"}}>
                                            <h3  style={{marginTop: -30, marginLeft: -100 }} >Print Instructions</h3>
                                            <div  style={{marginTop: 40, marginLeft: -40 }}  className="w-row">
                                                <div className="w-clearfix w-col w-col-4"><label for="email" className="text-block-6 prototyp2 choosestudentstext">  Name  of your Student</label></div>
                                                <div className="w-col w-col-4"><input type="text" className="searchbar instudents w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your student" id="name"></input></div>
                                                <div className="w-col w-col-4">
                                                    <div className="button-2 check"></div>
                                                </div>
                                            </div>

                                        </div>

                                    </form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>

                                <div className="width-calendar3 " style = {{marginTop: 40}}   >
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
        user: state.user
    }
}



export default connect(mapStateToProps, {createclass,dashboard,fmakeclass2,fmakeclass3, fcreateclass,fdashboard,moveup})(Dashboard);

