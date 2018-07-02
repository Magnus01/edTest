import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import { layout, select, behavior, event } from 'd3-3';
import clone from 'clone';
import deepEqual from 'deep-equal';
import uuid from 'uuid';
import CircularProgressbar from './../Node_Practice/CircleProgress';
import Node from '../Node_Practice';
import Link from '../Link';
import './style.css';
import {connect} from 'react-redux';


import {pointf,UserToStore, ChapterToStore,CourseToStore,refreshfetch, Activate} from '../../../actions/T_User';

var points;
class Tree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialRender: true,
            data: this.assignInternalProperties(clone(props.data)),
        };
        this.findNodesById = this.findNodesById.bind(this);
        this.collapseNode = this.collapseNode.bind(this);
        this.handleNodeToggle = this.handleNodeToggle.bind(this);
        this.handleOnClickCb = this.handleOnClickCb.bind(this);
    }


    componentDidMount() {
        // console.log(this.props.user, "THISPROPSUSER");
        // console.log(JSON.parse(this.props.user.user.User.records[0][2]), "THISPROPSUSER");

        // let user_V = JSON.parse(this.props.user.user.User.records[0][2]);




        this.bindZoomListener(this.props);
        // TODO find better way of setting initialDepth, re-render here is suboptimal
        this.setState({ initialRender: false }); // eslint-disable-line
    }


    componentWillReceiveProps(nextProps) {
        // Clone new data & assign internal properties

        // this.props.user.activator > 0 ? this.props.Activate() : null
        // this.props.Activate;
        if (!deepEqual(this.props.data, nextProps.data)) {
            this.setState({
                data: this.assignInternalProperties(clone(nextProps.data)),
            });
        }
        this.generateTree();

        // If zoom-specific props change -> rebind listener with new values
        if (!deepEqual(this.props.translate, nextProps.translate)
            || !deepEqual(this.props.scaleExtent, nextProps.scaleExtent)) {
            this.bindZoomListener(nextProps);
        }
    }


    /**
     * setInitialTreeDepth - Description
     *
     * @param {array} nodeSet Array of nodes generated by `generateTree`
     * @param {number} initialDepth Maximum initial depth the tree should render
     *
     * @return {void}
     */
    setInitialTreeDepth(nodeSet, initialDepth) {
        nodeSet.forEach((n) => {
            n._collapsed = n.depth >= initialDepth;
        });
    }


    /**
     * bindZoomListener - If `props.zoomable`, binds a listener for
     * "zoom" events to the SVG and sets scaleExtent to min/max
     * specified in `props.scaleExtent`.
     *
     * @return {void}
     */
    bindZoomListener(props) {
        const { zoomable, scaleExtent, translate } = props;
        const svg = select('.rd3t-svg');
        const g = select('.rd3t-g');

        if (zoomable) {
            svg.call(behavior.zoom()
                .scaleExtent([scaleExtent.min, scaleExtent.max])
                .on('zoom', () => {
                    g.attr('transform',
                        `translate(${event.translate}) scale(${event.scale})`
                    );
                })
                // Offset so that first pan and zoom does not jump back to [0,0] coords
                .translate([translate.x, translate.y])
            );
        }
    }


    /**
     * assignInternalProperties - Assigns internal properties to each node in the
     * `data` set that are required for tree manipulation and returns
     * a new `data` array.
     *
     * @param {array} data Hierarchical tree data
     *
     * @return {array} `data` array with internal properties added
     */

    assignInternalProperties(data) {
        return data.map((node) => {



            node._collapsed = false;
            // if there are children, recursively assign properties to them too
            if (node.children && node.children.length > 0) {
                node.children = this.assignInternalProperties(node.children);
                node._children = node.children;
                if (node.percentage ===100 ) {
                    // console.log(node._children, "node._children");
                    if (typeof node._children !== "undefined") {

                        for (let i = 0; i < node._children.length; i++) {
                            node._children[i].unlock = true;
                        }
                    }
                    else {}
                }
            }
            return node;
        });
    }


    /**
     * findNodesById - Description
     *
     * @param {string} nodeId The `node.id` being searched for
     * @param {array} nodeSet Array of `node` objects
     * @param {array} hits Accumulator for matches, passed between recursive calls
     *
     * @return {array} Set of nodes matching `nodeId`
     */
    // TODO Refactor this into a more readable/reasonable recursive depth-first walk.
    findNodesById(nodeId, nodeSet, hits) {
        if (hits.length > 0) {
            return hits;
        }

        hits = hits.concat(nodeSet.filter((node) => node.id === nodeId));

        nodeSet.forEach((node) => {
            if (node._children && node._children.length > 0) {
                hits = this.findNodesById(nodeId, node._children, hits);

                return hits;
            }
            return hits;
        });

        return hits;
    }


    /**
     * collapseNode - Recursively sets the `_collapsed` property of
     * the passed `node` object and its children to `true`.
     *
     * @param {object} node Node object with custom properties
     *
     * @return {void}
     */
    collapseNode(node) {
        node._collapsed = true;
        if (node._children && node._children.length > 0) {
            node._children.forEach((child) => {
                this.collapseNode(child);
            });
        }
    }


    /**
     * expandNode - Sets the `_collapsed` property of
     * the passed `node` object to `false`.
     *
     * @param {type} node Node object with custom properties
     *
     * @return {void}
     */
    expandNode(node) {

        node._collapsed = false;

    }


    /**
     * handleNodeToggle - Finds the node matching `nodeId` and
     * expands/collapses it, depending on the current state of
     * its `_collapsed` property.
     * `setState` callback receives targetNode and handles
     * `props.onClick` if defined.
     *
     * @param {string} nodeId A node object's `id` field.
     *
     * @return {void}
     */
    handleNodeToggle(nodeId) {
        const data = clone(this.state.data);
        const matches = this.findNodesById(nodeId, data, []);
        const targetNode = matches[0];

        if (this.props.collapsible) {
            targetNode._collapsed
                ? this.expandNode(targetNode)
                : this.collapseNode(targetNode);
            this.setState({ data }, () => this.handleOnClickCb(targetNode));
        } else {
            this.handleOnClickCb(targetNode);
        }
    }


    /**
     * handleOnClickCb - Handles the user-defined `onClick` function
     *
     * @param {object} targetNode Description
     *
     * @return {void}
     */
    handleOnClickCb(targetNode) {
        const { onClick } = this.props;
        if (onClick && typeof onClick === 'function') {
            onClick(clone(targetNode));
        }
    }


    /**
     * generateTree - Generates tree elements (`nodes` and `links`) by
     * grabbing the rootNode from `this.state.data[0]`.
     * Restricts tree depth to `props.initialDepth` if defined and if this is
     * the initial render of the tree.
     *
     * @return {object} Object containing `nodes` and `links`.
     */
    generateTree() {
        const {
            initialDepth,
            depthFactor,
            separation,
            nodeSize,
            orientation,
        } = this.props;

        const tree = layout.tree()
            .nodeSize(orientation === 'horizontal' ?
                [nodeSize.y, nodeSize.x] :
                [nodeSize.x, nodeSize.y]
            )
            .separation((a, b) => deepEqual(a.parent, b.parent) ?
                separation.siblings :
                separation.nonSiblings
            )
            .children((d) => d._collapsed ? null : d._children);

        const rootNode = this.state.data[0];
        const nodes = tree.nodes(rootNode);
        const links = tree.links(nodes);
        console.log(tree.links(nodes), 'LINKSz');
        // set `initialDepth` on first render if specified
        if (initialDepth !== undefined && this.state.initialRender) {
            this.setInitialTreeDepth(nodes, initialDepth);
        }

        if (depthFactor) {
            nodes.forEach((node) => { node.y = node.depth * depthFactor; });
        }

        return { nodes, links };
        {/*<div  className={`rd3t-tree-container ${zoomable ? 'rd3t-grabbable' : undefined}`}>*/}
    }

    render() {
        const { nodes, links } = this.generateTree();
        const {
            percentage,
            orientation,
            translate,
            pathFunc,
            transitionDuration,
            zoomable,
            circleRadius,
            styles,
        } = this.props;

        return (

                <svg     viewBox="0 0 1500 800">
                {/*<svg className="rd3t-svg" x="500" width="1500px" height="800px" viewBox="0 0 25.25 25.25">*/}
                    {/*<defs>*/}
                        {/*<style>{ `.cls-1{opacity:0.4;}.cls-2{fill:#d9f1fd;}.cls-3{fill:none;stroke:#fff;stroke-miterlimit:10;}` }</style>*/}
                    {/*</defs>*/}
                    <defs>
                        <style>
                            { ` .cls-2{isolation:isolate;}.cls-3{clip-path:url(#clip-path);}.cls-4,.cls-7{opacity:0.9;}.cls-5{mix-blend-mode:multiply;}.cls-6{opacity:1;}.cls-7{fill:#fff;` }}
                        </style>

                    </defs>
                    <g class="cls-2" transform='translate(1200, 0) scale(10 10)'>
                        <g id="Layer_1" data-name="Layer 1">

                            <g class="cls-3">
                                <g class="cls-6">
                                    <path class="cls-7"
                                          d="M218.61,219.77l1.35.6-.14.35c0,.06,0,.12-.08.19a2.25,2.25,0,0,1-.08.24l-.09.28-.09.31a9.07,9.07,0,0,0-.28,1.65,9.38,9.38,0,0,0,.06,2.16c0,.1,0,.2.05.3s0,.2.05.3.09.41.15.62A10.29,10.29,0,0,0,220,228a9.9,9.9,0,0,0,.66,1.24,8.87,8.87,0,0,0,.87,1.17,9,9,0,0,0,1.08,1.06,9.5,9.5,0,0,0,5.79,2.19c.26,0,.53,0,.79,0l.39,0,.39,0a10.82,10.82,0,0,0,1.52-.34,10,10,0,0,0,1.4-.56,8.62,8.62,0,0,0,1.25-.75c.2-.13.38-.28.57-.43s.35-.3.51-.46.32-.32.48-.48.29-.33.42-.5a8.06,8.06,0,0,0,.7-1,9.08,9.08,0,0,0,.89-2,10.14,10.14,0,0,0,.37-1.63c0-.12,0-.23,0-.33a2.64,2.64,0,0,1,0-.29c0-.18,0-.33,0-.46V224l1.48,0v.11c0,.08,0,.19,0,.33s0,.32,0,.53,0,.22,0,.33,0,.25,0,.38a10.62,10.62,0,0,1-.42,1.89,11.24,11.24,0,0,1-1,2.28,10,10,0,0,1-.82,1.18c-.15.2-.32.39-.48.58s-.36.38-.55.55-.39.36-.6.54a7.89,7.89,0,0,1-.65.49,10.5,10.5,0,0,1-1.45.87,10.07,10.07,0,0,1-1.63.65,11.12,11.12,0,0,1-1.75.39l-.45.05-.45,0c-.3,0-.61,0-.91,0a11.38,11.38,0,0,1-1.83-.2,10.8,10.8,0,0,1-3.4-1.3,11.72,11.72,0,0,1-1.47-1,11,11,0,0,1-1.24-1.22,11.46,11.46,0,0,1-1.78-2.79,10.33,10.33,0,0,1-.51-1.44,6.72,6.72,0,0,1-.18-.71c0-.12,0-.24-.07-.35s0-.23-.05-.34a10.77,10.77,0,0,1-.07-2.51,10.6,10.6,0,0,1,.33-1.9c0-.13.07-.25.1-.37a3,3,0,0,1,.11-.32c0-.09.06-.19.09-.27s.06-.16.09-.22A2,2,0,0,1,218.61,219.77Z"
                                          transform="translate(-216 -212.37)"/>
                                    <path class="cls-7"
                                          d="M235.07,233l-.88-1.19.13-.11c.08-.06.22-.16.38-.3A8.62,8.62,0,0,0,236,230a9.06,9.06,0,0,0,1.41-2.46,9.49,9.49,0,0,0,.63-3.63,9.67,9.67,0,0,0-.3-2.09,9.33,9.33,0,0,0-2.21-4l-.21-.23-.23-.21-.11-.11-.11-.1-.24-.21-.25-.19-.12-.1-.13-.09-.26-.18-.26-.17a9.45,9.45,0,0,0-7.62-1,9.52,9.52,0,0,0-2.45,1.13,9.61,9.61,0,0,0-2,1.78,10.51,10.51,0,0,0-.8,1.09,2.75,2.75,0,0,0-.17.29l-.17.29c-.1.2-.2.39-.29.6a9.45,9.45,0,0,0-.73,5.11,8.4,8.4,0,0,0,.26,1.23,7.71,7.71,0,0,0,.41,1.17,9,9,0,0,0,1.21,2.06,8.88,8.88,0,0,0,.75.86c.14.13.27.27.41.39s.27.25.42.36a10,10,0,0,0,1.79,1.12,9.63,9.63,0,0,0,3.57.9,8.56,8.56,0,0,0,1.54,0l.17,0,.18,0,.33-.06.61-.13a9.79,9.79,0,0,0,1.72-.63l.25-.13.18-.1.14-.08.74,1.29-.17.1-.21.11-.29.14a10.08,10.08,0,0,1-2,.73,6.76,6.76,0,0,1-.71.16c-.12,0-.25,0-.38.06l-.2,0-.21,0a10.29,10.29,0,0,1-1.78.05,11,11,0,0,1-4.13-1,11.16,11.16,0,0,1-2.07-1.3c-.17-.13-.33-.28-.49-.42l-.48-.44a12.14,12.14,0,0,1-.87-1,10.8,10.8,0,0,1-1.4-2.38,9.77,9.77,0,0,1-.47-1.35,10.79,10.79,0,0,1,.54-7.34c.1-.24.23-.47.34-.7s.13-.23.19-.34.13-.22.2-.33a11.36,11.36,0,0,1,.93-1.26,11,11,0,0,1,2.35-2.06,12.22,12.22,0,0,1,1.37-.76,11.33,11.33,0,0,1,1.47-.55,10.71,10.71,0,0,1,3.07-.45,10.94,10.94,0,0,1,5.75,1.64l.31.2.3.21.15.11.14.11.29.22.27.24.14.12.12.12.26.25.25.26a11.07,11.07,0,0,1,1.6,2.24,10.66,10.66,0,0,1,1,2.44,10.84,10.84,0,0,1-2,9.48,9.81,9.81,0,0,1-1.48,1.52,3.68,3.68,0,0,1-.43.35Z"
                                          transform="translate(-216 -212.37)"/>
                                </g>
                                <circle/>
                            </g>
                        </g>
                    </g>
                    {/*<g  transform='translate(150 60) scale(0.2 0.2)'>*/}
                    {/*<g  transform='translate(750 150) scale(0.3 0.3)'>*/}

                    {/*START*/}
                    <g transform = 'translate(1325, 75)' >

                        <g  transform='scale(0.34 0.34)'>
                    <TransitionGroup
                        component="g"
                        // transform='translate(355 115)'
                        className="rd3t-g"

                        transform={`translate(${translate.x+1050},${translate.y+205})' `}
                    >
                        {links.map((linkData) =>
                            <Link
                                key={uuid.v4()}
                                orientation={orientation}
                                pathFunc={pathFunc}
                                linkData={linkData}
                                transitionDuration={transitionDuration}
                                styles={styles.links}
                            />
                        )}

                        {nodes.map((nodeData) =>


                            <Node
                                key={nodeData.id}
                                orientation={orientation}
                                transitionDuration={transitionDuration}
                                textAnchor="start"
                                nodeData={nodeData}
                                name={nodeData.name}
                                attributes={nodeData.attributes}
                                onClick={this.handleNodeToggle}
                                circleRadius={circleRadius}
                                styles={styles.nodes}
                                percentage = {nodeData.percentage}
                                unlock = {nodeData.unlock}
                                depth = {nodeData.depth}
                            />

                        )
                        }

                    </TransitionGroup>
                        </g>
                    </g>
{/*END*/}



                </svg>
            // </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
        content: state.user.content
    }
}




