import React, { Component } from 'react';

import './css/course-creator-ui.webflow.css';


import {connect} from 'react-redux';


class Student extends Component {


    render() {

        return (



            <div className="ModalOn">


            </div>


        );
    }
}


function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom');

    return {
        user: state.user,
        inclass: state.inclass
    }
}


export default connect(mapStateToProps)(Student);

 