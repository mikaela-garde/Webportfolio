import '../css/sidebar.css';

const SidebarView= () =>
    <div className="sidebar">
        <ul>
            <div className="sidebarLink"><li><span><a href="#introduction">Introduction</a></span></li></div>
            <div className="sidebarLink"><li><a href="#projects">Projects</a></li></div>
            <div className="sidebarLink"><li><a href="#contact">Contact</a></li></div>
        </ul>
    </div>;

export {SidebarView};