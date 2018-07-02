import React from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import { DateTimePicker } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en');
momentLocalizer();

// let { DateTimePicker } = ReactWidgets
// let widget = (
//     <DateTimePicker
//         dropUp
//         data={[
//             'orange',
//             'red',
//             'blue',
//             'purple'
//         ]}
//     />
// );
export default class ChangeExample extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {value: this.props.initialValue}
    }

    render() {
        return (
            // {widget}


            <DateTimePicker
                value={this.state.value}
                onChange={value => this.setState({value})}
            />
        )
    }
}