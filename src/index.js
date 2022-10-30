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

//reportWebVitals();
