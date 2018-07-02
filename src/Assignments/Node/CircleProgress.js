import React from 'react';
import PropTypes from 'prop-types';
// import Lock from  './lock3.png';
import mainLogo from'./lock3.png';
import abacus from './svg/abacus.svg';
const MIN_PERCENTAGE = 0;
const MAX_PERCENTAGE = 100;

class CircularProgressbar extends React.Component {
    constructor(props) {
        super(props);
        this.Hover = this.Hover.bind(this);
        this.HoverOut = this.HoverOut.bind(this);
        this.state = {
            percentage: props.initialAnimation ? 0 : props.percentage,
            opacity: 0,
        };
    }

    Hover() {
        let opacity = 0.4;
        this.setState({opacity});

    }

    HoverOut() {
        let opacity = 0;
        this.setState({opacity});

    }

    componentDidMount() {
        if (this.props.initialAnimation) {
            this.initialTimeout = setTimeout(() => {
                this.requestAnimationFrame = window.requestAnimationFrame(() => {
                    this.setState({
                        percentage: this.props.percentage,
                    });
                });
            }, 0);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            percentage: nextProps.percentage,
        });
    }

    componentWillUnmount() {
        clearTimeout(this.initialTimeout);
        window.cancelAnimationFrame(this.requestAnimationFrame);
    }

    getPathDescription() {
        const radius = this.getRadius();
        return `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;
    }
    getPathDescriptionPercentage() {
        let radius = this.getRadius();
        return `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2* radius}
    `;
    }

    getProgressStyle() {
        const diameter = Math.PI * 2 * this.getRadius();
        const truncatedPercentage = Math.min(Math.max(this.state.percentage, MIN_PERCENTAGE), MAX_PERCENTAGE);
        return {
            strokeDasharray: `${diameter}px ${diameter}px`,
            strokeDashoffset: `${((100 - truncatedPercentage) / 100 * diameter)}px`,
            fill: 'rgb(4, 250, 253)',
            stroke: 'rgb(4, 250, 253)',


    }
    }

    getRadius() {
        // return (3 - this.props.strokeWidth / 2);
        return (this.props.radius);
    }

    render() {
        const classForPercentage = this.props.classForPercentage ? this.props.classForPercentage(this.props.percentage) : '';
        const pathDescription = this.getPathDescription();
        const PathDescriptionPercentage = this.getPathDescriptionPercentage();

        return (
            <g
                fillOpacity={this.state.opacity}
            >
                <path
                    className="CircularProgressbar-trail"
                    d={pathDescription}
                    strokeWidth={this.props.radius-22}
                    fillOpacity={this.state.opacity}
                    transform="translate(-50 -50)"
                />


                <path
                    className="CircularProgressbar-path"
                    d={PathDescriptionPercentage}
                    strokeWidth={this.props.radius-5}
                    onMouseOver = {this.Hover}
                    onMouseOut  = {this.HoverOut}
                    fillOpacity={this.state.opacity}
                    width="300"
                    height="300"
                    transform="translate(-50 -50)"
                    style={this.getProgressStyle()}
                />

                <text

                    transform="translate(-70 -8)"
                    stroke="cyan"
                >
                    {this.props.textForPercentage(this.props.percentage)}
                </text>
                <mainLogo/>
                <image href="http://diggit.no/png/writing.png" x="-25" y="-25" height="50" width="50"/>

        </g>
        );
    }
}

CircularProgressbar.propTypes = {
    percentage: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number,
    className: PropTypes.string,
    initialAnimation: PropTypes.bool,
    classForPercentage: PropTypes.func,
    textForPercentage: PropTypes.func,
};

CircularProgressbar.defaultProps = {
    strokeWidth: 8,
    className: '',
    initialAnimation: false,
    textForPercentage: (percentage) => `${percentage}%`,
};

export default CircularProgressbar;