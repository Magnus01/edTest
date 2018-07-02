
import React from 'react';
import Back from '../../images/back3.png';
import Cbook from '../../C_Assignment';

import {Link } from 'react-router-dom';

const EAttendance = (props) => (
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
            <div className="card-header" data-background-color="blue">
                <i className="material-icons">timeline</i>
            </div>
            <div className="card-content">
                <p className="category">Subscribed Students</p>
                <h3 className="title">+25</h3>
            </div>
            <div className="card-footer">
                <div className="stats">

              <Link to="/assignement">      <i className="material-icons">trending_up</i><a>  View Student E-Attendance </a>   </Link>
                </div>
            </div>
        </div>
    </div>



);

export default EAttendance;
