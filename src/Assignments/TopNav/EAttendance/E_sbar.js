import React from 'react';
import Back from '../../images/back3.png';

import {Link } from 'react-router-dom';
import Cbook from '../../C_Assignment';

class E_sbar extends Component {
  constructor() {
    super();

  }

  render() {
    return (

      <div className="sidebar" data-color="purple" >
          <Link to={`/assignment`}  className=" logo">
              <div className="simple-text">
                  <a><img  className ="transformbackbutton" src={Back}></img></a>
              </div>
          </Link>
          <div className="sidebar-wrapper">
              <ul className="nav">
                  <li className="">
                      <a >
                          <i className="material-icons">search</i>
                          <p>Analytics</p>
                      </a>
                  </li>
                  <li>
                      <a onClick={//props.assignment_mover}>
                          <i className="material-icons" >content_paste</i>
                          <p>Assignments</p>
                      </a>
                  </li>
                  <li >
                      <a  onClick={//props.bookstore_mover}>
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
                  <li   className="active">
                      <a >
                      <Link to="/assignement">
                          <i className="material-icons">computer</i>
                          <p>E-Attendance</p>
                          </Link>
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

    );
  }
}
export default E_sbar;
