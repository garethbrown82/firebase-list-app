export const ADD_TO_LIST = "ADD_TO_LIST";
export const UPDATE_TEXT_BOX = "UPDATE_TEXT_BOX";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SHOW_USER = "SHOW_USER";
export const CLEAR_LIST = "CLEAR_LIST";
export const CHANGE_LIST_ITEM = "CHANGE_LIST_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

export const addToList = (item) => {
    return {
        type: ADD_TO_LIST,
        newItem: item
    }
}

export const updateTextBox = (textBoxText) => {
    return {
        type: UPDATE_TEXT_BOX,
        textBoxText
    }
}

export const clearList = () => {
    return {
        type: CLEAR_LIST
    }
}

export const changeListItem = (value) => {
    return {
        type: CHANGE_LIST_ITEM,
        value: value
    }
}

export const login = (userDisplayName) => {
    return {
        type: LOGIN,
        userDisplayName: userDisplayName
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const deleteItem = (itemKey) => {
    return {
        type: DELETE_ITEM,
        itemKey
    }
}
