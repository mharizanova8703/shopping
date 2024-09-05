import React from "react";

const Card = ({ image, paragraph, buttonText, prizeName }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={prizeName} />
      <div className="card-body">
        <h5 className="card-title">{prizeName}</h5>
        <p className="card-text">{paragraph}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;