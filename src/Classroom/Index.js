import React from 'react';

import ClassCard from './ClassCard';


const Index = (props) => (
    <div className="col-md-4">

        <div className="card"
             onClick={() => { props.moverassignment(props.id)}}

        >
            <div className="card-header lightgreen" >

                <div className="">
                    <div className="w-row">
                        <div className="w-col w-col-6">
                            <div className="meetingimgdiv"></div>
                        </div>
                        <div className="w-col w-col-6">

                            <div className="meetingdetailsmiddle"       onClick={() => { props.deleteClassroomfun(props.userid,props.id)}}>
                                <div className="w-row">
                                    <div className="w-col w-col-6">
                                        <div className="goingtext">{props.enrollmentlength + ' students '}</div>
                                    </div>
                                    <div className="w-col w-col-6">
                                        <div className="goingtext notgoing">
                                            {props.enrollmentlength + ' students ' + props.invitationlength  + ' invited'}}</div>
                                    </div>
                                </div>
                                <div className="div-block-5">
                                    <div className="w-row">
                                        <div className="attendcol w-col w-col-5">
                                            <div>
                                                <div className="attendeediv"></div>
                                                <div className="attendeediv attend1 attendplu attendu"></div>
                                            </div>
                                        </div>
                                        <div className="column-11 w-col w-col-7">
                                            <div className="plusenumore">+5 more</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div>
                {props.studentInvitation ? props.studentInvitation.map((name) =>
                        <ClassCard
                            name={name}
                        />
                    ,
                ) : null}


            </div>

            {/*<div className="card-content">*/}
                {/*<h4 className="title">{this.props.user.getinvitations[this.props.StudentInvitation].name}</h4>*/}
                {/*<p className="category">*/}
                    {/*<span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> Student Participation</p>*/}
            {/*</div>*/}
            <div className="card-footer">
                <div className="stats">
                    <i className="material-icons">access_time</i> updated 4 minutes ago
                </div>
            </div>
        </div>
    </div>
);

export default Index;
