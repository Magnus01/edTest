import axios from 'axios';
// import qs from 'qs';
import querystring from 'querystring';

import { API_URL } from './../constants';

// var querystring = require('querystring');
// var qs = require('qs');
// axios.post('/foo', qs.stringify({ 'bar': 123 }));

export function fetchCourses() {
    return (dispatch) => {
        dispatch({type: "FETCH_COURSES_START"});
        axios.get("http://localhost:5000/api/courses")
            .then((response) => {
                dispatch({type: "FETCH_COURSES_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_COURSES_ERROR", payload: error});
            });
    }
}


export function fetchAnswer() {
    return (dispatch) => {
        dispatch({type: "FETCH_ANSWER_START"});
        axios.get("http://sci-code.com/PresentationHack/demo/api.php/Answer?transform=1/")
            .then((response) => {
                dispatch({type: "FETCH_ANSWER_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_ANSWER_ERROR", payload: error});
            });
    }
}

// IMPORTANT
export function refreshfetch() {
// alert('refreshfetch');
        return (dispatch) => {
            dispatch({type: "FETCH_USERS_START"});
            axios.get("http://sci-code.com/PresentationHack/demo/api.php/User?transform=1/")
                .then((response) => {
                    dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data});
                })
        };
}

// IMPORTANT
export function nullify() {

    return (dispatch) => {
        dispatch({
            type: "SELECT_NULL",
            payload: null
        })
    }
}



// this.props.send(1, this.props.user.pickedChapter, this.props.user.userid.sub),
export function fetchContent() {
    return (dispatch) => {
        dispatch({type: "FETCH_COURSES_START"});

        axios.get("http://sci-code.com/PresentationHack/demo/api.php/Content?transform=1/")

        // axios.get("http://localhost:8080/OLD-CourseConsumer-UI/demo/api.php/Content?transform=1/")
            .then((response) => {
                dispatch({type: "FETCH_CONTENT_SUCCESS", payload: response.data});
            })
            .catch((error) => {
                dispatch({type: "FETCH_CONTENT_ERROR", payload: error});
            });
    }
}



// export function fetchUsers() {
//     // console.log("THIS IS COURSE");
//     console.log(window.location.href, 'window.location.href ');
//     var code = window.location.href.substr(window.location.href.indexOf("=") + 1);
//     console.log(code, 'code');
//
//     return (dispatch) => {
//         dispatch({type: "FETCH_USER_START"})
//
//         .then((response) => {
//
//             dispatch({type: "FETCH_USERS_SUCCESS", payload: code})
//
//         });
//     }
// }

export function fetchUsers() {
    var code = window.location.href.substr(window.location.href.indexOf("=") + 1);
    return (dispatch) => {
        dispatch({
            type: "FETCH_USERS_SUCCESS",
            payload: code
        })
    }
}
//
// export function fetchUsers() {
//     // console.log("THIS IS COURSE");
//     // console.log(window.location.href, 'window.location.href ');
//     var code = window.location.href.substr(window.location.href.indexOf("=") + 1);
//     // console.log(code, 'this is the code');
//
//
//     let jsonCode = {
//         "grant_type": "authorization_code",
//         "client_id": "z7u9UgHEGhap6-PKmEIF2iVShuPAnQ6d",
//         // "client_id": "Tumw2oeVjqo1mmgi0m8ladrkzwVqIGsF",
//         "client_secret": "xkMd-n0pXzvsc6MIlbAJuzxFZqn72oGMwxStC9_MFHcyqmEy9xYZbBZCNXpMVnoA",
//         // "client_secret": "Vh6pKYAMXwoJZ5YF3dBR2O3h83fFRHh8zzdbkXhtokt6HX-XEF1EFdY0BejuRZ9-",
//         "code": code,
//         "redirect_uri": "http://localhost:3000/"
//         // "redirect_uri": "http://diggit.no/build/"
//     }
//
//     // export const AUTH_CONFIG = {
//     //     domain: 'diggit.eu.auth0.com',
//     //     clientId: 'Tumw2oeVjqo1mmgi0m8ladrkzwVqIGsF',
//     //     callbackUrl: 'http://localhost:3000/callback'
//     // }
//
//
//
//     // return;
//
//     return (dispatch) => {
//
//         return axios.post("https://diggit.eu.auth0.com/oauth/token", jsonCode)
//             .then((response) => {
//
//                 const AuthStr = 'Bearer '.concat(response.data.access_token);
//
//
//                 dispatch({type: "POST_COURSE_START"});
//
//                 axios.get("https://diggit.eu.auth0.com/userinfo", {headers: {Authorization: AuthStr}})
//
//
//                     .then((response) => {
//                         // dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
//                         // dispatch({type: "POST_USER_START"});
//
//
//                         // console.log(response, "RESPONSEv");
//
//                         var subster = response.data.sub;
//                         console.log(response.data, 'response.data');
//                         let json = {
//
//                             "Name": response.data.nickname,
//                             "Description": response.data.name,
//                             "Id": subster,
//                             "getaccesstoken":  {Authorization: AuthStr},
//                         };
//                                             console.log(json, 'json');
//
//
//                         dispatch({type: "FETCH_USER_START"});
//                         axios.post(`${API_URL}/userloginscenario`, json,  {headers: {Authorization: AuthStr}})
//
//                             .then((response) => {
//
//                                 dispatch({type: "FETCH_USERS_SUCCESS", payload: json})
//
//                                 // dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data})
//
//                             });
//
//
//                         // dispatch({type: "FETCH_USERS_SUCCESS", payload: response.data});
//                     });
//
//             })
//     }
// }



