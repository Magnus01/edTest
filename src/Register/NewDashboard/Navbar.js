import React, { Component } from 'react';

import './Navbar.css';
import './css/dashboardcss.css';


import {createclass,fmoveup, fdashboard} from '../../actions/classroom';

import {postUni, fclassdashboard,classdashboard, fbookdashboard,bookdashboard} from '../../actions/classroom';

import {fbookcss, fclassroomcss, classroomcss,bookcss} from '../../actions/classroom';

import {connect} from 'react-redux';


import { API_URL } from './../../constants';
import axios from 'axios';

import { Redirect } from 'react-router';


class Navbar extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);

        // this.goTo = this.goTo.bind(this);
        this.state = {
            redirect : false
        }

    }






    getuserId() {


        const headers = this.props.user.user.getaccesstoken;

        let json = {

            "Name": this.props.user.user.Name,
            "Description": this.props.user.user.Description,
            "Id" : this.props.user.user.Id,
            "EducatorDetails": {
                "Name" : "education",
                "Description" : "description"
            }
        };
        console.log(headers, 'headers');

        axios.post(`${API_URL}`,json,  headers )
            .then(response => this.setState({ message: response.data.message }))
            .catch(error => this.setState({ message: error.message }));

        }


    multiple () {
        // alert('coocoo');
        // this.props.createclass();
        // this.props.fdashboard();
        this.getuserId();
        // this.goTo('Classroom');
        this.setState({redirect: true});
        // setTimeout(() => this.innerfunction(), 200);
    }


    // constructor(){
    //     super();
    //
    //     this.state = {
    //         name_of_class: "wheelnav-piemenu-slice-basic"
    //     }
    // }
    //
    // changeClass_Hover(){
    //     this.setState({ name_of_class: "wheelnav-piemenu-slice-hover"})
    // }
    // changeClass_Click(){
    //     this.setState({ name_of_class: "wheelnav-piemenu-slice-selected"})
    // }

 render() {
     if (this.state.redirect) {
         return <Redirect push to="/classroom" />;
     }
     console.log(this.props, 'this.propsinNAV');

    let path_Create="M200,126L199.99999999999997,20A180,180,0,0,1,355.8845726811989,109.99999999999991A180,180,0,0,1,355.88457268119896,290L264.0858798800485,237A74,74,0,0,0,264.0858798800484,162.99999999999997A74,74,0,0,0,200,126Z";
    let path_Teach="M264.0858798800485,237L355.88457268119896,290A180,180,0,0,1,200,380A180,180,0,0,1,44.11542731880104,290L135.91412011995152,237A74,74,0,0,0,200,274A74,74,0,0,0,264.0858798800485,237Z";
    let path_Learn="M135.91412011995152,237L44.11542731880104,290A180,180,0,0,1,44.11542731880104,109.99999999999999A180,180,0,0,1,199.99999999999997,20L200,126A74,74,0,0,0,135.91412011995155,163A74,74,0,0,0,135.91412011995152,237Z";
    let path_SciCode_logo="M236,200A36,36,0,0,1,164,200A36,36,0,0,1,236,200Z";

    return <div  className="navbar_responsive">


        <svg
            className="SVG_class"

            version="1.1"

            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative",  margin: "auto"}}
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid meet">
            <path
                fill="none"
                stroke="#000000"
                d={path_Create}
                className="wheelnav-piemenu-slice"
               // onClick={this.changeClass_Click}
                //onHover={this.changeClass_Hover}
                id="wheelnav-piemenu-slice-2"
                transform="matrix(1,0,0,1,0,0)"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Create</title>
            </path>
            <path
                fill="none"
                stroke="#000000"
                d="M0,0"
                className="wheelnav-piemenu-slice"
                id="wheelnav-piemenu-line-2"
                transform="matrix(1,0,0,1,0,0)"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Create</title>
            </path>

            <image
                x="293.9852262806237"
                y="120.49999999999994"
                width="32"
                height="32"
                preserveAspectRatio="none"
                href={require("./edit.svg")}
                className="wheelnav-piemenu-title-basic-2"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}
                strokeWidth="1.0073228433809196">
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Create</title>
            </image>
            <path
                fill="none"
                stroke="#000000"
                d={path_Learn}
                className="wheelnav-piemenu-slice"
                id="wheelnav-piemenu-slice-1"
                transform="matrix(1,0,0,1,0,0)"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Learn</title>
            </path>
            <path
                fill="none"
                stroke="#000000"
                d="M0,0"
                className="wheelnav-piemenu-slice"
                id="wheelnav-piemenu-line-1"
                transform="matrix(1,0,0,1,0,0)"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Learn</title>
            </path>
            <image
                x="74.0147737193763"
                y="120.5"
                width="32"
                height="32"
                preserveAspectRatio="none"
                href={require("./student.svg")}
                className="wheelnav-piemenu-slice"
                id="wheelnav-piemenu-title-1"
                transform="matrix(1,0,0,1,0,0)"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}
                strokeWidth="1.0073228433809196">
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Learn</title>
            </image>
            <desc style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Created with Raphaël 2.1.2</desc>

            <path
                fill="none"
                stroke="#000000"
                d={path_Teach}
                onClick = {this.multiple}
                className="wheelnav-piemenu-slice"
                id="wheelnav-piemenu-slice-0"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Teach</title>
            </path>
            <path
                fill="none"
                stroke="#000000"
                d="M0,0"
                className="wheelnav-piemenu-slice"
                id="wheelnav-piemenu-line-0"
                transform="matrix(1,0,0,1,0,0)"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Teach</title>
            </path>
            <image
                x="184"
                y="311"
                width="32"
                height="32"
                preserveAspectRatio="none"
                href={require("./classroom.svg")}
                className="wheelnav-piemenu-slice"
                id="wheelnav-piemenu-title-0"
                transform="matrix(1,0,0,1,0,0)"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}
                strokeWidth="1.007124454841645">
                <title style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>Teach</title>
            </image>
            <path
                fill="none"
                stroke="#000000"
                d={path_SciCode_logo}
                id="wheelnav-piemenu-spreader"
                className="wheelnav-piemenu-spreader-out"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}>
                <title>Sci-Code</title>
            </path>
            <image
                x="184"
                y="184"
                width="32"
                height="32"
                preserveAspectRatio="none"
                href={require("./sci-code-img.webp")}
                className="wheelnav-piemenu-spreadertitle-in"
                transform="matrix(1,0,0,1,0,0)"
                id="wheelnav-piemenu-spreadertitle"
                style={{WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", fontStyle: "normal", fontVariant: "normal", fontWeight: 100, fontStretch: "normal", fontSize: "32px", lineHeight: "normal", fontFamily: "Impact, Charcoal, sans-serif"}}>
                <title>Sci-Code</title>
            </image>
        </svg>






    </div>

     ;
  }
}
function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom')
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {postUni, fbookcss, fclassroomcss,classroomcss,bookcss,fclassdashboard,classdashboard, fbookdashboard,bookdashboard, fmoveup, fdashboard,createclass})(Navbar);
