import React from 'react';
import Moment from 'moment';
import 'react-widgets/dist/css/react-widgets.css';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

Moment.locale('en');
momentLocalizer();


export default class ChangeExample extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {value: this.props.initialValue}
    }

    render() {
        return (
            <DateTimePicker
                value={this.state.value}
                onChange={value => this.setState({value})}
            />
        )
    }
}
