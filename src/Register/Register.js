import React, { Component } from 'react';
import {updatetitle, updatedescription, fregister2, fregister, next, fnext, register2, dashboard } from '../actions/classroom';
import { Navbar, Button } from 'react-bootstrap';

import {connect} from 'react-redux';
// import CircleButton from './Assignments/util/CircleButton';
import FaEdit from 'react-icons/lib/fa/edit';

class Register extends Component {
    constructor() {
        super();
        // this.state =
        //     {
        //         title: this.props ? this.props.user.title : '',
        //         description: this.props ? this.props.user.description : '',
        //
        //         // id: this.props.id ? this.props.id : null,
        //         // errors: {},
        //         // fetching: false
        //     };
        this.nextcss = this.nextcss.bind(this);
        this.nextcss2 = this.nextcss2.bind(this);
        // this.innerfunction = this.innerfunction.bind(this);
        this.innerfunction2 = this.innerfunction2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.goTo = this.goTo.bind(this);
        this.logout = this.logout.bind(this);
    }

    // componentWillReceiveProps = (nextProps) => {
    //     console.log("NEXTPROPS");
    //     console.log(nextProps);
    //     if(!nextProps) {
    //         this.setState({
    //             // id: nextProps.id,
    //             title: nextProps.user.title,
    //             description: nextProps.user.description
    //         });
    //     }
    // };

    handleSubmit(event) {
        event.preventDefault();

        // let title = this.props.user.title;
        // this.props.postUni(title);
        
        // alert(this.props.user.title);
    }

    handleSubmit2(event) {
        event.preventDefault();

        // let title = this.props.user.title;
        // this.props.postUni(title);

        // alert(this.props.user.title);
    }

    goTo(route) {
        console.log( 'route');
        this.props.history.replace(`/${route}`);
    }

    handleChange(event) {
        event.preventDefault();
        let title = event.target.value;
        this.props.updatetitle(title);
    }

    handleChange2(event) {
        event.preventDefault();
        let description = event.target.value;
console.log(this.props, 'this.propsDescription');
        this.props.updatedescription(description);
    }

    //
    // innerfunction () {
    //     this.props.fregister();
    //     this.props.register2();
    //     // this.props.fmoveup();
    // }

    nextcss () {
        this.props.next();

    }

    logout() {
        this.props.auth.logout();
    }



    innerfunction2 () {
        this.props.fregister2();
        this.props.dashboard();
        // this.props.fmoveup();
    }

    nextcss2 () {
        // this.props.next();
        this.props.fregister();
        this.goTo('dashboard');
        this.props.dashboard();

        // setTimeout(() => this.innerfunction2(), 700);
    }


    render() {
        const { isAuthenticated } = this.props.auth;

        return (


            <div className="startcontainerregister1">
                <div>
                    <div>
                        {isAuthenticated() &&
                        <Button
                            bsStyle="primary"
                            className="btn-margin"
                            onClick={this.logout}
                        >
                            Log Out
                        </Button>}
                    </div>
                </div>

                <div className="field1">
                    <div className={`field1 ${this.props.user.next}`}>
                    <h1 className="heading-5">Which Institution are you working in?</h1>

                        <form onSubmit={this.handleSubmit} className= "w-form">
                        <input
                            type="search"
                            className="invisible-field w-input"
                            af="adf"
                            maxlength="256"
                            value = {this.props.user ? this.props.user.title : ''}
                            onChange = {this.handleChange}
                            name="query"
                            placeholder="Institution…"
                            id="search"
                            required="">

                        </input>


                        <button  onClick = {this.nextcss} gradient="bg1" text="Submit" icon={<FaEdit/>}></button>
                        {/*<CircleButton  onClick = {this.nextcss} gradient="bg1" text="Submit" icon={<FaEdit/>}></CircleButton>*/}

                    </form>

                    </div>
                    <div className={`field2 ${this.props.user.next}`}>
                        <h1 className="heading-5">Name of your Department?</h1>

                        <form onSubmit={this.handleSubmit2} className= "w-form">
                            <input
                                type="search"
                                className="invisible-field w-input"
                                af="adf"
                                maxlength="256"
                                value = {this.props.user ? this.props.user.title : ''}
                                onChange = {this.handleChange2}
                                name="query"
                                placeholder="Institution…"
                                id="search"
                                required="">

                            </input>


                            <button  onClick = {this.nextcss2} gradient="bg1" text="Submit" icon={<FaEdit/>}></button>
                            {/*<CircleButton  onClick = {this.nextcss} gradient="bg1" text="Submit" icon={<FaEdit/>}></CircleButton>*/}

                        </form>

                    </div>

                            </div>
                            </div>




        );
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom')
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {fregister2, updatetitle, updatedescription, next, fnext, dashboard, fregister, register2})(Register);
