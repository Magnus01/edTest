import React, { Component } from 'react';


const ClassCard = (props) => (


            <div className="card-content">
                <h4 className="title">{props.name}</h4>
                <p className="category">
                    <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>
            </div>



)


export default ClassCard;

