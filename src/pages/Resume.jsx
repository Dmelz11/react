import React from 'react';
import resume from '../assets/resume.pdf';


import "../styles/Resume.css";



const Resume = () => {
  



    return (
      <><div id="resumeContent">


        <h1 className="text-center">David Melendez</h1>
        <br></br>
        <h5 className="text-center">Full Stack Web Developer</h5>
        <hr className="line"></hr>
        <p className="contact">Phone: 541-500-9142 | PO Box 4208 Brookings, OR 97415</p>
        <p className="text-center">
          <a href="mailto: david@greensprings.us">Email • </a>
          <a href="https://github.com/Dmelz11">
             Github • </a>
          <a href="https://www.linkedin.com/in/david-melendez-a03759293/">
             Linkedin
          </a>
        </p>
      </div>
      <div className="page-body">
          <h3>Education/Training</h3>
          <br></br>
          <ul className="date">09/2023 - 03/2024<br></br>
          • Recently completed an intensive six month course through UC Berkeley in Full Stack Web Development.<br></br>
          • Received EdX Certification for completing their AI/Prompt Engineering course.
          </ul>
          <br></br>
          <h3>Technical Skills</h3>
          <br></br>
          <ul className="skills">
            • Programming Languages: HTML/CSS, JavaScript and SQL<br></br>
            • Development Practices: Agile, OOP, MVC, ORM, CRUD and Responsive Web Design focusing on a mobile first approach.<br></br>
            • Libraries/Frameworks: React.js, Express.js, Handlebars.js, Sequelize, LangChain and Mongoose.<br></br>
            • Tools/Platforms: Git, Github, VScode, Heroku, Render, Netlify, Inquirer.js, MySQL Workbench and Insomnia.<br></br>
            • Databases: MongoDB and MySQL
          </ul>
          <br></br>
          <h3>Open-Source Projects</h3>
          <br></br>
          <br></br> 
          <ul className="projects">
            <h4>React Portfolio</h4><br></br>• <a href="https://cheery-dragon-5ec7af.netlify.app/src">Porfolio Link</a><br></br>
              This project is a single page application using React.js. I used the react components to manage the application state
              and  to pass data through the app. By importing the React Router I added client-side routing allowing the user to
              bookmark the URLs and use the browsers forward and back navigation. I connected some of my projects to the porfolio
              page allowing the user to access the deployed sites and Github repositories by their associated links.<br></br>
            <br></br>
            <h4>Work-Day Scheduler</h4><br></br>• <a href="https://dmelz11.github.io/work-day-calendar/">Scheduling App Link</a><br></br>
              This is a simple calendar application that allows the user to schedule events for a typical workday. It uses
              jQuery to update the HTML and CSS dynamically in the  browser and employs a third-party API call to the Day.js
              library to display the current time and date.<br></br>
            <br></br>
            <h4>Clean Air API</h4><br></br>• <a href="https://jaretdesanti.github.io/Air_Quality_Website/">Air Quality Link</a><br></br>
              This was my first group project so much of the focus was on employing the Agile development model,
              working as a team on our feature branches and creating pull requests to review our changes before merging
              to the main branch. This project also helped develope an understanding of the Github workflow by opening
              issues to assign tasks and accountability. Then initializing a project and using Kanban to track the
              progress of the project and the team members work.<br></br>
            <br></br>
            <h4>E-commerce App</h4><br></br>• <a href="https://github.com/Dmelz11/e-commerce-ORM">Repo Link</a><br></br>
              Although this application does not have a front end and therefore is not deployed, I decided to include
              it because it utilizes so many important features necessary for creating a functional E-commerce backend.
              I used Express.js and Sequelize to generate the ORM functions on the MySQL database and password hashing
              using bcrypt for secure user validation. Insomnia was used for the API testing.<br></br>
          </ul>
          <br></br>
          <div className="btnContainer">
          <button className='btn btn-lg'>
          <a href={resume} download="resume"><i class= "download"></i>Download Resume</a>
          </button>
          </div>
        
        </div></>
    
    );
  }

  export default Resume;
  