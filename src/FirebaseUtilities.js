import fire from './firebase';
import firebase from 'firebase';
import { login, logout, addToList, clearList, changeListItem } from './Actions';
import { store } from './index';

class FirebaseConnection {
    static loginFirebaseUser = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider).then(function(result) {
            const user = result.user;
            store.dispatch(login(user.displayName))
        });
    };

    static logoutFirebaseUser = () => {
        fire.auth().signOut().then(function() {
            store.dispatch(logout());
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
                itemText: item,
                messageUid: currentUser.uid
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

const loadMessagesToList = () => {
    let itemsDB = fire.database().ref('items');
    itemsDB.off();

    const loadItemFromFirebase = (data) => {
        const value = {
            key: data.key,
            item: data.val()
        }
        console.log("Item has been added to list: ", value)
        store.dispatch(addToList(value))
    }

    const changeItemFromFirebase = (data) => {
        const value = {
            key: data.key,
            item: data.val()
        }
        console.log("Item has been changed: ", value)
        store.dispatch(changeListItem(value))
    }
    
    itemsDB.limitToLast(10)
        .orderByChild("messageUid")
        .equalTo(fire.auth().currentUser.uid)
        .on('child_added', loadItemFromFirebase);
    itemsDB.limitToLast(10)
        .orderByChild("messageUid")
        .equalTo(fire.auth().currentUser.uid)
        .on('child_changed', changeItemFromFirebase);
}

firebase.auth().onAuthStateChanged(function(user) {
    store.dispatch(clearList());
    if (user) {
        loadMessagesToList();
        console.log("onAuthStateChanged: ", user);
    } else {
        console.log("onAuthStateChanged user logged out");
    }
});

export default FirebaseConnection;