import axios from 'axios';
import { getTreeFromFlatData } from 'react-sortable-tree';
import jsonPatch from 'fast-json-patch';


export default function courseReducer(state = {


                                          //mine
                                          sectionShow:false,
                                          chapterShow:false,
                                          componentsShow:true,
                                          bookId_assign: 0,
                                          /////////////
                                          chapters: {
                                              byId: {},
                                              allIds: [],
                                              selected: null,
                                          },
                                          courses: {
                                              byId: {},
                                              allIds: [],
                                              selected: null,
                                          },
                                          /////UI Component ///////
                                          E_sbar:false,
                                          assignments_sbar:false,
                                          analytic_sbar:true,
                                          //
                                          Active:'analytics',
                                          //SearchBar Value
                                          SearchBar:'',
                                          chapteranalytics: [],
                                          answeranalytics: [],



                                          singlecourse: [],
                                          makeclass1: false,
                                          makeclass2: false,
                                          myTreeData: [],
                                          makeclass3: false,
                                          assignment: false,
                                          analyzebook: false,
                                          inassignment: false,
                                          startassignment: false,
                                          instudents: false,
                                          incurric: false,
                                          choosechapter: false,
                                          choosetime: false,
                                          toc: false,
                                          bookpreview: false,
                                          booktour: false,
                                          bookstore: false,
                                          sweetalert: false,
                                          bookmovement: '',
                                          dashboard: true,
                                          moveups: 'inward',
                                      }, action) {

    switch (action.type) {


        case "SELECT_BOOK":

            state = {...state, books : action.payload};
            break;
//Mine
//Search Bar//
case "SEARCH_BAR":

    state = {...state, SearchBar: action.payload};
    break;


            case "SECTION_SHOW":

                state = {...state, sectionShow: action.payload};
                break;

            case "GET_SINGLE_COURSE":

                state = {...state, singlecourse: action.payload};
                break;



            case "GET_CHAPTER_ANALYTICS":

                state = {...state, chapteranalytics: action.payload};
                break;



            case "POST_BOOKID_ASSIGNMENT_SUCCESS":

                state = {...state, bookId_assign: action.payload};
                break;



            case "GET_ANSWER_ANALYTICS":

                state = {...state, answeranalytics: action.payload};
                break;



                case "CHAPTER_SHOW":

                    state = {...state, chapterShow: action.payload};
                    break;


                    case "COMPONENT_SHOW":

                        state = {...state,   componentsShow: action.payload};
                        break;
                        // Active Components
                        case "ACTIVE_C":

                            state = {...state,   Active: action.payload};
                            break;
//////////////////////UI CLasses////////////////

case "E_SBAR":

    state = {...state,   E_sbar: action.payload};
    break;


    case "feattendance_sbar":

        state = {...state,  E_sbar: action.payload};
        break;


        case "assignments_sbar":

            state = {...state,   assignments_sbar: action.payload};
            break;


            case "fassignments_sbar":

                state = {...state,   assignments_sbar: action.payload};
                break;

                case "analytic_sbar":

                    state = {...state,   analytic_sbar: action.payload};
                    break;

                    case "fanalytic_sbar":

                        state = {...state,   analytic_sbar: action.payload};
                        break;

////////////////////
        case "SELECT_CLASS":

            state = {...state, class : action.payload};
            break;

        case "SELECT_INWARD":

            state = {...state, moveups : action.payload};
            break;


        case "F_SELECT_INWARD":

            state = {...state, moveups : action.payload};
            break;

        case "SELECT_INASSIGNMENTS":

            state = {...state, inassignment : action.payload};
            break;


        case "F_SELECT_INASSIGNMENTS":

            state = {...state, inassignment : action.payload};
            break;


        case "SELECT_STARTASSIGNMENT":

            state = {...state, startassignment : action.payload};
            break;









        case "GET_TREE_DATA":

            state = {...state, myTreeData : action.payload};
            break;


        case "FETCH_CHAPTERS_START":
            state = {...state, fetching: true};
            break;

        case "FETCH_CHAPTERS_ERROR":
            state =  {...state, fetching: false, error: action.payload};
            break;

        case "FETCH_CHAPTERS_SUCCESS":
            state = {
                ...state,
                fetching: false,
                chapters: action.payload.map(c => ({
                    name: c.title,
                    parent: c.parent,
                    id: c.id,
                    treeIndex: c.treeIndex
                }))
            };
            break;





        case "RENDER_TREE":
            state = {
                ...state,
                treeData: action.payload
            };
            break;














        case "F_SELECT_TOC":

            state = {...state, toc : action.payload};
            break;


        case "SELECT_TOC":

            state = {...state, toc : action.payload};
            break;



        case "F_SELECT_SWEETALERT":

            state = {...state, sweetalert : action.payload};
            break;


        case "SELECT_SWEETALERT":

            state = {...state, sweetalert : action.payload};
            break;


        case "F_SELECT_STARTASSIGNMENT":

            state = {...state, startassignment : action.payload};
            break;

        case "SELECT_CHOOSETIME":

            state = {...state, choosetime : action.payload};
            break;


        case "F_SELECT_CHOOSETIME":

            state = {...state, choosetime : action.payload};
            break;


        case "SELECT_INCURRIC":

            state = {...state, incurric : action.payload};
            break;


        case "F_SELECT_INCURRIC":

            state = {...state, incurric : action.payload};
            break;

        case "RECEIVED_ALL_COURSES":
            state = {...state, fetching: false, courses: action.payload};
            break;

        case "SELECT_BOOK_MOVEMENT":

            state = {...state, bookmovement : action.payload};
            break;


        case "F_SELECT_BOOK_MOVEMENT":

            state = {...state, bookmovement : action.payload};
            break;

        case "SELECT_INSTUDENTS":

            state = {...state, instudents : action.payload};
            break;


        case "F_SELECT_INSTUDENTS":
            state = {...state, instudents : action.payload};
            break;


        case "SELECT_ASSIGNMENT":
            state = {...state, assignment : action.payload};
            break;

        case "F_SELECT_ASSIGNMENT":
            state = {...state, assignment : action.payload};
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



        case "SELECT_DASHBOARD":

            state = {...state, dashboard : action.payload};
            break;




        case "F_SELECT_DASHBOARD":

            state = {...state, dashboard : action.payload};
            break;




        case "SELECT_BOOK_TOUR":

            state = {...state, booktour : action.payload};
            break;




        case "F_SELECT_BOOK_TOUR":

            state = {...state, booktour : action.payload};
            break;






        case "SELECT_BOOK_STORE":

            state = {...state, bookstore : action.payload};
            break;




        case "F_SELECT_BOOK_STORE":

            state = {...state, bookstore : action.payload};
            break;




        case "SELECT_ANALYZEBOOK":

            state = {...state, analyzebook : action.payload};
            break;




        case "F_SELECT_ANALYZEBOOKS":

            state = {...state, analyzebook : action.payload};
            break;





        case "SELECT_CHOOSECHAPTER":

            state = {...state, choosechapter : action.payload};
            break;




        case "F_SELECT_CHOOSECHAPTER":

            state = {...state, choosechapter : action.payload};
            break;







        case "REMOVE_CLASS_1":

            state = {...state, class : action.payload};
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
