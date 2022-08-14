import React,{useState,useEffect} from "react";
import {ProjectsMiniatureView} from "./views/projectsMiniatureView";
import {getProjects} from "./data";



function ProjectsMinaiture(props) {

      let projects = getProjects();
    
    return React.createElement(ProjectsMiniatureView, {
        projects: projects
    });
}

export default ProjectsMinaiture;

