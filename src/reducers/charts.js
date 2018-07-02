export default function chartReducer(state = {

                                          Show_Section:false,
                                          Show_Chapter:false,
                                          Show_Book:true,
                                          Show_Exercise:false,
                                          componentsShow:true,
                                          Show_istudent:false,
                                          row_card:true,
                                          icard:[],
                                          //mine

                                      }, action) {

    switch (action.type) {


        case "SHOW_SECTION":

            state = {...state, Show_Section : action.payload};
            break;



            case "fSHOW_SECTION":

                state = {...state, Show_Section : action.payload};
                break;



                case "SHOW_BOOK":

                    state = {...state, Show_Book : action.payload};
                    break;

                    case "fSHOW_BOOK":

                        state = {...state, Show_Book : action.payload};
                        break;


                        case "Show_Exercise":

                        state = {...state, Show_Exercise: action.payload};
                            break;

                            case "F_EXERSICE":

                                state = {...state, Show_Exercise : action.payload};
                                break;


                                case "COMPONENT_SHOW":

                                    state = {...state, componentsShow : action.payload};
                                    break;

                                    case "fCOMPONENT_SHOW":

                                        state = {...state, componentsShow : action.payload};
                                        break;

                                        case "Active_student":

                                            state = {...state, Show_istudent : action.payload};
                                            break;

                                            case "fActive_student":

                                                state = {...state, Show_istudent : action.payload};
                                                break;

                                                case "frow_card":

                                                    state = {...state, row_card : action.payload};
                                                    break;

                                                    case "row_card":

                                                        state = {...state, row_card : action.payload};
                                                        break;

                                                    case "icard":

                                                        state = {...state, icard : action.payload};
                                                        break;

//Mine  frow_card
}

    return state;
}
