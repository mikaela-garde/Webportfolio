import { Outlet } from "react-router-dom";
import SidebarArrow from "./sidebarArrow";

function Projects(props) {
     return (
        <div>
            <SidebarArrow/>
            <div className="content contentProject">
                <Outlet/>
            </div>
        </div>
        
     );
}

export default Projects;
