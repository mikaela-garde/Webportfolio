let projects = [
    {
        "title": "Uniquiz: A multiplayer quiz built with React",
        "description": "A project built in a course in interaction programming where players in real time could compete against each other in their music knowledge.",
        "preview": "Images/Uniquiz/4.png",
        "id": "uniquiz",
        "text": ["Uniquiz was a group project in the course DH2642 Interaction Programming and the Dynamic Web at KTH Royal Institute of Technology. The main task was to fetch data from a web API, implement a Model-View-Controller architecture pattern and to create log in functionality.", "We chose to develop an online multiplayer music quiz where users in real time could compete against their friends in their music knowledge.", "The quiz accessed the user's own Spotify playlists in order to find songs that the users had in common to create a more enjoyable game. This was done using Spotify's web API. Though Spotify's API we also fetched the user's Spotify profile pictures that where used in the quiz. Firebase was used to handle user authorisation and storing data. The web app was built using React and was one of my first every projects with React.", "The project was awarded with a UX-prize which was given the the project that was well designed from a UX perspective."],
        "images": ["Images/Uniquiz/1.png", "Images/Uniquiz/2.png", "Images/Uniquiz/3.png", "Images/Uniquiz/4.png", "Images/Uniquiz/5.png", "Images/Uniquiz/6.png"],
        "link": "https://uniquiz-e9d1f.web.app"
    },
    {
        "title": "AR gallery Wall Planner",
        "description": "AR application created using technologies such as Unity, AR Fundation and AR Core that helps the user to plan their room decoration.",
        "preview": "./Images/GalleryWallPlanner/3.jpg",
        "id": "galleryWallPlanner",
        "text": ["The goal of this AR gallery Wall Planner app was to work with multiple modalities. ","The application was built in the game engine Unity together with the AR Fundation plug-in to be able to work with augmented reality platforms in Unity. Google’s platform ARCore was used for motion tracking, environmental understanding and light estimation. The language used to build the app was C#."],
        "images": ["Images/GalleryWallPlanner/1.jpg", "Images/GalleryWallPlanner/2.jpg", "Images/GalleryWallPlanner/3.jpg"]

    }, {
        "title": "Bedroom created with Three.js",
        "description": "Project to learn Three.js that includes animations and user interactions.",
        "preview": "./Images/Bedroom/1.png",
        "id": "Bedroom",
        "text": ["My first every project using the JavaScript 3D library Three.js. The task for the project was to include user interaction and animation." ,"I created a miniature bedroom that the user could interact with by rotation it and zooming in and out."],
        "images": ["./Images/Bedroom/1.png"],
        "link": "https://mikaela-garde.github.io"

    }, {
        "title": "HoloAvatar: Project to learn the design process",
        "description": "A project in a course in interaction design where the focus was to learn and implement the different steps of the designing process.",
        "preview": "./Images/HoloAvatar/1.png",
        "id": "holoavatar",
        "text": ["HoloAvatar is a group project in the course DM2601 Media Technology and Interaction Design. The main focus of the project was to learn and implement methods of the different stages of the design process. We did user research through interviews and roleplaying, did an Affinity Diagram and created personas for problem definition, used the Six Thinking Hats for brainstorming and methods such as wizard of Oz for user evaluation.", "The theme of the project was Designing for a World of Introverts where we chose to focus of students living in shared accommodations. Through the uer research we found out that the shared kitchen was a place caused discomfort and missunderstandings. We therefore chose to develop HoloAvatar which is supposed to ease communication within the shared kintchen."],
        "images": ["./Images/HoloAvatar/Workbook.png"]

    }, {
        "title": "Human-computer interaction project",
        "description": "The goal of this project was to follow the Double Diamond design process to create a design proposal for a product targeted to a specific user group.",
        "preview": "./Images/DumpsterDiverApp/1.png",
        "id": "hciPorject",
        "text": ["The goal of this project was to follow the Double Diamond design process to create a design proposal for a product targeted to a specific user group.", "We were assigned the user group Dumpter Divers, people who search containers of supermarkets for food and products. We decided to design an app to facilitate the process of dumpter diving by letting users share findings with each other.", "In this project we also learnt how to use Figma to create prototypes with interactions."],
        "images": ["./Images/DumpsterDiverApp/1.png", "./Images/DumpsterDiverApp/2.png"]

    }
];

export function getProjects() {
    return projects;
}

export function getProjectFromId(id) {
    return projects.filter(project => {
        return project.id === id
    })[0]
}