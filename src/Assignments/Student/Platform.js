import React, { Component } from 'react';

import './css/course-creator-ui.webflow.css';


import {connect} from 'react-redux';


class Student extends Component {

 
    render() {
        
        return (



            <div className="so-main">
                {/*<div className="so-m-l-3deffect">*/}
                    {/*<div className="so-m-l-3de-bottomtriangle"></div>*/}
                    {/*<div className="so-m-l-3de-toptriangle"></div>*/}
                {/*</div>*/}
                <div className="so-m-l-m-quartercirclebutton">
                    <div className="div-student-10">
                        <div className="text-block-15">+</div>
                    </div>
                </div>
                <div className="so-m-left">
                    <div className="so-m-l-main">
                        <div className="so-m-l-m-topshadow"></div>
                        <ol overflow-x="visible" overflow-y="scroll" id="theList" overflow="auto" className="so-m-l-m-contentslist w-list-unstyled">
                            <li className="so-m-l-m-cl-item">

                                <div className="so-m-l-m-cl-i-view">
                                    <div className="richtext">
                                        <p className="paragraph-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="so-m-l-m-cl-item">
                                <div className="so-m-l-m-cl-i-view">
                                    <div className="codesnippet">
                                        <div className="html-embed w-embed">
                  <pre>
<code>def f(x):
	result = 2*x+3
	return result</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="so-m-l-m-cl-item">
                                <div className="so-m-l-m-cl-i-view">
                                    <div className="mathequation">
                                        <h2 className="heading-11">f(a)=12πi∮γf(z)z−adz</h2>
                                    </div>
                                </div>
                            </li>
                            <li className="so-m-l-m-cl-item">

                                <div className="exercise-section">
                                    <div className="multiplechoice">
                                        <p className="paragraph-7">Suspendisse varius enim in eros elementum tristique?<p>A: Lorem ipsum</p><p>B: Dolor sit amet</p><p>C: Duis cursus</p><p>D: Aenean faucibus</p></p>
                                    </div>
                                    <h1 className="exercise-icon">?</h1>
                                </div>
                            </li>
                            <li className="so-m-l-m-cl-item">
                                <div className="exercise-section">
                                    <div className="fillintheblank">
                                        <p className="paragraph-7">Lorem ipsum dolor ____________, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ____________, mi quis viverra ornare, eros dolor ____________, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum ____________. </p>
                                    </div>
                                    <h1 className="exercise-icon">?</h1>
                                </div>
                            </li>
                            <li className="so-m-l-m-cl-item">
                                <div className="exercise-section">
                                    <div className="code">
                                        <p className="paragraph-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut trique?</p>
                                    </div>
                                    <h1 className="exercise-icon">?</h1>
                                </div>
                            </li>
                        </ol>

                    </div>
                </div>

            </div>


    );
    }
}


function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom');

    return {
        user: state.user,
        inclass: state.inclass
    }
}


export default connect(mapStateToProps)(Student);

 