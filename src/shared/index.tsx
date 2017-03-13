export const tag = document.getElementById("container");

export const isServer = () => !(typeof window !== "undefined" && window.document);

export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBxg-ZN4_K2t1pUXWeXL9hwzl42LO94McY",
    authDomain: "weareeat-9fd66.firebaseapp.com",
    databaseURL: "https://weareeat-9fd66.firebaseio.com",
    storageBucket: "weareeat-9fd66.appspot.com",
    messagingSenderId: "677035655043"
};

export const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};
