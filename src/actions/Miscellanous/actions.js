import axios from "axios/index";

export function postUser(Id) {

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
