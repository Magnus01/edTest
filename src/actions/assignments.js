import axios from 'axios';

import SortableTree, {
    getTreeFromFlatData,
    getFlatDataFromTree
} from 'react-sortable-tree';


import * as types from './actionTypes';

export function fmakeclass1() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_1_CLASS_PROCESS",
            payload: false
        })
    }
}
////////////Search Function///////////////////////
export function SearchBar(b) {

    return (dispatch) => {
        dispatch({
            type: "SEARCH_BAR",
            payload:b
        })
    }
}
///// That is My Functions
// FOr checking which Component is active//
export function activeC(b) {

    return (dispatch) => {
        dispatch({
            type: "ACTIVE_C",
            payload:b
        })
    }
}

export function section() {

    return (dispatch) => {
        dispatch({
            type: "SECTION_SHOW",
            payload: true
        })
    }
}

///// UI COMPONENT////////Side bar
export function E_sbar() {

    return (dispatch) => {
        dispatch({
            type: "E_SBAR",
            payload: true
        })
    }
}

export function feattendance_sbar() {

    return (dispatch) => {
        dispatch({
            type: "feattendance_sbar",
            payload: false
        })
    }
}
///Assignement
export function assignments_sbar() {

    return (dispatch) => {
        dispatch({
            type: "assignments_sbar",
            payload: true
        })
    }
}

export function fassignments_sbar() {

    return (dispatch) => {
        dispatch({
            type: "fassignments_sbar",
            payload: false
        })
    }
}

//Analytics

export function analytic_sbar() {

    return (dispatch) => {
        dispatch({
            type: "analytic_sbar",
            payload: true
        })
    }
}

export function fanalytic_sbar() {

    return (dispatch) => {
        dispatch({
            type: "fanalytic_sbar",
            payload: false
        })
    }
}



///////////////////////////


export function getAllCourses() {
    return (dispatch) => {
        dispatch({type: types.FETCH_START});
        axios.get("http://contentmanufacturingapi.azurewebsites.net/courses")
            .then((response) => {
                dispatch({type: "RECEIVED_ALL_COURSES", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: types.FETCH_ERROR, payload: error});
            });
    }
}


export function getSingleCourse(id) {
    return (dispatch) => {
        dispatch({type: types.FETCH_START});
        // return axios.get(`http://contentmanufacturingapi.azurewebsites.net/courses/${id}`)
        return axios.get(`http://contentmanufacturingapi.azurewebsites.net/courses/11da8b2a-9abb-4270-89f4-e8790d03fa8c`)
            .then((response) => {
                dispatch({type: "GET_SINGLE_COURSE", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: types.FETCH_ERROR, payload: error});
            });
    }
}


// GET Chapters from Database
export function fetchChapters(courseId) {
  //  alert(courseId);

   let dummydata = [
        {
            "name": "Control Flow",
            "parent": null,
            "id": "1",
            "treeIndex": 0,
            "children": [
                {
                    "name": "If Statements",
                    "parent": "6b024d79-7a0a-4b05-a213-28a6d76e4227",
                    "id": "2",
                    "treeIndex": 1
                },
                {
                    "name": "For Loops",
                    "parent": "6b024d79-7a0a-4b05-a213-28a6d76e4227",
                    "id": "3",
                    "treeIndex": 2
                },
                {
                    "name": "Functions",
                    "parent": "6b024d79-7a0a-4b05-a213-28a6d76e4227",
                    "id": "4",
                    "treeIndex": 3
                }
            ]
        }
    ]
    return (dispatch) => {
        dispatch({type: "FETCH_CHAPTERS_START"});
        axios.get(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/`)
            .then((response) => {

                dispatch({type: "GET_TREE_DATA", payload: dummydata
                });
            })
            .then((response) => {


                    dispatch({type: "POST_CHAPTER_START"});
                    return axios.get(`http://sci-code.com/PresentationHack/demo/api.php/Chapter`)
                    // return axios.get(`http://sci-code.com/PresentationHack/demo/api.php/Chapter?transform=${Id}/`)
                        .then((response) => {
                            // console.log(response);
                            dispatch({type: "GET_CHAPTER_ANALYTICS", payload: response.data.Chapter.records});

                        })

            })
            .catch((error) => {
                dispatch({type: "FETCH_CHAPTERS_ERROR", payload: error});
            });
    }
}


//
// // GET Chapters from Database
// export function fetchChapters(courseId) {
//   //  alert(courseId);
//     return (dispatch) => {
//         dispatch({type: "FETCH_CHAPTERS_START"});
//         axios.get(`http://contentmanufacturingapi.azurewebsites.net/courses/${courseId}/chapters/`)
//             .then((response) => {
//
//                 dispatch({type: "GET_TREE_DATA", payload: getTreeFromFlatData({
//
//                     flatData: response.data.map(node => ({
//                         ...node,
//                         parent: node.parent === "00000000-0000-0000-0000-000000000000" ? null : node.parent,
//                         expanded: true
//                     })).map(c => ({
//                         name: c.title,
//                         parent: c.parent,
//                         id: c.id,
//                         treeIndex: c.treeIndex
//                     })),
//                     getKey: node => node.id, // resolve a node's key
//                     getParentKey: node => node.parent, // resolve a node's parent's key
//                     rootKey: null, // The value of the parent key when there is no parent (i.e., at root level)
//                 })
//                 });
//             })
//             .catch((error) => {
//                 dispatch({type: "FETCH_CHAPTERS_ERROR", payload: error});
//             });
//     }
// }

