import React from "react";
import {SidebarView} from "./views/sidebarView";
import { Link } from "react-router-dom";


function SidebarArrow(props) {

    return <div className="sidebar arrow">
        <Link to={'/'}><img src="../Images/arrow.png"/></Link>
    </div>;
}

export default SidebarArrow;