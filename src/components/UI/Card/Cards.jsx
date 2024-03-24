import "/src/App.css";
import React from 'react';


export default function Card(props) {

  const cardStyle = {
    width: "30rem",
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.project.img}
          alt={props.project.imgAlt}
        />
        <div className="card-body">
          <h3 className="card-title">{props.project.name}</h3>
          <p className="card text">{props.project.text}</p>
          <a href={props.project.github} className="btn btn-dark mb-5">
            Github Repo
          </a>
          <br></br>
          {props.project.deployed && (
            <>
              <a href={props.project.deployed} className="btn btn-dark mb-5">
                Deployed Site
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