// treeData =
/*** TREE ***/
export const renderTree = chapters => ({
    type: 'RENDER_TREE',
    payload: getTreeFromFlatData({
        flatData: chapters,
        getKey: node => node.id, // resolve a node's key
        getParentKey: node => node.parent, // resolve a node's parent's key
        rootKey: null, // The value of the parent key when there is no parent (i.e., at root level)
    })
});

export function gettreedata(treedata) {

    return (dispatch) => {
        dispatch({
            type: "GET_TREE_DATA",
            payload: treedata
        })
    }
}


export function chapter() {

    return (dispatch) => {
        dispatch({
            type: "CHAPTER_SHOW",
            payload: true
        })
    }
}



export function chart() {

    return (dispatch) => {
        dispatch({
            type: "CHAPTER_SHOW",
            payload: true
        })
    }
}



export function fcomponentsShow() {

    return (dispatch) => {
        dispatch({
            type: "COMPONENT_SHOW",
            payload: false
        })
    }
}





//////////////////////////////////////
////////////////////////////////////////

export function fmakeclass2() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_2_CLASS_PROCESS",
            payload: false
        })
    }
}

export function fmakeclass3() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_3_CLASS_PROCESS",
            payload: false
        })
    }
}



export function assignment() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_ASSIGNMENT",
            payload: true
        })
    }
}


export function fassignment() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_ASSIGNMENT",
            payload: false
        })
    }
}




export function bookmovement() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_MOVEMENT",
            payload: 'next'
        })
    }
}

export function fbookmovement() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_MOVEMENT",
            payload: ''
        })
    }
}


export function bookstore() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_STORE",
            payload: true
        })
    }
}

export function fbookstore() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_STORE",
            payload: false
        })
    }
}


export function booktour() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_TOUR",
            payload: true
        })
    }
}

export function fbooktour() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_TOUR",
            payload: false
        })
    }
}



export function toc() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_TOC",
            payload: true
        })
    }
}


export function ftoc() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_TOC",
            payload: false
        })
    }
}


export function analyzebooks() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_ANALYZEBOOK",
            payload: true
        })
    }
}


export function fanalyzebooks() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_ANALYZEBOOKS",
            payload: false
        })
    }
}




export function inassignments() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INASSIGNMENTS",
            payload: true
        })
    }
}


export function finassignments() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INASSIGNMENTS",
            payload: false
        })
    }
}
export function instudents() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INSTUDENTS",
            payload: true
        })
    }
}


export function finstudents() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INSTUDENTS",
            payload: false
        })
    }
}
export function incurric() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INCURRIC",
            payload: true
        })
    }
}


export function fincurric() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INCURRIC",
            payload: false
        })
    }
}



export function startassignment() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_STARTASSIGNMENT",
            payload: true
        })
    }
}


export function fstartassignment() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_STARTASSIGNMENT",
            payload: false
        })
    }
}

export function sweetalert() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_SWEETALERT",
            payload: true
        })
    }
}


export function fsweetalert() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_SWEETALERT",
            payload: false
        })
    }
}

export function choosetime() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CHOOSETIME",
            payload: true
        })
    }
}


export function fchoosetime() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CHOOSETIME",
            payload: false
        })
    }
}


export function choosechapter() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CHOOSECHAPTER",
            payload: true
        })
    }
}


export function fchoosechapter() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CHOOSECHAPTER",
            payload: false
        })
    }
}














export function moveup_outward() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_INWARD",
            payload: ''
        })
    }
}

export function fmoveup_outward() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_INWARD",
            payload: 'inward'
        })
    }
}



export function createassignment( json,) {


    // let strOK = userid;

    // let newstring = 'http://localhost:58407/api'+'/'+strOK+ '/' + 'classrooms';

    // console.log(newstring, 'newstringclass1');
    return (dispatch) => {
        dispatch({type: "SELECT_ASSIGNMENT"})
            .then((response) => {

                dispatch({type: "POST_BOOKID_ASSIGNMENT_SUCCESS", payload: response.data});
            })


            .catch((error) => {
                dispatch({type: "POST_ASSIGNMENT_DETAILS_ERROR", payload: error});
            });
    }


    // console.log(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`, 'consoleloggingclassroom');
    // axios.post(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`,json,  headers )
    //     .then(response => this.setState({ message: response.data.message }))
    //     .catch(error => this.setState({ message: error.message }));
}