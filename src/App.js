import { Outlet } from 'react-router-dom';
import './css/App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseConfig} from "./firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Outlet/>
      <div className='footer'>
          <p>Website developed and designed by Mikaela Gärde</p>
      </div>
    </div>
  );
}

export default App;
