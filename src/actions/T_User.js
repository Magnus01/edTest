import axios from 'axios';


//NEED TO CHANGE API TO NEW CONTENT API
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

//DO WE NEED TO CHANGE API TO NEW CONTENT API?
//MARKED
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


//MARKED
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









export function pChapter(chapterId) {

    return {
        type: "PICKED_CHAPTER",
        payload: chapterId
    }
}



export function pointf(points) {

    // alert(points);
    return {
        type: "POINTS",
        payload: points
    }
}



