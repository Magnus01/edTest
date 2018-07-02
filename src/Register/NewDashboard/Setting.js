import React, { Component } from 'react';

//import ExerciceDetails from '../containers/exercice-detail';


class Setting extends Component {

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }




    render() {

        return <img src="../images/setting_icon---Copie.png" width="114" srcSet="../images/setting_icon---Copie-p-500.png 500w, ../images/setting_icon---Copie-p-800.png 800w, ../images/setting_icon---Copie.png 980w" sizes="114px" data-w-id="5540d413-72dd-ba6a-a6a2-58029ca97d13" className="setting">
        </img>
		









            ;
    }
}

export default Setting;