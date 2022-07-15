import React from "react";

function Card(data) {
  console.log(data);
  const { id, title, image, desc } = data;
  return (
    <div key={id} className="cards">
      <div className="title">
        <h1>{title}</h1>
        <img src={image} alt="img" />
      </div>
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
