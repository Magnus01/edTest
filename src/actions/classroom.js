import axios from 'axios';
import { API_URL } from './../constants';



//
//
//
export function postUni(uniInfo) {
    console.log(uniInfo, 'uniinfo');
    let uniInfo2 = {
        Name: uniInfo,
        Description: 'Professor einhart'
    };

    return (dispatch) => {
        dispatch({type: "POST_UNI_START"});
        return axios.post(`http://localhost:51739/api/users`, uniInfo2 )
            .then((response) => {
                console.log(response, 'RESPONSE UNIINFO');
                dispatch({type: "POST_UNI_SUCCESS", payload: response.data});
            })
    }
}

//
export function getclassrooms(userId) {

    let strOK = userId;
    // let strOKun = unescape(this.state.profile.sub);
    // let strOKes = escape(this.state.profile.sub);
    // console.log(strOK,strOKun, strOKes, 'ok');
    let newstring = 'http://localhost:58407/api'+'/'+strOK+ '/' + 'classrooms';

    console.log(newstring, 'newstringclass1');
    return (dispatch) => {
        dispatch({type: "SELECT_CLASS"});
        axios.get(newstring )
            .then((response) => {

                dispatch({type: "GET_CLASSES_SUCCESS", payload: response.data});

            })


            .catch((error) => {
                dispatch({type: "GET_CLASSES_ERROR", payload: error});
            });

    }
}

export function getinvitations(userId) {

    let strOK = userId;
    // let strOKun = unescape(this.state.profile.sub);
    // let strOKes = escape(this.state.profile.sub);
    // console.log(strOK,strOKun, strOKes, 'ok');
    let newstring = 'http://localhost:58407/api'+'/'+strOK+ '/' + 'GetInvitations';

    console.log(newstring, 'newstringclass1');
    return (dispatch) => {
        dispatch({type: "SELECT_CLASS"});
        axios.get(newstring )
            .then((response) => {

                dispatch({type: "GET_INVITATIONS_SUCCESS", payload: response.data});
            })


            .catch((error) => {
                dispatch({type: "GET_INVITATIONS_ERROR", payload: error});
            });

    }
}
//
// export function getuserId() {
//     const { getAccessToken } = this.props.auth;
//
//     console.log(this.props.auth,this.state.profile, "this.props.auth");
//
//     const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
//
//     // let data= data: { 'user' : 'name' };
//     let json = {
//
//         "Name": this.state.profile.given_name + " " + this.state.profile.family_name,
//         "Description": this.state.profile.email,
//         "Id" : this.state.profile.sub,
//         "EducatorDetails": {
//             "Name" : "education",
//             "Description" : "description"
//         }
//     };
//
//     axios.post(`${API_URL}`,json,  headers )
//         .then(response => this.setState({ message: response.data.message }))
//         .catch(error => this.setState({ message: error.message }));
// }

//
// export function postUni(uniInfo) {
//     console.log(uniInfo, 'uniinfo');
//
//
//     return (dispatch) => {
//
//                 dispatch({type: "POST_UNI_SUCCESS", payload: title});
//
//     }
// }





export function postUni2(title, description) {
    // console.log(uniInfo, 'uniinfo');
    let uniInfo2 = {
        Name: title,
        Description: description
    };

    return (dispatch) => {
        dispatch({type: "POST_UNI_START"});
        return axios.post(`http://localhost:51739/api/users`, uniInfo2 )
            .then((response) => {
                console.log(response, 'RESPONSE UNIINFO');
                dispatch({type: "POST_UNI_SUCCESS2", payload: response.data});
            })
    }
}








export function show() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_SHOW",
            payload: true
        })
    }
}





export function setProfile(profile) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_SET_PROFILE",
            payload: profile
        })
    }
}


export function getacesstoken(getacesstoken) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_ACCESS",
            payload: getacesstoken
        })
    }
}


export function User() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_USER",
            payload: true
        })
    }
}

export function F_User() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_USER",
            payload: false
        })
    }
}

export function updatetitle(title) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_UPDATE_TITLE",
            payload: title
        })
    }
}

// this.props.postonlyuser(authResult.idTokenPayload.sub,authResult.idTokenPayload.email, authResult.idTokenPayload.name);
export function postonlyuser(url, json, headers) {



    alert('hi');
    axios.post(url, json, headers)
        .then(response => this.setState({message: response.data.message}))
        .catch(error => this.setState({message: error.message}));
}

//
//
//

export function addtostudentcounter() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_ADD_STUDENT_COUNTER",
            payload: 1
        })
    }
}



export function subtracttostudentcounter() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_SUBTRACT_STUDENT_COUNTER",
            payload: 1
        })
    }
}


export function updatedescription(description) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_UPDATE_DESCRIPTION",
            payload: description
        })
    }
}

export function updatenameclass(nameclass) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_UPDATE_NAMECLASS",
            payload: nameclass
        })
    }
}

export function updatesubjectclass(subjectclass) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_UPDATE_SUBJECTCLASS",
            payload: subjectclass
        })
    }
}

export function hide() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_HIDE",
            payload: false
        })
    }
}

