import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';



class Edit_Setting extends Component {


 render() {
    return <div className="edit_settings">
        <h1 className="edit_setting_header">Edit your settings</h1>
        <div className="form-block-2 w-form">
            <form id="email-form2" name="email-form" data-name="Email Form" className="form-2">
                <label htmlFor="password_old" className="field-label">Edit your password:</label>
                <input type="password" className="text-field w-input" maxLength="256" name="password_old" data-name="password_old" placeholder="Enter your old password" id="password_old"></input>
                    <label htmlFor="password_new" className="field-label">New password:</label>
                <input type="text" className="text-field w-input" maxLength="256" name="password_new1" data-name="password_new1" placeholder="Enter your new password" id="password_new"></input>
                <input type="text" className="text-field w-input" maxLength="256" name="password_new2" data-name="password_new2" placeholder="Rewrite your new password" id="password_new-2"></input>
                            <label htmlFor="language" className="field-label">Change Language:</label>
                            <select id="language" name="language" data-name="language" className="w-select">
                                <option value="">Select your language</option>
                                <option value="nb">Norsk Bokmål</option>
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="nb">español</option>
                            </select>
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


export default Edit_Setting;
