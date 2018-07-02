import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class Edit_Profile extends Component {


 render() {
    return <div className="outerstart_container1">
        <h1 className="edit_profile_header">Edit your profile</h1>
        <div className="w-form">
            <form id="email-form1" name="email-form" data-name="Email Form" className="form-2"><label htmlFor="surname" className="field-label">Surname:</label>
                <input type="text" className="text-field w-input" maxLength="256" autoFocus="true" name="surname" data-name="surname" placeholder="Enter your surname" id="surname" required=""></input>
                <label htmlFor="first_name" className="field-label">First name:</label>
                <input type="text" className="text-field w-input" maxLength="256" autoFocus="true" name="first_name" data-name="first_name" placeholder="Enter your first name" id="first_name" required=""></input>
                    <label htmlFor="bio" className="field-label">Bio:</label>
                    <input type="text" className="profile_edit_texarea w-input" maxLength="256" autoFocus="true" name="bio" data-name="bio" placeholder="Present yourself!" id="bio" required=""></input>
                    <input type="submit" value="Submit" data-wait="Please wait..." className="submit-button w-button"></input>
            </form>
            <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
            </div>
        </div>
    </div>

	

	
	;
  }
}


/*function mapStateToProps(state) {
    return {
        content: state.content
    };
}*/


/*function matchDispatchToProps(dispatch){
    return bindActionCreators({ getContent: getContent}, dispatch);
}*/


export default Edit_Profile;
