import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKLbxnBRgBx3IoVLM4M6YCarKQCDeqLL0",
  authDomain: "grace-shorts.firebaseapp.com",
  projectId: "grace-shorts",
  storageBucket: "grace-shorts.appspot.com",
  messagingSenderId: "781581593988",
  appId: "1:781581593988:web:55d532bb18d3a5a4e2c1d1",
  measurementId: "G-Z21FXNY6JS"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grace-walker';

  constructor() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
