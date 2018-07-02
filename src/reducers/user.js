export default function userReducer(state = {

                                          user: [],
                                          userid: [],
                                          usercourse: [],
                                          Answer: [],
                                          error: null,
                                          selectedUser: 1,
                                          pickedChapter: 0,
                                          activator: 0,
                                          points: 1,
                                          course: 0,
                                          show: false,
                                          books: false,
                                          class: false,
                                          usertostore: 0,
                                          ChapterToStore: 0,
                                          makeclass1: false,
                                          makeclass2: false,
                                          makeclass3: false,
                                          assignments: false,
                                          dashboard: false,
                                          register: true,
                                          register2: false,
                                          User: false,
                                          moveup: '',
                                          bookcss: '',
                                          classroomcss: '',
                                          classdashboard: false,
                                          bookdashboard: false,
                                          title: '',
                                          description: '',
                                          next: '',
                                      }, action) {

    switch (action.type) {

    // THESE FIRST FEW FUNCTIONS ARE USED THROUGHOUT THE PROJECT, MANY OF THE VARIABLES YOU SEE ABOVE ARE EXTRA AND NEED TO BE REMOVED


        case "SELECT_DASHBOARD":

            state = {...state, dashboard : action.payload};
            break;


        case "F_SELECT_DASHBOARD":

            state = {...state, dashboard : action.payload};
            break;




        case "SELECT_BOOK_DASHBOARD":

            state = {...state, bookdashboard : action.payload};
            break;

        case "F_SELECT_BOOK_DASHBOARD":

            state = {...state, bookdashboard : action.payload};
            break;






        case "SELECT_CLASS_DASHBOARD":

            state = {...state, classdashboard : action.payload};
            break;


        case "F_SELECT_CLASS_DASHBOARD":

            state = {...state, classdashboard : action.payload};
            break;











        case "SELECT_REGISTER":

            state = {...state, register : action.payload};
            break;




        case "F_SELECT_REGISTER":

            state = {...state, register : action.payload};
            break;







        case "SELECT_REGISTER2":

            state = {...state, register2 : action.payload};
            break;




        case "F_SELECT_REGISTER2":

            state = {...state, register2 : action.payload};
            break;






            // BELOW ARE IMPLEMENTATIONS OF OTHER REDUCERS THAT ARE LINKED TO THE ACTIONS FUNCTIONS





























        case "SELECT_NULL":
            // console.log("SELECT NULL");
            state = {...state, pickedChapter : action.payload};
            break;

        case "SELECT_SHOW":

            state = {...state, show : action.payload};
            break;

        case "SELECT_MOVEUP":

            state = {...state, moveup : action.payload};
            break;

        case "F_SELECT_MOVEUP":

            state = {...state, moveup : 'testing'};
            break;



        // SELECT HOVER CSS FUNCTIONS
        case "SELECT_BOOK_CSS":

            state = {...state, bookcss : action.payload};
            break;

        case "F_SELECT_BOOK_CSS":

            state = {...state, bookcss :  action.payload};
            break;

        case "SELECT_CLASS_CSS":

            state = {...state, classroomcss : action.payload};
            break;

        case "F_SELECT_CLASS_CSS":

            state = {...state, classroomcss :  action.payload};
            break;

        // END HOVER CSS FUNCTIONS





        case "SELECT_NEXT":

            state = {...state, next : action.payload};
            break;

        case "F_SELECT_NEXT":

            state = {...state, next : action.payload};
            break;

        case "SELECT_HIDE":

            state = {...state, show : action.payload};
            break;

        case "SELECT_BOOK":

            state = {...state, books : action.payload};
            break;

        case "SELECT_UPDATE_TITLE":
            // state.title = state.title.concat(action.payload);
            state = {...state, title : action.payload};
            break;

        case "SELECT_UPDATE_DESCRIPTION":
            // state.title = state.title.concat(action.payload);
            state = {...state, description : action.payload};
            break;

        // case "SELECT_UPDATE_TITLE":
        //     state = {...state,
        //         courses: state.courses.map(c => {
        //             if (c.id === state.selectedCourse) {
        //                 c.title = action.payload;
        //             }
        //             return c;
        //         })
        //     };
        //     break;
        //

        case "SELECT_CLASS":

            state = {...state, class : action.payload};
            break;

        case "SELECT_USER":

            state = {...state, User : action.payload};
            break;

        case "F_SELECT_USER":

            state = {...state, User : action.payload};
            break;


        case "SELECT_1_CLASS_PROCESS":

            state = {...state, makeclass1 : action.payload};
            break;

        case "F_SELECT_1_CLASS_PROCESS":

            state = {...state, makeclass1 : action.payload};
            break;


        case "SELECT_2_CLASS_PROCESS":

            state = {...state, makeclass2: action.payload};
            break;

        case "F_SELECT_2_CLASS_PROCESS":

            state = {...state, makeclass2 : action.payload};
            break;


        case "SELECT_3_CLASS_PROCESS":

            state = {...state, makeclass3: action.payload};
            break;

        case "F_SELECT_3_CLASS_PROCESS":

            state = {...state, makeclass3 : action.payload};
            break;






        case "REMOVE_CLASS_1":

            state = {...state, class : action.payload};
            break;





        case "POST_UNI_SUCCESS":
            state = {
                ...state
            };

            state.title = state.title.concat(action.payload);
            break;






        case "POST_UNI_SUCCESS2":
            state = {
                ...state
            };
            console.log(action.payload, 'action unisuccess2');

            state.title = state.title.concat(action.payload.title);
            state.description = state.description.concat(action.payload.description);
            break;













        case "FETCH_USERS_ERROR":
            state =  {...state, fetching: false, error: action.payload};
            break;


        case "FETCH_USERS_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            };
            break;


        case "FETCH_USERSCOURSE_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
                usercourse: action.payload
            };
            break;


        case "PICKED_CHAPTER":
            return {
                ...state,
                pickedChapter: action.payload
            };
            break;


        case "PICKED_ACTIVATE":
            return {
                ...state,
                activator: action.payload
            };
            break;


        case "NULL_ACTIVATE":
            return {
                ...state,
                activator: 0
            };
            break;


        case "POST_USERS_START":
            state = {...state, fetching: true};
            break;




        case "POINTS":
            return {
                ...state,
                points : action.payload
            };
            break;







        case "USERTOSTORE":
            // alert('usertostore');
            return {
                ...state,
                usertostore : action.payload
            };
            break;





        case "ChapterToStore":
            // alert('usertostore');
            return {
                ...state,
                ChapterToStore : action.payload
            };
            break;






        case "COURSE":
            // alert(action.payload);
            return {
                ...state,
                course : action.payload
            };
            break;







        case "POST_USERS_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            };
            break;


        case "POST_COURSE_START":
            state = {...state, fetching: true};
            break;





        case "POST_COURSE_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
                userid: action.payload
            };
            break;




        case "FETCH_ANSWER_START":
            state = {...state, fetching: true};
            break;



        case "FETCH_ANSWER_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
                Answer: action.payload
            };
            break;


        case "FETCH_USERS_ID_SUCCESS":

            const index = state.user.findIndex(item => item.id === action.payload.id);
            break;


        case "FETCH_CONTENT_SUCCESS":
            state = {
                ...state,
                fetching: false,
                fetched: true,
                content: action.payload
            };
            break;

        case "FETCH_USERS_ID_ERROR":
            state = {
                ...state,
                fetching: false,
                fetched: true,
            };
            break;

    }
    return state;
}

