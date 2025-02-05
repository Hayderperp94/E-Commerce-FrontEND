import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <Link to= {props.path} className="text-decoration-none"> {/* Outer Link */}
        <div className="card h-100 shadow text-center mt-4">
          <img src={props.img} className="card-img-top card-image" alt={props.name} />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text flex-grow-1">{props.desc}</p>
            <button
              className="btn btn-primary mt-auto"
             
            
            >
              View Products
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
