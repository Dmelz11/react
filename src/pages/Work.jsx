
import Card from "../components/UI/Card/Cards";

export default function Work() {
  const data = [
    {
      name: "Project 1",
      img: "https://github.com/Dmelz11/Photos/assets/143745882/8ce04901-264b-4937-8bf5-7a038662f279",
      text: "Clean Air API: This was a team project, focusing on creating a multiple server-side API application.This project also allowed our team to implement the Agile software development model while using gitbranch pull requests and code review prior to merging to the main project branch.",
      github:"https://github.com/Dmelz11/Air_Quality_Website",
      deployed: "",
      imgAlt: "Screenshot Clean Air",
    },
    {
      name: "Project 2",
      img: "https://github.com/Dmelz11/Photos/assets/143745882/978beed4-7668-496f-b99f-e554c4c4c707",
      text: "The Book Cub Blog: This is another team project focusing on collaborative development through the Agile software development model. The back end includes networking with servers, databases and advanced APIs using User Authentication. This project followed an MVC folder structure and is deployed to Heroku. ",
      github: "https://github.com/Dmelz11/book_club_blog_p2",
      deployed: "",
      imgAlt: "Screenshot BC Blog",
    },
    {
      name: "Work Day Scheduler",
      img: "https://github.com/Dmelz11/Photos/assets/143745882/82db02b1-2ea3-4bda-8ad8-b1697df6f55e",
      text: "This project focused on utilizing Third-Party APIs. It involved working with the jQuery library for event handling and DOM manipulation and also included the Bootstrap framework and the Day.js library for date and time.",
      github: "https://github.com/Dmelz11/work-day-calendar",
      deployed: "https://dmelz11.github.io/work-day-calendar/",
      imgAlt: "Screenshot work calendar"
    },
    {
      name: "Note Taker",
      img: "https://github.com/Dmelz11/Photos/assets/143745882/0fc7969d-3418-42f7-b58b-d73dea042b60",
      text:"This project used the Express.js server in the back end to handle the GET and POST http requests methods for creating and updating the data stored in a JSON file.",
      github: "https://github.com/Dmelz11/note-taker",
      deployed: "",
      imgAlt: " Screenshot note taker"
    },
    {
      name: "E-Commerce",
      img: "https://github.com/Dmelz11/Photos/assets/143745882/5936363d-9228-4f4e-9b19-f143ce6bf4f9",
      text: "This back end application focuses on data collection using ORM. Using Sequelize methods to communicate with MySQL to perform CRUD operations. This application is also deployed to Heroku.",
      github: "https://github.com/Dmelz11/e-commerce-ORM",
      deployed: "",
      imgAlt: "Screenshot E-Commerce"
    },
    {
      name: "PWA",
      img: "https://github.com/Dmelz11/prog-web-app/assets/143745882/471a6b9b-46f1-4f81-8b20-2fb51636aaf0",
      text: "This Single Page Web App employs data persistence that allows it to work offline. This project features webpack plugins and stores the text editor files in the IndexDB. It has been deployed to Render.",
      github: "https://github.com/Dmelz11/prog-web-app",
      deployed: "https://prog-web-app-3.onrender.com/",
      imgAlt: "screenshot PWA"
    },
  ]
  

  

  return (
    <div className="page-body">
      <h1>Work</h1>
      <div className="card-group">
        {data.map((item) => (
          <Card project={item} />
        ))}
      </div>
    </div>
  );
}
