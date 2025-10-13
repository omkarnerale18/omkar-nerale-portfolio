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
        w_name: "Nodejs-Jenkins-CICD-pipeline",
        w_description: "A Jenkins-powered CI/CD pipeline for a Dockerized Node.js Email Submission App. It automates building, testing, and containerizing the app using Docker and Jenkins, ensuring fast, consistent, and reliable deployments — a perfect demo of modern DevOps workflow.",
        w_technologies: ["Jenkins", "Docker", "Node.js", "CICD"],
        w_img: project1_img,
        w_link: "https://github.com/omkarnerale18/Nodejs-Jenkins-CICD-pipeline.git",
        w_live: "https://your-ecommerce-project.com" 
    },
    {
        w_no: 2,
        w_name: "k8s-Email-Submission-App",
        w_description: "A full-stack Email Submission App deployed on Kubernetes with MongoDB backend and persistent storage. Features Dockerized Node.js frontend, MongoDB with PVC for data persistence, and Minikube for orchestration. Demonstrates Kubernetes deployments, services, and storage concepts.",
        w_technologies: [  "Kubernetes", "Docker","Node.js", "javascript", "MongoDB"],
        w_img: project2_img,
        w_link: "https://github.com/omkarnerale18/k8s-Email-Submission-App.git",
        w_live: "https://gemini-clone-omkar.netlify.app/"
    },
    {
        w_no: 3,
        w_name: "dockerized-react-login-page",
        w_description: "A Dockerized React application configured for development mode using Create React App. Runs within a Node.js container to ensure consistency, enable hot-reloading, and streamline local testing, providing an efficient and portable development environment",
        w_technologies: ["React", "Docker", "Create React App"],
        w_img: project3_img,
        w_link: "https://github.com/omkarnerale18/dockerized-react-login-page.git",
        w_live: "https://movie-search-website-omkar.netlify.app/"
    },
    {
        w_no: 4,
        w_name: "aws-nginx-autoscaling-hosting",
        w_description: "Deployed an HTML template from Tooplate on AWS using Nginx with a scalable and fault-tolerant cloud architecture. The setup includes a custom VPC, Subnets, AMI-based EC2 instances, an Elastic Load Balancer (ELB), and an Auto Scaling Group (ASG) to ensure high availability and performance",
        w_technologies: ["AWS", "Nginx", "EC2", "VPC", "Auto Scaling Group", "Elastic Load Balancer"],
        w_img: project4_img,
        w_link: "https://github.com/omkarnerale18/aws-nginx-autoscaling-hosting.git",
        w_live: "https://your-portfolio.com"
    },
    {
        w_no: 5,
        w_name: "crispy-kitchen-s3-hosting",
        w_description: "Crispy Kitchen is a responsive restaurant website built with HTML5, CSS3, and Bootstrap. Based on a free Tooplate template, it is deployed using AWS S3 static website hosting to showcase menus, ratings, and modern UI design as a cloud deployment practice project.",
        w_technologies: ["AWS", "S3", "HTML5", "CSS3", "Bootstrap"],
        w_img: project5_img,
        w_link: "https://github.com/omkarnerale18/crispy-kitchen-s3-hosting.git",
        w_live: "https://voting-app-docker-compose.netlify.app/"
    },
    {
        w_no: 6,
        w_name: "Gemini-clone",
        w_description: "A modern Gemini AI clone built using React and Google Generative AI API, featuring a clean, responsive, and interactive UI. This project replicates the conversational experience of Google’s Gemini chatbot, enabling users to get intelligent, context-aware responses in real-time.",
        w_technologies: ["React", "Google Generative AI API", "javascript" ,],
        w_img: project6_img,
        w_link: "https://github.com/omkarnerale18/Gemini-clone.git",
        w_live: "https://react-weather-app-omkar.netlify.app/"
    }
]
 
export default mywork_data;