export default connect(mapStateToProps, {pointf,ChapterToStore, UserToStore, CourseToStore,refreshfetch,Activate})(Tree);

Tree.defaultProps = {
    onClick: undefined,
    orientation: 'vertical',
    translate: { x: 0, y: 0 },
    pathFunc: 'diagonal',
    transitionDuration: 500,
    depthFactor: undefined,
    collapsible: false,
    initialDepth: undefined,
    zoomable: true,
    percentage: 25,
    scaleExtent: { min: 0.1, max: 1 },
    nodeSize: { x: 100, y: 100 },
    separation: { siblings: 1, nonSiblings: 2 },
    circleRadius: 10,
    styles: {},
};

Tree.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    orientation: PropTypes.oneOf([
        'horizontal',
        'vertical',
    ]),
    translate: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    pathFunc: PropTypes.oneOf([
        'diagonal',
        'elbow',
        'straight',
    ]),
    transitionDuration: PropTypes.number,
    depthFactor: PropTypes.number,
    collapsible: PropTypes.bool,
    initialDepth: PropTypes.number,
    zoomable: PropTypes.bool,
    scaleExtent: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    }),
    nodeSize: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    separation: PropTypes.shape({
        siblings: PropTypes.number,
        nonSiblings: PropTypes.number,
    }),
    circleRadius: PropTypes.number,
    styles: PropTypes.shape({
        nodes: PropTypes.object,
        links: PropTypes.object,
    }),
};