export function book() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK",
            payload: true
        })
    }
}
//
// export function createclass(userid) {
//
//     return (dispatch) => {
//         dispatch({type: "SELECT_CLASS"});
//         axios.post("http://localhost:5000/api/courses")
//             .then((response) => {
//                 dispatch({type: "FETCH_COURSES_SUCCESS", payload: response.data});
//             })
//             .catch((error) => {
//                 dispatch({type: "FETCH_COURSES_ERROR", payload: error});
//             });
//     }
//
//     return (dispatch) => {
//         dispatch({
//             type: "SELECT_CLASS",
//             payload: true
//         })
//     }
// }



export function createclass(userid, json,) {


    let strOK = userid;
    // let strOKun = unescape(this.state.profile.sub);
    // let strOKes = escape(this.state.profile.sub);
    // console.log(strOK,strOKun, strOKes, 'ok');
    let newstring = 'http://localhost:58407/api'+'/'+strOK+ '/' + 'classrooms';

    console.log(newstring, 'newstringclass1');
    return (dispatch) => {
        dispatch({type: "SELECT_CLASS"});
        axios.post(newstring,json )
            .then((response) => {

                dispatch({type: "POST_CLASS_SUCCESS", payload: response.data})
                dispatch({
                    type: "SELECT_CLASS_CSS",
                    payload: response.data.id
                })
            })


            .catch((error) => {
                dispatch({type: "POST_CLASSES_ERROR", payload: error});
            });

    }


    // console.log(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`, 'consoleloggingclassroom');
    // axios.post(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`,json,  headers )
    //     .then(response => this.setState({ message: response.data.message }))
    //     .catch(error => this.setState({ message: error.message }));
}



export function sendstudents(url, json) {



    return (dispatch) => {
        dispatch({type: "SELECT_CLASS"});
        axios.post(url,json )
            .then((response) => {

                dispatch({type: "POST_STUDENTSINVITE_SUCCESS", payload: response.data});
            })


            .catch((error) => {
                dispatch({type: "POST_STUDENTSINVITE_ERROR", payload: error});
            });
    }

        //
        // .then(response => this.setState({ message: response.data.message }))
        // .catch(error => this.setState({ message: error.message }));



    // console.log(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`, 'consoleloggingclassroom');
    // axios.post(`${API_URL+'/'+unescape(this.state.profile.sub) + '/' + 'classrooms'}`,json,  headers )
    //     .then(response => this.setState({ message: response.data.message }))
    //     .catch(error => this.setState({ message: error.message }));
}

export function deleteClassroom(userid, id) {
    console.log(id.id, 'id to delet');
    return (dispatch) => {
        dispatch({type: "DELETE_START"});
        return axios.delete(`http://localhost:58407/api/${userid}/classrooms/${id.id}`)
            .then((response) => {
                dispatch({type: "DELETED_CLASSROOM", payload: id });
            })
            .catch((error) => {
                dispatch({type: "FETCH_ERROR", payload: error});
            });
    }
}



















export function moveup() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_MOVEUP",
            payload: ''
        })
    }
}

export function fmoveup() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_MOVEUP",
            payload: 'testing'
        })
    }
}

export function bookcss() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_CSS",
            payload: 'bookcss'
        })
    }
}

export function fbookcss() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_CSS",
            payload: ''
        })
    }
}
export function classroomcss(id) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CLASS_CSS",
            payload: id
        })
    }
}
export function pickclassroom(id) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CLASSROOM",
            payload: id.id
        })
    }
}

export function fclassroomcss() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CLASS_CSS",
            payload: ''
        })
    }
}

export function next() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_NEXT",
            payload: 'next'
        })
    }
}

export function fnext() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_NEXT",
            payload: ''
        })
    }
}

export function fcreateclass() {

    return (dispatch) => {
        dispatch({
            type: "REMOVE_CLASS_1",
            payload: false
        })
    }
}


export function makeclass1() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_1_CLASS_PROCESS",
            payload: true
        })
    }
}

export function makeclass2() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_2_CLASS_PROCESS",
            payload: true
        })
    }
}
export function makeclass3() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_3_CLASS_PROCESS",
            payload: true
        })
    }
}

export function fmakeclass1() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_1_CLASS_PROCESS",
            payload: false
        })
    }
}


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






export function dashboard() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_DASHBOARD",
            payload: true
        })
    }
}
export function fdashboard() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_DASHBOARD",
            payload: false
        })
    }
}

export function classdashboard() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CLASS_DASHBOARD",
            payload: true
        })
    }
}
export function fclassdashboard() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CLASS_DASHBOARD",
            payload: false
        })
    }
}
export function bookdashboard() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_BOOK_DASHBOARD",
            payload: true
        })
    }
}
export function fbookdashboard() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_BOOK_DASHBOARD",
            payload: false
        })
    }
}


export function register() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_REGISTER",
            payload: true
        })
    }
}

export function fregister() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_REGISTER",
            payload: false
        })
}
}


export function register2() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_REGISTER2",
            payload: true
        })
    }
}

export function fregister2() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_REGISTER2",
            payload: false
        })
}
}