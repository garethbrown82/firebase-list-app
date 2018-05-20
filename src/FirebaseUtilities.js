import fire from './firebase';
import firebase from 'firebase';

class FirebaseConnection {
    static loginFirebaseUser = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then(function(result) {
            const user = result.user;
            console.log("Here is the returned user object: ", user);
        });
    };

    static logoutFirebaseUser = () => {
        fire.auth().signOut().then(function() {
            console.log("User has been signed out of Firebase");
        }).catch(function(error) {
            console.error("There was an error while trying to logout the user");
        });
    };

    static logFirebaseUserToConsole = () => {
        const user = fire.auth().currentUser;
        if (user) {
            console.log(user.displayName, user.email);
        } else {
            console.log("There are no logged in users.")
        }
    ;}

    static addItemToFirebaseList = (item) => {
        if (checkSignedInWithMessage() && item) {
            const currentUser = fire.auth().currentUser;
            fire.database().ref('items').push({
                name: currentUser.displayName,
                itemText: item
            }).then(function() {
                console.log(`An item has been added to the database for ${currentUser}: `, item)
            }).catch(function(error) {
                console.error("There was an error while trying to add an item.")
            });
        } else {
            console.log("There is no logged in user to add an item.")
        }
    }
};

const checkSignedInWithMessage = () => {
    // Return true if the user is signed in Firebase
    if (fire.auth().currentUser) {
        return true;
    } else {
        return false;
    }
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("onAuthStateChanged: ", user)
    } else {
        console.log("onAuthStateChanged user logged out")
    }
});

export default FirebaseConnection;