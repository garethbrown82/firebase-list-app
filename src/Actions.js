export const ADD_TO_LIST = "ADD_TO_LIST";
export const UPDATE_TEXT_BOX = "UPDATE_TEXT_BOX";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SHOW_USER = "SHOW_USER";

export const addToList = (event) => {
    return {
        type: ADD_TO_LIST,
        event: event
    }
}

export const updateTextBox = (textBoxText) => {
    return {
        type: UPDATE_TEXT_BOX,
        textBoxText
    }
}

export const login = () => {
    return {
        type: LOGIN
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}
