// Import your project images here
// Replace these with your actual project images
import project1_img from './project_1.jpg'
import project2_img from './project_2.jpg'
import project3_img from './project_3.jpg'
import project4_img from './project_4.jpg'
import project5_img from './project_5.jpg'
import project6_img from './project_6.jpg'

const mywork_data = [
    {
        w_no: 1,
        w_name: "Dockerized a React Login page",
        w_description: "Dockerized React application configured for development mode using Create React App. Runs within a Node.js container to ensure consistency, enable hot-reloading, and streamline local testing, providing an efficient and portable development environment",
        w_technologies: ["React", "Docker", "Node.js", "Create React App"],
        w_img: project1_img,
        w_link: "https://github.com/omkarnerale18/dockerized-react-login-page",
        w_live: "https://your-ecommerce-project.com" 
    },
    {
        w_no: 2,
        w_name: "Gemini-clone",
        w_description: "A modern Gemini AI clone built using React and Google Generative AI API, featuring a clean, responsive, and interactive UI. This project replicates the conversational experience of Google’s Gemini chatbot, enabling users to get intelligent, context-aware responses in real-time",
        w_technologies: ["React", "Google Generative AI API", "javascript" ,  "Redux"],
        w_img: project2_img,
        w_link: "https://github.com/omkarnerale18/Gemini-clone",
        w_live: "https://gemini-clone-omkar.netlify.app/"
    },
    {
        w_no: 3,
        w_name: "Movie Search website",
        w_description: "A responsive movie search website built with HTML, CSS, and JavaScript. Uses an external API to fetch real-time movie details including title, release year, genres, rating, and plot. Features a clean, modern interface that allows users to quickly search and explore movies with ease.",
        w_technologies: ["HTML", "CSS", "JavaScript", "API"],
        w_img: project3_img,
        w_link: "https://github.com/omkarnerale18/movie-search-website",
        w_live: "https://movie-search-website-omkar.netlify.app/"
    },
    {
        w_no: 4,
        w_name: "Ev car website header",
        w_description: "A sleek and modern electric vehicle (EV) website header design built with React and responsive styling. This design features a bold hero section, clean navigation bar, and engaging call-to-action elements that create a premium automotive brand feel",
        w_technologies: ["React", "CSS3", "JavaScript", "Vite"],
        w_img: project4_img,
        w_link: "https://github.com/omkarnerale18/EV--car-website-Header",
        w_live: "https://your-portfolio.com"
    },
    {
        w_no: 5,
        w_name: "voting-app-docker-compose",
        w_description: "A Docker Compose project that runs a full voting application stack with Redis, PostgreSQL, a worker, and frontends for voting and results. Demonstrates container orchestration using Docker Compose v3, making it easy to deploy and manage multi-container apps",
        w_technologies: ["Docker", "Docker Compose", "Node.js", "Express.js", "PostgreSQL"],
        w_img: project5_img,
        w_link: "https://github.com/omkarnerale18/voting-app-docker-compose",
        w_live: "https://voting-app-docker-compose.netlify.app/"
    },
    {
        w_no: 6,
        w_name: "react-weather-app",
        w_description: "A sleek weather application built with React that fetches real-time data from a public weather API. Users can search for any city to view current conditions, temperature, humidity, and wind speed. Designed with a modern UI and responsive layout for a seamless user experience.",
        w_technologies: ["React", "API", "JavaScript"],
        w_img: project6_img,
        w_link: "https://github.com/omkarnerale18/react-weather-app",
        w_live: "https://react-weather-app-omkar.netlify.app/"
    }
]
 
export default mywork_data;