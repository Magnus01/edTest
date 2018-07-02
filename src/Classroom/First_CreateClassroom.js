import React, { Component } from 'react';
import {createclass, updatenameclass,updatesubjectclass,dashboard, fcreateclass,fmakeclass1, makeclass2, fdashboard, moveup} from '../actions/classroom';
import axios from 'axios';
import { API_URL } from './../constants';

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
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postclassroom = this.postclassroom.bind(this);
        this.state =
            {

                profile: '',
                redirect: false
            };
    }




    postclassroom() {
       // const headers = this.props.user.user.getaccesstoken;

        // console.log(this.props.auth,this.state.profile, "this.props.auth");

        // const headers = { 'Authorization': `Bearer ${getAccessToken()}`};

        // let data= data: { 'user' : 'name' };
        let json = {

            "Name": this.props.user.nameclass,
            "Description": this.props.user.subjectclass,

        };
        this.props.createclass(this.props.user.user,json);
        // this.props.createclass(headers, this.props.user.user,json);
        // console.log(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`, 'consoleloggingclassroom');
        // axios.post(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`,json,  headers )
        //     .then(response => this.setState({ message: response.data.message }))
        //     .catch(error => this.setState({ message: error.message }));
    }


























    //
    //
    // goTo(route) {
    //     this.props.history.replace(`/${route}`);
    // }

    innerfunction () {
        this.props.fmakeclass1();

        this.props.dashboard();
        // this.props.fmoveup();
    }
    handleChange2 (event) {
        event.preventDefault();
        let subjectclass = event.target.value;

        this.props.updatesubjectclass(subjectclass);
    }

    handleChange (event) {
        event.preventDefault();
        let nameclass = event.target.value;

        this.props.updatenameclass(nameclass);
    }

    mover () {

        this.props.fmakeclass1();
        // this.goTo("makeclass2");
        this.props.makeclass2();
        this.postclassroom();
        this.setState({redirect: true});


    }

    MoveToUser () {

        this.props.fcreateclass();
        this.props.User();
        // setTimeout(() => this.innerfunction(), 700);
    }

    multiple () {
        this.props.moveup();
        // setTimeout(() => this.innerfunction(), 700);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/makeclass2" />;
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
                    {/*<img className ="img_sidebar" src={Sidebarimage}/>*/}
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
                                                <div className="bar _2">
                                                    <div className="bubble">
                                                        <div className="classinfo">
                                                            <div className="text-block-5">Classroom</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bar _2">
                                                    <div className="bubble">
                                                        <div className="classinfo">
                                                            <div className="text-block-5">Students</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bar _2 _3 end">
                                                    <div className="bubble">
                                                        <div className="classinfo">
                                                            <div className="text-block-5">Instruct</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>
                        </div>
                    </nav>
                    <div className="content">
                        <div className="container-fluid">
                            <div className="meetingdetailcontain float-left makeclassroom makeassignment3">
                                <div className="meetingdetailtopdiv makeclassrooms">
                                    <div className="meetingdetailtopdiv-copy makeclassrooms">

                                    </div>
                                </div>
                                <div className="meetingdetailsmiddle makeclassroommiddle">
                                    <h3>Create Classroom </h3>
                                    <div className="div-block-5 form">
                                        <div className="w-form">


                                            <form id="email-form" name="email-form" data-name="Email Form" className="form class" onSubmit={this.handleSubmit2}>
                                                <div className="div-book-11 w-clearfix">
                                                    <label for="email" className="text-block-6 prototyp2">  Name  Class</label>
                                                    <input
                                                        type="text"
                                                        className="searchbar w-input"
                                                        maxlength="256"
                                                        value = {this.props.user ? this.props.user.nameclass : ''}
                                                        onChange = {this.handleChange}
                                                        name="name"
                                                        data-name="Name"
                                                        placeholder="Enter your class"
                                                        id="name">

                                                    </input>
                                                </div>
                                                <div className="div-book-11 w-clearfix">
                                                    <label for="email" className="text-block-6 prototyp2">Name Subject</label>
                                                    <input
                                                        type="text"
                                                        className="searchbar w-input"
                                                        maxlength="256"
                                                        name="name-2"
                                                        value = {this.props.user ? this.props.user.subjectclass : ''}
                                                        onChange = {this.handleChange2}
                                                        data-name="Name 2"
                                                        placeholder="Enter your subject"
                                                        id="name-2">
                                                    </input>
                                                </div>


                                            </form>




                                            {/*<form id="email-form" name="email-form" data-name="Email Form" className="form class">*/}
                                                {/*<div className="div-book-11 w-clearfix"><label for="email" className="text-block-6 prototyp2">  Name  Class</label><input type="text" className="searchbar w-input" maxlength="256" name="name" data-name="Name" placeholder="Enter your class" id="name"></input></div>*/}
                                                {/*<div className="div-book-11 w-clearfix"><label for="email" className="text-block-6 prototyp2">Name Subject</label><input type="text" className="searchbar w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Enter your subject" id="name-2"></input></div>*/}
                                            {/*</form>*/}
                                            {/*<div className="w-form-done">*/}
                                                {/*<div>Thank you! Your submission has been received!</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="w-form-fail">*/}
                                                {/*<div>Oops! Something went wrong while submitting the form.</div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>

                                    <div className="width-calendar3 " style = {{marginTop: 1}}   >
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


export default connect(mapStateToProps, {createclass, updatenameclass, updatesubjectclass, fmakeclass1, makeclass2, dashboard, fcreateclass,fdashboard,moveup})(Dashboard);
