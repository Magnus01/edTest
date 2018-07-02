import React from 'react';
import './index.css';

const CircleButton = (props) => (
        <div className={`${props.gradient}  circlebutton`} onClick = {props.onClick}>
            <div className="cb-icon">{props.icon}</div>
            <div className="cb-text">{props.text}</div>
        </div>
);

// todo: set prop defaults and/or prop expectations

export default CircleButton;