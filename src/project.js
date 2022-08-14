import React from "react";
import {ProjectView} from "./views/projectView";
import {getProjectFromId} from "./data";
import { useParams } from "react-router-dom";




function Project(props) {

    let projectId = useParams().projectId;
    let project = getProjectFromId(projectId);

    return React.createElement(ProjectView, {
        title: project.title,
        text: project.text,
        images: project.images,
        link: project.link

    });
}

export default Project;
