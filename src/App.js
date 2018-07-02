import React, { Component } from 'react';

import './css/normalize.css';
import './css/webflow.css';
import './css/projectfiles.css';
import './css/v2.css';
import './assets/css/bootstrap.css';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.css';
import './assets/css/material-dashboard.css';


import './css/v2.css';


import './assets/css/css_tabs.css';

import './vis_css/vis.css';
import './vis_css/bar.css';

import {connect} from 'react-redux';

import Register from './Register/DashboardApp';

import Assignment from './Assignments/index';
import Classroom from './Classroom/Classroom';


import Assignmentproject from './Assignments/AssignmentsD2';
import FirstChooseBook from './Assignments/CreateAssignment/First_ChooseBook';
import Second_ChooseChapter from './Assignments/CreateAssignment/Second_ChooseChapter';
import Third_ChooseTime from './Assignments/CreateAssignment/Third_ChooseTime';
import { fetchUsers} from './actions/T_User';
import {withRouter, Switch, Route } from 'react-router-dom';
import First_CreateClassroom from './Classroom/First_CreateClassroom';
import Second_ChooseStudents from './Classroom/Second_ChooseStudents';
import Third_Instructions from './Classroom/Third_Instructions';


import Cbook from './C_Assignment';

class App extends Component {
    componentWillMount() {
        this.props.fetchUsers();

        // setInterval(this.props.refreshfetch(this.props.user.user[1]), 3300);
        // setInterval(this.props.Activate, 20000);
    }

    render() {
        return (
            <div>
                <Switch>
                        <Route exact path="/"  component ={Register} />
                        <Route exact path="/classroom"  component ={Classroom} />
                        <Route path="/makeclass1"  component ={First_CreateClassroom}   />
                        <Route path="/makeclass2"  component ={Second_ChooseStudents}   />
                        <Route path="/makeclass3"  component ={Third_Instructions}   />


                        <Route exact path="/index" component={Assignment} />

                        <Route exact path="/assignement" component={Cbook} />
                        <Route exact path="/assignment" component={Assignmentproject} />
                        <Route exact path="/createassignment1" component={FirstChooseBook} />
                        <Route exact path="/createassignment2" component={Second_ChooseChapter} />
                        <Route exact path="/createassignment3" component={Third_ChooseTime} />

                </Switch>

            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN assignment');
    return {
        user: state.user
    }
}


export default withRouter(connect(mapStateToProps, {fetchUsers})(App));
