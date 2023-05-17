import React from "react";
import CardItem from "../../CardItem/CardItem";
import "./Projects.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="This project was built with the MERN stack. It is a full stack application that allows users to create, read, update, and delete notes. It also allows users to create, read, update, and delete users. It is a simp"
              label="Details"
              path="/"
            />
            <CardItem
              src="images/img-2.jpg"
              text="This project was built with the MERN stack. It is a full stack application that allows users to create, read, update, and delete notes. It also allows users to create, read, update, and delete users. It is a simp"
              label="Details"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="This project was built with the MERN stack. It is a full stack application that allows users to create, read, update, and delete notes. It also allows users to create, read, update, and delete users. It is a simp"
              label="Details"
              path="/"
            />
            <CardItem
              src="images/img-4.jpg"
              text="This project was built with the MERN stack. It is a full stack application that allows users to create, read, update, and delete notes. It also allows users to create, read, update, and delete users. It is a simp"
              label="Details"
              path="/"
            />
            <CardItem
              src="images/img-5.jpg"
              text="This project was built with the MERN stack. It is a full stack application that allows users to create, read, update, and delete notes. It also allows users to create, read, update, and delete users. It is a simp"
              label="Details"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
