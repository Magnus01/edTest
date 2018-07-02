import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthorContainer from "../AuthorContainer";
import { connect } from "react-redux";


import {
  bookmovement,
} from "../../../../actions/assignments";

class OneBook extends Component {
  constructor() {
    super();
    this.nextcss = this.nextcss.bind(this);
  }

  nextcss() {
    this.props.bookmovement();
  }

  render() {
    return (

        <div className="author_book_container">
          <div
            className={`book_container_in_author ${
              this.props.inclass.bookmovement
            }`}
          >
            <div className="left" />
            <div className="back2">
              <div className="bookcoverrotated">
                {" "}
                <h8>iPhone Programming</h8>
              </div>
            </div>

            <div className="frontcover" onClick={() => this.nextcss()} />
          </div>

          {this.props.inclass.bookmovement === "next" ? (
            <AuthorContainer propstopass={this.props.pp} />
          ) : null}
        </div>

    );
  }
}

function mapStateToProps(state) {
  console.log(state, "STATE IN showwclassrom");
  return {
    user: state.user,
    inclass: state.inclass
  };
}

export default connect(mapStateToProps, {

  bookmovement,

})(OneBook);
