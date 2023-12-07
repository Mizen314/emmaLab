import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from "firebase/app";
import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFmXSR0htjy6cU4Buc1vGHNCmtWTBHmk4",
  authDomain: "non-app-e5dce.firebaseapp.com",
  projectId: "non-app-e5dce",
  storageBucket: "non-app-e5dce.appspot.com",
  messagingSenderId: "758062943912",
  appId: "1:758062943912:web:277619c35c80fa8a07fc9d",
  measurementId: "G-MMLWKNF45L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
