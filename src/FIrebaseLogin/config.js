
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider ,TwitterAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBy11KbHOha5JpcU8OsvzMUoNQDctylELc",
  authDomain: "fir-sussin.firebaseapp.com",
  projectId: "fir-sussin",
  storageBucket: "fir-sussin.appspot.com",
  messagingSenderId: "583533622088",
  appId: "1:583533622088:web:b73eaf12a9aeed9933797d",
  measurementId: "G-T1S78ZMRE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();
const twitterprovider=new TwitterAuthProvider();
export {auth,provider,twitterprovider}

