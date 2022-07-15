import React from "react";
import "./main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";

function Main() {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Main;
