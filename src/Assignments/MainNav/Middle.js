import React from 'react';
import Back from '../../images/back3.png';

import {Link } from 'react-router-dom';

const Middle = () => (
    <nav className="navbar navbar-transparent navbar-absolute">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand" >Mobile Development</div>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">

                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="material-icons">notifications</i>
                            <span className="notification">5</span>
                            <p className="hidden-lg hidden-md">Notifications</p>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#">Mike John responded to your email</a>
                            </li>
                            <li>
                                <a href="#">You have 5 new tasks</a>
                            </li>
                            <li>
                                <a href="#">You're now friend with Andrew</a>
                            </li>
                            <li>
                                <a href="#">Another Notification</a>
                            </li>
                            <li>
                                <a href="#">Another One</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="material-icons">person</i>
                            <p className="hidden-lg hidden-md">Profile</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>/**
     * Created by Bruker on 3/27/2018.
     */


);

export default Middle;