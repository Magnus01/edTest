



export function show_Section() {

  return (dispatch) => {
    dispatch({
      type: "SHOW_SECTION",
      payload: true
    })
  }
}


export function fshow_Section() {

  return (dispatch) => {
    dispatch({
      type: "fSHOW_SECTION",
      payload: false
    })
  }
}




export function Show_Book() {

  return (dispatch) => {
    dispatch({
      type: "SHOW_BOOK",
      payload: true
    })
  }
}

export function fShow_Book() {

  return (dispatch) => {
    dispatch({
      type: "fSHOW_BOOK",
      payload: false
    })
  }
}


export function Show_Exercise() {

  return (dispatch) => {
    dispatch({
      type: "Show_Exercise",
      payload: true
    })
  }
}


export function fShow_Exercise() {

  return (dispatch) => {
    dispatch({
      type: "F_EXERSICE",
      payload: false
    })
  }
}


export function Show_Chapter() {

  return (dispatch) => {
    dispatch({
      type: "SHOW_CHAPTER",
      payload: true
    })
  }
}

export function fShow_Chapter() {

  return (dispatch) => {
    dispatch({
      type: "fSHOW_Chapter",
      payload: false
    })
  }
}

export function componentsShow() {

  return (dispatch) => {
    dispatch({
      type: "COMPONENT_SHOW",
      payload: true
    })
  }
}

export function fcomponentsShow() {

    return (dispatch) => {
        dispatch({
            type: "fCOMPONENT_SHOW",
            payload: false
        })
    }
}



export function istudent_show() {

    return (dispatch) => {
        dispatch({
            type: "Active_student",
            payload: true
        })
    }
}



export function fistudent_show() {

    return (dispatch) => {
        dispatch({
            type: "fActive_student",
            payload: false
        })
    }
}


export function frowCard() {

    return (dispatch) => {
        dispatch({
            type: "frow_card",
            payload: false
        })
    }
}


export function rowCard() {

    return (dispatch) => {
        dispatch({
            type: "row_card",
            payload: true
        })
    }
}

export function icard(id) {

    return (dispatch) => {
        dispatch({
            type: "icard",
            payload: id
        })
    }
}
