import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card h-100 shadow-lg rounded-3">
      <Link to={props.path} className="text-decoration-none">
        <img
          src={props.img}
          className="card-img-top rounded-top"
        
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{props.name}</h5>
          <p className="card-text text-muted">{props.desc}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <button className="btn btn-primary w-100">View Products</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
