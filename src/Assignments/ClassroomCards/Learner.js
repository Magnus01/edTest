
import React from 'react';
import Back from '../../images/back3.png';

import {Link } from 'react-router-dom';

const Learner = (props) => (
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
            <div className="card-header" data-background-color="green">
                <i className="material-icons">star_rate</i>
            </div>
            <div className="card-content">
                <p className="category">Learners Points</p>
                <h3 className="title">34,245</h3>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="material-icons">assignment_ind</i><a>  See all students</a>
                </div>
            </div>
        </div>
    </div>

);

export default Learner;
