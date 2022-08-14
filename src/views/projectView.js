import '../css/projectPage.css';

const ProjectView= ({title, text, images, link}) =>
    <div className="projectPage">
        <div className='projectText'>
            <h3>{title}</h3>
            {text && text.length>0 && text.map( text =>
                <p>{text}<br/><br/></p>
            )}
            <p>The project can be found on <a href={link && link}>{link && link}</a></p>
        </div>
        <div className='projectImages'>
            {images && images.length>0 && images.map( url =>
                <img src={'../'+url}/>
            )}
        </div>
    </div>;

export {ProjectView};
