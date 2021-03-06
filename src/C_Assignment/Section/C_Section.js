import React, { Component } from "react";
import {  chapter } from "../../actions/assignments";
import { connect } from "react-redux";


class CSection extends Component {


  constructor(props) {
        super(props);
         this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
console.log(event.target.value);

    }
    handleSubmit(event) {
      //this.state.value
      let value=this.state.value
this.props.chapter();
      event.preventDefault();

    }



  render() {

    return (

<div className="col-md-3">

  <div className="card">
      <div className="card-header card-chart" data-background-color="green">

      </div>
      <div className="card-content">
          <h4 className="title">How Much Time it Took to complete Section</h4>
          <p className="category">


                       <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" value={this.state.value} pattern="[0-9]*" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Post" />
            </form>





          </p>
      </div>
      <div className="card-footer">
          <div className="stats">
              <i className="material-icons">access_time</i> Please Post the time in Minutes
          </div>
      </div>
  </div>
  </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {chapter})(CSection);
