
import React from "react";


const Projects = () => (
    <section id="projects">
      <div className='items-center justify-center flex mt-10'>
    <div className='flex flex-col shadow-md w-[60%] h-150 p-4 border border-gray-100 rounded-lg text-center justify-center items-center gap-3'>
        <div className=''></div>
        <h1 className='flex items-center font-bold text-3xl'>My Projects</h1>
        <h2 className="font-bold">1. Task Management System (Python, Django)</h2>
        <p className='text-md'><strong>Technologies Used:</strong> Python,Django,PostgreSQL</p>
        <p className='text-md'><strong>Description:</strong> A task management system that allows users to create, update, and track tasks efficiently.</p>
        <p className='text-md'><strong>GitHub Repository:</strong> 
            <a href="https://github.com/Anandkumar264/Task-Management-System.git" target="_blank">
                View on GitHub
            </a>
        </p>

        <h3 className="font-bold">2. Digital Library Management System API (Node.js, Express.js[Internship])</h3>
        <p className='text-md'><strong>Technologies Used:</strong> Node.js, Express.js, PostgreSQL</p>
        <p className='text-md'><strong>Description:</strong> A digital library management system API that helps manage book records, users, and transactions.</p>
        <p className='text-md'><strong>GitHub Repository:</strong> 
            <a href= "https://github.com/Anandkumar264/Digital-library-api.git" target="_blank">
                View on GitHub
            </a>
        </p> 
        <h3 className="font-bold">3.Weather App (HTML, CSS, JavaScript, React)</h3>
        <p className='text-md'><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React</p>
        <p className='text-md'><strong>Description:</strong> Displays real-time weather updates with temperature, humidity, and forecast based on user’s location.</p>
        <p className='text-md'><strong>GitHub Repository:</strong> 
            <a href="https://github.com/Anandkumar264/weather-app.git" target="_blank">
                View on GitHub
            </a>
        </p> 
        </div>
        </div  >
    </section>
  );
  
  export default Projects;
  