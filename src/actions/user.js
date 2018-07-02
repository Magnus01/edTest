import axios from 'axios';





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