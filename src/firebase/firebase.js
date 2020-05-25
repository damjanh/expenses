import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAMR2gZUFK9JK-MLSJIu8k9EozKaIp66uw',
    authDomain: 'expense-react-bb6c3.firebaseapp.com',
    databaseURL: 'https://expense-react-bb6c3.firebaseio.com',
    projectId: 'expense-react-bb6c3',
    storageBucket: 'expense-react-bb6c3.appspot.com',
    messagingSenderId: '952516702273',
    appId: '1:952516702273:web:0a8dd119d255716e8e96c0',
    measurementId: 'G-ME7JPDH2Q5',
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Damjan',
});
