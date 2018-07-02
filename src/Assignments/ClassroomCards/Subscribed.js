import React from 'react';
import Back from '../../images/back3.png';

import {Link } from 'react-router-dom';

const Middle = (props) => (
    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats"   onClick={props.bookstore_mover}>
            <div className="card-header" data-background-color="pink">
                <i className="material-icons">content_copy</i>
            </div>
            <div className="card-content"

            >
                <p className="category">Subscribed To</p>
                <h3 className="title">49
                    <small> Books</small>
                </h3>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="material-icons add ">add</i>
                    <a > Get More Books...</a>
                </div>
            </div>
        </div>
    </div>

);

export default Middle;