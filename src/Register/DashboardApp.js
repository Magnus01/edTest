import React, { Component } from 'react';


import Profile from './NewDashboard/Profile';

import Navbar from "./NewDashboard/Navbar";
import Edit_Profile from "./NewDashboard/Edit_Profile";
import Edit_Setting from "./NewDashboard/Edit_Setting";



import {connect} from 'react-redux';

class DashboardApp extends Component {

    componentWillMount() {

        console.log(this.props.inclass.users, 'this.props.inclass.users');
        // const { userProfile, getProfile } = this.props.auth;
        // const { getAccessToken } = this.props.auth;
        // const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
        // this.props.getacesstoken(headers);
        // console.log(this.props.auth,'this.propsAUTH');
        // if (!userProfile) {
        //     getProfile((err, profile) => {
        //         this.props.setProfile({ profile });
        //         // this.setState({ profile });
        //     });
        // } else {
        //     this.props.setProfile({ profile : userProfile });
        //
        //     // this.setState({ profile: userProfile });
        // }

    }

    render() {
        return (
            <div className="startcontainer">
            <div className="backgroundimagecontainer">
                <Profile />


                <Edit_Profile />
                <Edit_Setting />
                <Navbar
                    auth= {this.props}
                />

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


export default connect(mapStateToProps)(DashboardApp);
