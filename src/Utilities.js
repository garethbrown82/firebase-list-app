import FirebaseConnection from './FirebaseUtilities';

export const addNewListItem = (state, item) => {
    return [...state.list].concat([item])
}

export const loginUser = (dispatch) => {
    FirebaseConnection.loginFirebaseUser();
    return { loginMessage: "User logged in" }
}

export const logoutUser = () => {
    FirebaseConnection.logoutFirebaseUser();
    return { loginMessage: "Please login" }
}

export const logUserToConsole = () => {
    FirebaseConnection.logFirebaseUserToConsole();
}