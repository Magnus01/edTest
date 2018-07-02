import React, { Component } from 'react';

import {deleteClassroom, pickclassroom, getinvitations, getclassrooms, User, createclass,dashboard, fcreateclass,fdashboard, moveup, makeclass1} from '../actions/classroom';
import {assignment} from '../actions/assignments';
import Index from './Index';
// import './../css/normalize.css';
// import './../css/webflow.css';
// import './../css/magnuss-amazing-project.webflow.css';
// import './../css/v2.css';
//
// import './../assets/css/bootstrap.min.css';
// import './../assets/css/material-dashboard.css?v=1.2.0';
// // import './../assets/css/demo.css';
// //
// import './../assets/css/css_tabs.css';
// //
// import './../vis_css/vis.css';
// import './../vis_css/bar.css';
//
// import './../assets/img/favicon.png';
// import './../assets/img/apple-icon.png';
import { Redirect } from 'react-router';

import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.innerfunction = this.innerfunction.bind(this);
        this.mover = this.mover.bind(this);
        this.moverassignment = this.moverassignment.bind(this);
        this.deleteClassroomfun = this.deleteClassroomfun.bind(this);
        this.MoveToUser = this.MoveToUser.bind(this);
        this.createclass = this.createclass.bind(this);
        // this.goTo = this.goTo.bind(this);
        this.state =
            {

                profile: '',
                redirect: false
            };

    }

    innerfunction () {
        this.props.fcreateclass();
        this.props.dashboard();
        // this.props.fmoveup();
    }

    multiple () {
        this.props.moveup();
        setTimeout(() => this.innerfunction(), 700);
    }
    // goTo(route) {
    //     this.props.history.replace(`/${route}`);
    // }

    mover () {

        this.props.fcreateclass();

      // this.goTo("makeclass1");
        this.props.makeclass1();
        this.setState({redirect: true});
        // setTimeout(() => this.innerfunction(), 700);
    }
    MoveToUser () {

        this.props.fcreateclass();
        this.props.User();

    }

    moverassignment (id) {

        this.props.fcreateclass();
        this.props.assignment();
        this.props.pickclassroom(id);

    }

    deleteClassroomfun (userid, id) {

        this.props.deleteClassroom(userid, id);


    }

    createclass () {
        this.props.fcreateclass();
        this.props.makeclass1();
        // this.props.assignment();
        // setTimeout(() => this.innerfunction(), 700);
    }



    componentDidMount()
    {
        // console.lo   g(this.state.profile, 'this.state.profile componentdidmount');
        this.props.getclassrooms(this.props.user.user);
        this.props.getinvitations(this.props.user.user);
    }

    // postonlyuser(accesstoken, id, email, name) {
    //
    //     console.log('postonlyuser',accesstoken,id,email );
    //     // const {getAccessToken} = accesstoken;
    //
    //
    //     // this.getProfile((err, profile) => {
    //     //     this.setState({profile});
    //     // });
    //
    //     // console.log(profile, 'profile');
    //     // console.log(this.state.profile, "this inside auth");
    //
    //     const headers = {'Authorization': `Bearer ${accesstoken}`};
    //
    //     // let data= data: { 'user' : 'name' };
    //     let json = {
    //
    //         "Name": name,
    //         "Description": email,
    //         "Id": id,
    //     };
    //
    //     let url = `${API_URL}/userloginscenario`;
    //
    //     this.props.postonlyuser(url, json, headers);
    //     // axios.post(`${API_URL}/userloginscenario`, json, headers)
    //     //     .then(response => console.log(response, 'response'))
    //     //     .catch(error => console.log(error, 'error'));
    // }

    render() {
        if (this.props.user.makeclass1) {
            return <Redirect push to="/makeclass1" />;
        }
              if (this.props.user.classroomid > 0) {
            return <Redirect push to="/index" />;
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

                            <div className="row">
                                {this.props.user.getinvitations ? this.props.user.getinvitations.map((id, studentInvitation, enrollment) =>
                                        <Index
                                            moverassignment={this.moverassignment}
                                            deleteClassroomfun={this.deleteClassroomfun}
                                            StudentInvitation={studentInvitation}
                                            enrollmentlength={enrollment.length}
                                            invitationlength={studentInvitation.length}
                                            id={id}
                                            userid={this.props.user.user}
                                        />
                                    ,
                                ) : null}


                            </div>
                        </div>
                        <div className="div-add-classroom-34"  onClick={this.mover}></div>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom');
    return {
        user: state.user,
        assignment: state.assignment,
        inclass: state.inclass,
    }
}


export default connect(mapStateToProps, {deleteClassroom, pickclassroom, getinvitations, getclassrooms, User, assignment, makeclass1, dashboard, fcreateclass,fdashboard,moveup})(Dashboard);

