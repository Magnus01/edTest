import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import { select } from 'd3';
import CircularProgressbar from './CircleProgress';
import './progresscircle.css';
import './style.css';



import {  pChapter} from '../../../actions/T_User';

import {connect} from 'react-redux';

var FaBeer = require('react-icons/lib/fa/lock');
const array = [];
const results = [];

class Node extends React.Component {

  constructor(props) {
    super(props);
    const { parent } = props.nodeData;
    const originX = parent ? parent.x : 0;
    const originY = parent ? parent.y : 0;

    this.state = {
      transform: this.setTransformOrientation(originX, originY),
      initialStyle: {
        opacity: 0,
      },
        color: 'black',
        counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.Hover = this.Hover.bind(this);
    this.HoverOut = this.HoverOut.bind(this);

  }

   hasDuplicates(array) {


       var seen = {};
       return array.filter(function(item) {
           return seen.hasOwnProperty(item) ? false : (seen[item] = true);
       });


    }

    componentWillReceiveProps(){

        let newone = this.props.nodeData.depth;
        array.push(newone);
    }


  componentDidMount() {
    const { x, y } = this.props.nodeData;
    const transform = this.setTransformOrientation(x, y);
    this.applyTransform(transform);
  }


  componentWillUpdate(nextProps) {
    const transform = this.setTransformOrientation(nextProps.nodeData.x, nextProps.nodeData.y);

    this.applyTransform(transform);
  }


  setTransformOrientation(x, y) {
    return this.props.orientation === 'horizontal' ?
      `translate(${y},${x})` :
      `translate(${x},${y})`;
  }

  applyTransform(transform, opacity = 1, done = () => {}) {
    const { transitionDuration } = this.props;

    select(this.node)
    .transition()
    .duration(transitionDuration)
    .attr('transform', transform)
    .style('opacity', opacity)
    .each('end', done);
  }

  handleClick() {
      console.log(this.props.nodeData, 'nodeDataid');
      this.props.nodeData.unlock == true ?
      this.props.pChapter(this.props.nodeData.id) : null
      // this.props.onClick(this.props.nodeData.id);
  }



    Hover() {
    let color = 'blue';
    this.setState({color});
    }

    HoverOut() {
        let color = 'grey';
        this.setState({color});
    }

  componentWillLeave(done) {
    const { parent } = this.props.nodeData;

    const originX = parent ? parent.x : 0;
    const originY = parent ? parent.y : 0;
    const transform = this.setTransformOrientation(originX, originY);
    this.applyTransform(transform, 0, done);
  }

      render() {
    const { nodeData, styles } = this.props;
    const nodeStyle = nodeData._children ? { ...styles.node } : { ...styles.leafNode };
    return (


    <g
        id={nodeData.id}
        ref={(n) => { this.node = n; }}
        style={this.state.initialStyle}
        // className={nodeData._children ? 'nodeBase' : 'leafNodeBase'}
        className={nodeData._children ? 'nodeBase' : 'leafNodeBase'}
        transform={this.state.transform}
        onClick={this.handleClick}

      >



      <CircularProgressbar className="CircularProgressbar-path"
                           // percentage={this.props.nodeData.percentage}
                           percentage={80}
                           radius = {this.props.circleRadius+20}
                           initialAnimation = {true}  />

        <text
          // className="nodeNameBase"
          textAnchor={this.props.textAnchor}
          style={{fontSize:  "18px"}}
          stroke="black"
          x="-50"
          y="-38"
          dy=".35em"
        >
          {this.props.name}
        </text>



          // style={}
      />

        {this.props.nodeData.unlock  === false   ?
            <g> <text   stroke="black" x="-34" y="52">Skill</text><FaBeer size={32}  x="14" y="20"/></g>
            : null }
      </g>


    );
  }
}

export default connect(null, {pChapter})(Node);

Node.defaultProps = {
  textAnchor: 'start',
  attributes: undefined,
  styles: {
    node: {
      circle: {},
      name: {},
      attributes: {},
    },
    leafNode: {
      circle: {},
      name: {},
      attributes: {},
    },
  },
};

Node.propTypes = {
  nodeData: PropTypes.object.isRequired,
  orientation: PropTypes.oneOf([
    'horizontal',
    'vertical',
  ]).isRequired,
  transitionDuration: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  attributes: PropTypes.object,
  textAnchor: PropTypes.string,
  circleRadius: PropTypes.number.isRequired,
  styles: PropTypes.object,
};
