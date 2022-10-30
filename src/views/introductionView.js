import '../css/introduction.css';

const IntroductionView= () =>
    <div className='introduction' id="introduction">
        <div className='text'>
            <div className='title'>
                <h1><span>Mikaela</span><br/><span>Gärde</span></h1>
            </div>
            <p>A Media Technology student with an interest in computer graphics, programming and interaction design.</p>
        </div>
        
        <div className='photo'>
            <img src="./Images/profileImg.jpg"/>
        </div>
    </div>;

export {IntroductionView};