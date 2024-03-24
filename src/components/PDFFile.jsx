
import React from "react";
import { Page, Text, Document, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        paddingBottom: 45,
        paddingHorizontal: 30,
    },
    text: {
        margin: 15,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "helvetica",
        color: "black",
    },
    header: {
        fontSize: 14,
        marginBottom: 25,
        textAlign: "center",
        color: "grey",
    }
});


const PDFFile = () => {
   <Document>
    <Page style = {styles.body}>
        <Text style = {styles.header}> fixed</Text>
        <Text style = {styles.text}> 
        David Melendez
Full Stack Web Developer
______________________________________________________
 Phone: 541-500-9142 PO Box 4208 Brookings, OR 97415
   Email | Linkedin | Github 




Education/Training

09/2023 - 03/2024
Recently completed an intensive six month course through UC Berkeley Extension in Full Stack Web Development.


Technical Skills

•Programming Languages:  HTML/CSS, JavaScript and SQL
•Development Practices:  Agile, OOP, MVC, ORM, CRUD and Responsive Web Design with a Mobile First focus.
•Libraries/Frameworks: React.js, Express.js, Handlebars.js, Sequelize and Mongoose.
•Tools/Platforms: Git/Github, VScode, Heroku, Render, Netlify, Inquirer.js, MySQL Workbench and Insomnia.
• Databases: MongoDB and MySQL.


Open-Source Projects 

•React Portfolio | https://gilded-genie-b2058a.netlify.app/
This project is a single page application using React.js . I used the React components to manage the application state 
and pass data through the app. By importing the React Router I added client-side routing allowing the user to bookmark the URLs and use the browser’s forward and back navigation buttons. I’ve connected some of my projects to the portfolio page allowing the user to access the deployed sites and Github repositories by their associated links.

•Work-Day-Scheduler | https://dmelz11.github.io/work-day-calendar/
This is a simple calendar application that allows the user to schedule events for a typical workday. It uses jQuery to update the HTML and CSS dynamically in the browser and employs a Third-Party API call to the Day.js library to display the current time and date.

•Clean Air API | https://jarettdesanti.github.io/Air_Quality_Website/
This was my first group project so much of the focus was on employing the Agile development model, working as a team on our feature branches and creating pull requests to review our changes before merging to the main branch. Also developing an understanding of the Github workflow by opening issues to assign tasks and accountability, initializing a project and using Kanban to track the progress of the project and the team members work. 


•E-commerce ORM App | https://github.com/Dmelz11/e-commerce-ORM
Although this app does not have a frontend therefore is not deployed, I have decided to include it because it utilizes so many important features necessary for operating a functional E-commerce backend. It uses Express.js and Sequelize to generate the ORM functions on the MySQL database and .dotenv and bcrypt to achieve password hashing for secure user validation. I used Insomnia for API testing.



      </Text>
    </Page>
   </Document>
};
export default PDFFile;