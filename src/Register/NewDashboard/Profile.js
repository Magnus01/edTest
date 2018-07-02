import React, { Component } from 'react';

import {connect} from 'react-redux';



class Profile extends Component {


 render() {
    return <div className="profile">
        <a href="#" className="profil_edit w-button">Edit Profile</a>
        {/*<div width="100" height="100" className="profile_picture"></div>*/}
        <img src="./images/avatar.png" width="100" className="profile_picture"></img>
        <div className="profile_block"><strong className="name_profile2">Ardeshir SHARIFZADEHGAN</strong></div>
        <div className="score"> Score: 8,000,000,000 pts</div>
        <div className="setting_section">
            <img src="./images/setting_icon---Copie.png" srcSet="./images/setting_icon---Copie-p-500.png 500w, ../images/setting_icon---Copie-p-800.png 800w, ./images/setting_icon---Copie.png 980w" sizes="(max-width: 767px) 7vw, 11vw" className="setting"></img>
        </div>
    </div>
	

	
	;
  }
}


export default Profile;
