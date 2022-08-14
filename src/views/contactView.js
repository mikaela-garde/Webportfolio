import '../css/contact.css';

const ContactView= () =>
    <div className='contact' id="contact">
        <div className='heading'>
            <h2><span>Get in contact with me</span></h2>
            <div className='heading-backgound'/>
        </div>
        <div className='links'>
            <div className='contactNames'>
                <ul>
                    <li key="email">Email</li>
                    <li key="github">Github</li>
                    <li key="linkedin">LinkedIn</li>
                </ul> 
            </div>
            <div className='contactLinks'>
                <ul>
                    <li key="email2"><a href="mailto:Mikaela.garde@gmail.com">Mikaela.garde@gmail.com</a></li>
                    <li key="github2"><a href="https://github.com/mikaela-garde">Mikaela-garde</a></li>
                    <li key="linkedin2"><a href="https://www.linkedin.com/in/mikaela-g%C3%A4rde-71b372174/">Mikaela Gärde</a></li>
                </ul> 
            </div>
        </div>  
    </div>;

export {ContactView};