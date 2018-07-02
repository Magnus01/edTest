import React from 'react';

import Subscribed from './Subscribed';
import Learner from './Learner';
import Assignment from './Assignment';
import EAttendance from './EAttendance';


const TopNav = (props) => (
    <div >

        {console.log(props, 'props in indexTopNAv')}
        <Subscribed
           props = {props}/>
        <Learner
           props = {props}/>
        <Assignment
            props = {props}/>
        <EAttendance
            props = {props}/>

    </div>
);

export default TopNav;