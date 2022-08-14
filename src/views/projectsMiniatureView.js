import '../css/projects.css';
import ProjectMiniature from '../projectMiniature';

const ProjectsMiniatureView= ({projects}) =>
    <div className="projects" id="projects">
        <div className='heading'>
            <h2><span>Projects</span></h2>
            <div className='heading-backgound'/>
        </div>
        {projects && projects.length>0 && projects.map((project, index)=>
            <ProjectMiniature key={project.title} title={project.title} desc={project.description} preview={project.preview} id={project.id} index={index}/>
        )}

    </div>;

export {ProjectsMiniatureView};