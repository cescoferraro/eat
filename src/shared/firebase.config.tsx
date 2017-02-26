let config = {
    apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
    authDomain: "weareeat-9fd66.firebaseapp.com",
    databaseURL: "https://weareeat-9fd66.firebaseio.com",
    storageBucket: "weareeat-9fd66.appspot.com",
    messagingSenderId: "677035655043"
};

export let FirebaseInit = "var config = " +
    require('serialize-javascript')(config) + ";" +
    "firebase.initializeApp(config)";
