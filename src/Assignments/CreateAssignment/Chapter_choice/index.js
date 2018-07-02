import React, { Component } from 'react';



import {connect} from 'react-redux';

import SortableTree, {
    getTreeFromFlatData,
    getFlatDataFromTree
} from 'react-sortable-tree';



import Tree from './TreeIndex';



class TreeData extends Component {


    componentDidMount(){

    }



    render() {
        let datatotest = [
            {
                "name": "Control Flow",
                "parent": null,
                "id": 1,
                "treeIndex": 0,
                "children": [
                    {
                        "name": "If Statements",
                        "parent": "6b024d79-7a0a-4b05-a213-28a6d76e4227",
                        "id": 2,
                        "treeIndex": 1
                    },
                    {
                        "name": "For Loops",
                        "parent": "6b024d79-7a0a-4b05-a213-28a6d76e4227",
                        "id": 3,
                        "treeIndex": 2
                    },
                    {
                        "name": "Functions",
                        "parent": "6b024d79-7a0a-4b05-a213-28a6d76e4227",
                        "id": 4,
                        "treeIndex": 3
                    }
                ]
            }
        ];




        return (
            <Tree     zoomable={false}
                // data={myTreeData3}

                      data={this.props.data}

                      orientation = {"vertical"}

                      circleRadius= {2}  translate = {{ x: 200, y: 50 }} />





                    );
                }
            }

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom')
    return {
        user: state.user,
        inclass: state.inclass

    }
}


export default connect(mapStateToProps)(TreeData);



