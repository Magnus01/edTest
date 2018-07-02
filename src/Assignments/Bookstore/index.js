import React, { Component } from 'react';

import {createclass,fmoveup, fdashboard} from '../../../actions/classroom';

import {fclassdashboard,classdashboard, fbookdashboard,bookdashboard} from '../../../actions/classroom';

import {fbookcss, fclassroomcss, classroomcss,bookcss} from '../../../actions/classroom';
import {inassignments, fbookstore,assignment, bookmovement} from '../../../actions/assignments';

import {connect} from 'react-redux';

import AuthorContainer from './AuthorContainer';



import {XYPlot, LineSeries, MarkSeries} from 'react-vis';


import {
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
} from 'react-vis';

class Dashboard extends Component {
    constructor() {
        super();
        this.nextcss = this.nextcss.bind(this);
        this.moverindex = this.moverindex.bind(this);
        this.moverassignment = this.moverassignment.bind(this);
    }


    moverindex () {

        this.props.fbookstore();
        this.props.assignment();
        // setTimeout(() => this.innerfunction(), 700);
    }

    moverassignment () {

        this.props.fbookstore();
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
                <div className="sidebar" data-color="purple" >

                    <div className="logo">
                        <div className="simple-text">

                        </div>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li  >
                                <a  onClick = {this.moverindex}>
                                    <i className="material-icons">search</i>
                                    <p>Analytics</p>
                                </a>
                            </li>
                            <li >
                                <a  onClick = {this.moverassignment}  >
                                    <i className="material-icons">content_paste</i>
                                    <p>Assignments</p>
                                </a>
                            </li>
                            <li className="active">
                                <a >
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

                                <div className="tab-wrap">

                                    <input type="text" className="form-control"  placeholder="Books" ></input>
                                    <div className="tab-label-content" id="tab1-content">

                                        <label for="tab1"></label>
                                        <div className="tab-content">TAB 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet eget lectus eu congue. Nam finibus urna eget nisl aliquam, in dictum ligula feugiat. Donec mollis ligula purus, et interdum velit bibendum eget. Aliquam magna diam, tristique eu libero nec, sagittis finibus sapien. Cras a ex ultricies, faucibus elit sagittis, maximus nisi. Donec quis arcu sapien. Aenean risus nibh, varius sed porttitor a, ornare nec leo. Sed vitae lacus in ipsum varius sagittis. Ut in quam cursus, ullamcorper sapien posuere, laoreet elit. Suspendisse interdum, risus ut ultricies scelerisque, nibh est commodo leo, sed tristique nisl odio et turpis. Fusce pellentesque nunc nec arcu feugiat accumsan. Praesent mauris sem, eleifend sit amet tortor in, cursus vehicula arcu. Curabitur convallis sit amet nunc ac feugiat. Sed at risus id diam porta pretium id vel felis. Donec nec dui id nisl hendrerit laoreet eu id odio.</div>
                                    </div>

                                    <input type="text" className="form-control" placeholder="Collection" ></input>
                                    <div className="tab-label-content" id="tab2-content">

                                        <label for="tab2"></label>
                                        <div className="tab-content">TAB 2 - Quisque egestas, purus in tempor vulputate, diam augue mollis quam, quis elementum ipsum ex a risus. Quisque sed augue porta, facilisis felis vitae, cursus mi. Nullam mollis magna eget tincidunt mollis. Sed suscipit placerat ultricies. Sed eget lorem et ipsum ultricies congue eu a enim. Nam quis ex nec lorem dignissim suscipit eu ut felis. Vivamus molestie felis id purus congue, vel ultrices sem molestie.</div>
                                    </div>

                                    <input type="text" className="form-control" placeholder="Featured"  ></input>
                                    <div className="tab-label-content" id="tab3-content">

                                        <label for="tab3"></label>
                                        <div className="tab-content">TAB 3 - Donec vulputate ante ac ligula vestibulum, id mollis diam commodo. Integer at consequat magna. Sed elit sem, dictum nec porttitor ac, ultrices id enim. Morbi semper eros a enim malesuada, eu finibus erat dictum. Ut vitae orci a odio sagittis malesuada. Cras volutpat vel lorem in tempor. Duis ultricies lectus sit amet tellus vehicula faucibus. Etiam sed leo ac erat tempor feugiat at quis ipsum. Mauris pellentesque nisl lorem, ac finibus sapien sagittis vel. Donec et lobortis est. Vestibulum dignissim ligula nec erat interdum, quis sollicitudin metus pretium. Vestibulum quis dui sapien. Proin commodo justo ac orci elementum molestie. Aliquam mattis orci vitae volutpat commodo.</div>
                                    </div>



                                    <div className="slide"></div>

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
                        <div className="container-fluid">

                            <div className="section _3dchild">
                                <div className="pagecontain-copy">
                                    <div className="div-block-6 upper">
                                        <div className="div-block-7 uppy inclass w-clearfix">
                                            <div className="meetingdetailcontain float-left bookstores">
                                                <div className="meetingdetailsmiddle makeclassroommiddle meetingbooks_all_container">
                                                    <div className="div-book-5 form"    >


                                                        <div className="author_book_container">

                                                            <div className={`book_container_in_author ${this.props.inclass.bookmovement}`}>



                                                                <div className="left"></div>
                                                                <div className="back2">
                                                                      <div className="bookcoverrotated"> <h8 >iPhone Programming</h8>
                                                                </div></div>

                                                                <div className="frontcover" onClick={ () => this.nextcss() }></div>
                                                            </div>
                                                            {this.props.inclass.bookmovement === "next" ?   <AuthorContainer/> : null}
                                                        </div>


                                                        <div className="author_book_container">
                                                            <div className="book_container_in_author">
                                                                <div className="left"></div>
                                                                <div className="back2">
                                                                    <h5 className="bookcoverrotated">iphone Programming</h5>
                                                                </div>
                                                                <div className="page inner5 outer">
                                                                    {/*<div className="titlerow">*/}
                                                                        {/*<h1 className="heading-6">iPhone Programming</h1>*/}
                                                                    {/*</div>*/}
                                                                    {/*<div className="leftmenulink">*/}
                                                                        {/*<div className="w-row">*/}
                                                                            {/*<div className="column-26 w-col w-col-2">*/}
                                                                                {/*<div className="icons"></div>*/}
                                                                            {/*</div>*/}
                                                                            {/*<div className="column-27 w-col w-col-2">*/}
                                                                                {/*<div className="icontext"></div>*/}
                                                                            {/*</div>*/}
                                                                            {/*<div className="column-28 w-col w-col-8">*/}
                                                                                {/*<div className="leftlinktext-copy">Students</div>*/}
                                                                            {/*</div>*/}
                                                                        {/*</div>*/}
                                                                    {/*</div>*/}
                                                                    {/*<div className="leftmenulink">*/}
                                                                        {/*<div className="w-row">*/}
                                                                            {/*<div className="column-26 w-col w-col-2">*/}
                                                                                {/*<div className="icons"></div>*/}
                                                                            {/*</div>*/}
                                                                            {/*<div className="column-27 w-col w-col-2">*/}
                                                                                {/*<div className="icontext"></div>*/}
                                                                            {/*</div>*/}
                                                                            {/*<div className="column-28 w-col w-col-8">*/}
                                                                                {/*<div className="leftlinktext-copy">Students</div>*/}
                                                                            {/*</div>*/}
                                                                        {/*</div>*/}
                                                                    {/*</div>*/}
                                                                </div>
                                                                <div className="frontcover"></div>
                                                            </div>
                                                        {/*<AuthorContainer/>*/}
                                                        </div>



                                                        <div className="author_book_container">
                                                            <div className="book_container_in_author">
                                                                <div className="left"></div>
                                                                <div className="back2">
                                                                    <h5 className="bookcoverrotated">iphone Programming</h5>
                                                                </div>
                                                                <div className="page inner5 outer">
                                                                    <div className="titlerow">
                                                                        <h1 className="heading-6">iPhone Programming</h1>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="frontcover"></div>
                                                            </div>
                                                            {/*<div className="author-description-preview nohself">*/}
                                                                {/*<div className="cross-button">*/}
                                                                    {/*<div className="leftcross-button"></div>*/}
                                                                    {/*<div className="leftcross-button-right"></div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="div-book-40">*/}
                                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="w-row">*/}
                                                                    {/*<div className="w-col w-col-6">*/}
                                                                        {/*<div className="detailsauthor">*/}
                                                                            {/*<h6>Graham Press</h6>*/}
                                                                            {/*<h6>12.09.2010</h6>*/}
                                                                            {/*<h6>397 pages</h6>*/}
                                                                        {/*</div>*/}
                                                                    {/*</div>*/}
                                                                    {/*<div className="w-col w-col-6"><a href="#" className="button-6 w-button">Button Text</a></div>*/}
                                                                {/*</div>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                        <div className="shelf-copy"></div>
                                                    </div>


                                                    <div className="bottom_shelf_container form">
                                                        <div className="author_book_container">
                                                            <div className="book_container_in_author">
                                                                <div className="left"></div>
                                                                <div className="back2">
                                                                    <h5 className="bookcoverrotated">iphone Programming</h5>
                                                                </div>
                                                                <div className="page inner5 outer">
                                                                    <div className="titlerow">
                                                                        <h1 className="heading-6">iPhone Programming</h1>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="frontcover"></div>
                                                            </div>

                                                        </div>
                                                        <div className="author_book_container">
                                                            <div className="book_container_in_author">
                                                                <div className="left"></div>
                                                                <div className="back2">
                                                                    <h5 className="bookcoverrotated">iphone Programming</h5>
                                                                </div>
                                                                <div className="page inner5 outer">
                                                                    <div className="titlerow">
                                                                        <h1 className="heading-6">iPhone Programming</h1>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="frontcover"></div>
                                                            </div>

                                                        </div>
                                                        <div className="author_book_container">
                                                            <div className="book_container_in_author">
                                                                <div className="left"></div>
                                                                <div className="back2">
                                                                    <h5 className="bookcoverrotated">iphone Programming</h5>
                                                                </div>
                                                                <div className="page inner5 outer">
                                                                    <div className="titlerow">
                                                                        <h1 className="heading-6">iPhone Programming</h1>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="leftmenulink">
                                                                        <div className="w-row">
                                                                            <div className="column-26 w-col w-col-2">
                                                                                <div className="icons"></div>
                                                                            </div>
                                                                            <div className="column-27 w-col w-col-2">
                                                                                <div className="icontext"></div>
                                                                            </div>
                                                                            <div className="column-28 w-col w-col-8">
                                                                                <div className="leftlinktext-copy">Students</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="frontcover"></div>
                                                            </div>

                                                        </div>
                                                        <div className="shelf-copy"></div>
                                                    </div>
                                                </div>
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
        user: state.user,
        inclass: state.inclass
    }
}


export default connect(mapStateToProps, {inassignments, fbookstore,assignment, bookmovement, fbookcss, fclassroomcss,classroomcss,bookcss,fclassdashboard,classdashboard, fbookdashboard,bookdashboard, fmoveup, fdashboard,createclass})(Dashboard);
