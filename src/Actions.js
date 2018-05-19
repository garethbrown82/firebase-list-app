export const ADD_TO_LIST = "ADD_TO_LIST";
export const UPDATE_TEXT_BOX = "UPDATE_TEXT_BOX";

export const addToList = () => {
    return {
        type: ADD_TO_LIST
    }
}

export const updateTextBox = (textBoxText) => {
    return {
        type: UPDATE_TEXT_BOX,
        textBoxText
    }
}