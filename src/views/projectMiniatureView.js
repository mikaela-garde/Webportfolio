import '../css/projects.css';
import { Link } from "react-router-dom";

const ProjectMiniatureView= ({title, desc, preview, id, index}) =>
    <div className="project">
        <div className='projectImage' style={{order:calcOrder(index)}}>
            <img src={preview}/>
        </div>
        <div className='projectDescription'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p><Link to={'/projects/'+id}>Read more {'>'}{'>'}</Link></p>
        </div>
    </div>;

export {ProjectMiniatureView};

function calcOrder(index) {
    return index%2;
}