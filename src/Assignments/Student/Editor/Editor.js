import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/monokai';

function onChange(newValue) {
    console.log('change',newValue);
}


class Monaco extends React.Component {
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

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        event.preventDefault();
        let title = event.target.value;
        this.props.updatetitle(title);
    }
    render() {

        return (
            <AceEditor
                mode="javascript"
                theme="monokai"
                name="blah2"
                onLoad={this.onLoad}
                onChange={this.handleChange}
                fontSize={14}
                width= {800}
                height={625}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value = {  ''}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
        );
    }
}

export default Monaco;