export function fetchChapterAnalytics(Id) {

    // let json = JSON.stringify({"id_Auth":Id, "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0}]}", "exercice-list":"{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"});


    return (dispatch) => {
        dispatch({type: "POST_CHAPTER_START"});
        return axios.get(`http://sci-code.com/PresentationHack/demo/api.php/Chapter`)
        // return axios.get(`http://sci-code.com/PresentationHack/demo/api.php/Chapter?transform=${Id}/`)
            .then((response) => {
                // console.log(response);
                dispatch({type: "GET_CHAPTER_ANALYTICS", payload: response.data});

            })
    }
}


export function fetchAnswerAnalytics(Id) {

    // let json = JSON.stringify({"id_Auth":Id, "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0}]}", "exercice-list":"{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"});


    return (dispatch) => {
        dispatch({type: "POST_ANSWER_ANALYTICS"});
        return axios.get(`http://sci-code.com/PresentationHack/demo/api.php/Answer?transform=${Id}/`)
            .then((response) => {
                // console.log(response);
                dispatch({type: "GET_ANSWER_ANALYTICS", payload: response.data});

            })
    }
}







export function postUser(Id) {

    // let json = JSON.stringify({"id_Auth":Id, "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0}]}", "exercice-list":"{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"});

    let json = JSON.stringify({
        "id_Auth": Id,
        "book_list": "{\"book_list\":[{\"title\":\"\",\"book_completion\":0,\"id_book\":0}]}",
        "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0,\"id_book\":0}]}",
        "exercice-list": "{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"
    });


    return (dispatch) => {
        dispatch({type: "POST_USER_START"});
        return axios.post("http://sci-code.com/PresentationHack/demo/api.php/User", json)
            .then((response) => {
                // console.log(response);
                dispatch({type: "POST_USER_SUCCESS", payload: response.data});

                axios.get("http://sci-code.com/PresentationHack/demo/api.php/Chapter?transform=1/")
                    .then((response) => {
                        dispatch({type: "FETCH_USERSCOURSE_SUCCESS", payload: response.data});
                    });
            })
    }
}


export function pChapter(chapterId) {

    return {
        type: "PICKED_CHAPTER",
        payload: chapterId
    }
}


export function Activate() {
// alert('activate');
    return {
        type: "PICKED_ACTIVATE",
        payload: 1
    }
}


export function pointf(points) {

    // alert(points);
    return {
        type: "POINTS",
        payload: points
    }
}


export function NULL_ACTIVATE() {
// alert('null');
    return {
        type: "NULL_ACTIVATE",
        payload: 0
    }
}


export function CourseToStore(course) {
// alert('coursetostore');
// console.log(course, 'coursetostore');
    var arr = course['section_list'];

    var total=0;
    for(var i in arr) {
        total += course['section_list'][i]['chapter_completion'];
    }
   let average= total/arr.length
    return {
        type: "COURSE",
        payload: average
    }
}

export function UserToStore(user) {

    // alert(user);
    return {
        type: "USERTOSTORE",
        payload: user
    }
}



export function ChapterToStore(user) {

    // alert(user);
    return {
        type: "ChapterToStore",
        payload: user
    }
}




//
//
//
// export function send(course_id, section_id, user_id) {
//
//     console.log("THIS IS COURSE",course_id, section_id, user_id);
//
//     // let course = `{"course":${course_id},"section":${section_id},"user":${user_id}};`
//     // var params= new URLSearchParams();
//     // params.append('course', 1);
//     // params.append('section', 1);
//     // params.append('user', 1);
//     // console.log(params, 'params');
//     // console.log(course, 'this is what we send');
//
//     let authServerUrl = "http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php";
//     return (dispatch) => {
//     dispatch({type: "POST_COURSE_START"});
//     axios.post(authServerUrl,
//         querystring.stringify({
//             course: 1, //gave the values directly for testing
//             section: 1,
//             user: 1
//         }), {
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             }
//         }) .then((response) => {
//         console.log(response);
//         dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
//         console.log(response, 'RESPONSE NEW ');
//     });
//
// }
// }
//     //
//     // return (dispatch) => {
//     //     dispatch({type: "POST_COURSE_START"});
//     //     axios.post('/foo', qs.stringify({ 'bar': 123 }));
//     //     return axios.post("http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php", qs.stringify(course))
//     //     // return axios.post("http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php", params)
//     //         .then((response) => {
//     //             console.log(response);
//     //             dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
//     //         })
//     //
//     // }



export function send(course_id, section_id, user_id) {

    // console.log("THIS IS COURSE",course_id, section_id, user_id);

    let course = `{"course":${course_id},"section":${section_id},"user":${user_id}};`
var params= new URLSearchParams();
    params.append('course', 1);
    params.append('section', 1);
    params.append('user', 1);
    // console.log(params, 'params');
    // console.log(course, 'this is what we send');
    return (dispatch) => {
        dispatch({type: "POST_COURSE_START"});

        // return axios.post(`http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php`)
        return axios.post(`http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php?course=1&section=1&user=1`)
            // ?course="${course_id)/`
        // return axios.post("http://sci-code.com/PresentationHack/public-avec-Back-end/index-dynamic3.php", params)
            .then((response) => {
                // console.log(response);
                dispatch({type: "POST_COURSE_SUCCESS", payload: response.data});
            })

    }
}





