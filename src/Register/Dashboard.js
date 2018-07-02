import React, { Component } from 'react';

import {createclass,fmoveup, fdashboard} from '../actions/classroom';

import {postUni, fclassdashboard,classdashboard, fbookdashboard,bookdashboard} from '../actions/classroom';

import {fbookcss, fclassroomcss, classroomcss,bookcss} from '../actions/classroom';

// import '../css/normalize.css';
// import '../css/webflow.css';
// import '../css/magnuss-amazing-project.webflow.css';
// import '../css/addstudents.css';
import {connect} from 'react-redux';

//from ping
import { API_URL } from './../constants';
import axios from 'axios';
//end ping
let myVarclass;
let myVarbook;

class Dashboard extends Component {
    constructor() {
        super();
        this.multiple = this.multiple.bind(this);
        this.hoverclassroom = this.hoverclassroom.bind(this);
        this.hoverbook = this.hoverbook.bind(this);
        this.innerfunction = this.innerfunction.bind(this);
        this.innerclasscss = this.innerclasscss.bind(this);
        this.innerbookcss = this.innerbookcss.bind(this);

        this.startclassimage = this.startclassimage.bind(this);
        this.endclassimage = this.endclassimage.bind(this);

        this.startbookimage = this.startbookimage.bind(this);
        this.endbookimage = this.endbookimage.bind(this);
        this.goTo = this.goTo.bind(this);


    }
    componentWillMount() {
        this.setState({ message: '' });
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        console.log(this.props.auth,'this.propsAUTH');
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }

    }

    goTo(route) {
        console.log( 'route');
        this.props.history.replace(`/${route}`);
    }



    getuserId() {
    const { getAccessToken } = this.props.auth;

    console.log(this.props.auth,this.state.profile, "this.props.auth");

    const headers = { 'Authorization': `Bearer ${getAccessToken()}`};

    // let data= data: { 'user' : 'name' };
    let json = {

        "Name": this.state.profile.given_name + " " + this.state.profile.family_name,
        "Description": this.state.profile.email,
        "Id" : this.state.profile.sub,
        "EducatorDetails": {
            "Name" : "education",
            "Description" : "description"
            }
        };

    axios.post(`${API_URL}`,json,  headers )
        .then(response => this.setState({ message: response.data.message }))
        .catch(error => this.setState({ message: error.message }));
    }

    innerfunction () {
        this.props.createclass();
        this.props.fdashboard();
        this.getuserId();
        this.goTo('Classroom');
    }

    multiple () {
        this.props.fmoveup();
        setTimeout(() => this.innerfunction(), 200);
    }



    innerclasscss () {
        // this.props.fdashboard();
        // this.props.fbookdashboard();
        this.props.classroomcss();
        // this.props.classdashboard();
        // this.props.fmoveup();
    }

    innerbookcss () {
        // this.props.fdashboard();
        // this.props.fclassdashboard();
        this.props.bookcss();
        // this.props.bookdashboard();
        // this.props.fmoveup();
    }



    //Hover functions
    startclassimage() {
        myVarclass = setTimeout(() => this.innerclasscss(), 500)
    }

    endclassimage() {
        clearTimeout(myVarclass);
    }

    startbookimage() {
        myVarbook = setTimeout(() => this.innerbookcss(), 500)
    }

    endbookimage() {
        clearTimeout(myVarbook);
    }

    hoverclassroom () {
        this.props.fbookcss();
        this.props.classroomcss();


    }


    hoverbook () {
        this.props.fclassroomcss();
        this.props.bookcss();

    }

    render() {
        return (

            <div >


                <div className="startcontainer">


                    <div className="startcontainerregister1">


                        <div className={`outerstart-container ${this.props.user.moveup}`}>

                            <div className="inner-start-container1">

                                <div className={`inner-start-container1 level-2 ${this.props.user.bookcss}`}>
                                {/*<div className={`inner-start-container1 level-2`}>*/}


                                </div>
                                <div className="inner-start-container1 level3"></div>
                            </div>


                            {/*<div class="progress34">*/}
                                {/*<div class="back34"></div>*/}
                                {/*<div class="back-centre"></div>*/}
                            {/*</div>*/}
                                <div className="pin-container" onClick = {this.multiple} onMouseOver = {this.hoverclassroom}>
                                <div className="opacitydimmer">
                                    <div className="text-block-11">Make Classroom</div>
                                    <div className="left-pin middle pxl combo"></div>
                                    <div className="left-pin riight-rotated-pin"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin2"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin-opposite"></div>
                                    <div className="left-pin riight-rotated-pin left-rotated" ></div>
                                </div>
                                <div className="class3dicon selncv leftside"  ></div>
                            </div>
                            <div className="pin-container-right"   onMouseOver = {this.hoverbook} >
                                <div className="opacitydimmer">
                                    <div className="text-block-11 makebookbar">Make Book</div>
                                    <div className="left-pin middle pxl combo"></div>
                                    <div className="left-pin riight-rotated-pin"></div>
                                    <div className="left-pin riight-rotated-pin left-rotated"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin2"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin2"></div>
                                    <div className="left-pin riight-rotated-pin rotatedpin-opposite"></div>
                                </div>
                                <div className="class3dicon selncv"></div>
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


export default connect(mapStateToProps, {postUni, fbookcss, fclassroomcss,classroomcss,bookcss,fclassdashboard,classdashboard, fbookdashboard,bookdashboard, fmoveup, fdashboard,createclass})(Dashboard);
