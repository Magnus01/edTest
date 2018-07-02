import axios from 'axios';






export function postUni(title, description) {
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
                dispatch({type: "POST_UNI_SUCCESS", payload: response.data});
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

export function updatedescription(description) {

    return (dispatch) => {
        dispatch({
            type: "SELECT_UPDATE_DESCRIPTION",
            payload: description
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
export function classroomcss() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_CLASS_CSS",
            payload: 'classroomcss'
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

export function fclassroomcss() {

    return (dispatch) => {
        dispatch({
            type: "F_SELECT_CLASS_CSS",
            payload: ''
        })
    }
}