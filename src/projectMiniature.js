import React,{useState,useEffect} from "react";
import {ProjectMiniatureView} from "./views/projectMiniatureView";




function ProjectMiniature({title, desc, preview, id, index}) {
    
    return React.createElement(ProjectMiniatureView, {
        title: title,
        desc: desc,
        preview: preview,
        id: id,
        index: index
    });
}

export default ProjectMiniature;