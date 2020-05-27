import { firebase, googleAuthProvider } from '../firebase/firebase';

const login = (uid) => ({
    type: 'LOGIN',
    uid,
});

const logout = () => ({
    type: 'LOGOUT',
});

const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

const startLogout = () => () => firebase.auth().signOut();

export {
    startLogin,
    startLogout,
    login,
    logout,
};
