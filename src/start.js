import Introduction from './introduction';
import ProjectsMiniature from './projectsMiniature';
import Contact from './contact';
import Sidebar from './sidebar';

function Start(props) {
     return (
        <div>
            <Sidebar/>
            <div className='content start'>
                <Introduction/>
                <ProjectsMiniature/>
                <Contact/>
            </div>
        </div>
       
     );
}

export default Start;
