var firebaseConfig = {
    apiKey: "AIzaSyAu80N-gkBwHbodhXe88rTtlGZ1Nw1Yd8A",
    authDomain: "chat-room-99019.firebaseapp.com",
    databaseURL: "https://chat-room-99019.firebaseio.com",
    projectId: "chat-room-99019",
    storageBucket: "chat-room-99019.appspot.com",
    messagingSenderId: "888512591662",
    appId: "1:888512591662:web:658fc729ca654ca90e2cbf"
};
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()