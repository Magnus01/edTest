import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { SearchBar } from "../../../../../actions/assignments";








 class Book_UparNav extends Component {
   constructor(props) {
       super(props);
       this.state = {value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
     }



     handleChange(event) {
       event.preventDefault();
  this.setState({value: event.target.value});
  console.log("The Value is changing" + event.target.value );
}

handleSubmit(event) {
    event.preventDefault();
let value=this.state.value;
this.props.SearchBar(value);
}

render()
{
return(

  <div>
  <nav className="navbar navbar-transparent navbar-absolute">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        {/*<div className="card-nav-tabs" >General Analytics </div>*/}
      </div>
      <div className="collapse navbar-collapse">
        <div
          className="meetingdetailtopdiv makeclassrooms "
          style={{ marginTop: -15 }}
        >
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
                      <div className="text-block-5">Book</div>
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
                      <div className="text-block-5">Print</div>
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
            <a
              href="#pablo"
              className="dropdown-toggle"
              data-toggle="dropdown"
            >
              <i className="material-icons">library_books</i>
              <p className="hidden-lg hidden-md">Class</p>
            </a>
          </li>
        </ul>
        <form className="navbar-form navbar-right" role="search"  onSubmit={this.handleSubmit}>
          <div className="form-group  is-empty">
            <input
              type="text"

value={this.state.value} onChange={this.handleChange}


              className="form-control"
              placeholder="Search"
            />
            <span className="material-input" />
          </div>
          <button
            type="submit"
            className="btn btn-white btn-round btn-just-icon"
          >
            <i className="material-icons">search</i>
            <div className="ripple-container" />
          </button>
        </form>
      </div>
    </div>
  </nav>

  </div>

);

}


 }
 function mapStateToProps(state) {
   return {
     chart: state.charts,
     inclass: state.inclass,
     chart: state.charts
   };
 }

 export default connect(mapStateToProps, {
  SearchBar,
 })(Book_UparNav);
