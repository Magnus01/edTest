import React from 'react';

import Middle from './Middle';


const TopNav = (props) => (
    <div className="so-topnav">
        {/*<Left/>*/}
        {console.log(props, 'props in indexTopNAv')}
        <Middle
           props = {props}/>
        {/*<Right/>*/}
    </div>
);

export default TopNav;
