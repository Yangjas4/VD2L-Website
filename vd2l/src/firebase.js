// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDNBJp7Uj8ajCvrlMZcpkSQyUGu8Ff12zc",

  authDomain: "vd2l-4ff3d.firebaseapp.com",

  projectId: "vd2l-4ff3d",

  storageBucket: "vd2l-4ff3d.appspot.com",

  messagingSenderId: "517964292532",

  appId: "1:517964292532:web:3b5afcbbd36da0cda892e1",

  measurementId: "G-YQQ876EN9Q"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);