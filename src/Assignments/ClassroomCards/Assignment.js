import React from 'react';
import Back from '../../images/back3.png';

import {Link } from 'react-router-dom';

const Assignment = (props) => (
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div onClick={props.assignment_mover}  className="card card-stats">
            <div className="card-header" data-background-color="red">
                <i className="material-icons">assignment</i>
            </div>
            <div className="card-content">
                <p className="category">Assignments</p>
                <h3 className="title">75 </h3>

            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="material-icons">content_paste</i><a>  See all Assignments</a>
                </div>
            </div>
        </div>
    </div>

);

export default Assignment;