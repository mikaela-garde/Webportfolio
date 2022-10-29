import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Start from "./start";
import Projects from "./projects";
import Sidebar from "./sidebar";
import Project from "./project";
import ScrollToTop from "./scrollToTop";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import {firebaseConfig} from "./firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<Start/>} />
          <Route path="/projects" element={<Projects/>}>
              <Route path=":projectId" element={<Project/>}/>
          </Route>
        </Route>
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
