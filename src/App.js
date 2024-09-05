import React from "react";
import "./App.css";
import Card from "./Card";
import waffleImage from "./images/waffle.png";

function App() {
  const cardsData = [
    {
      image: waffleImage,
      paragraph: "Delicious chocolate cake.",
      buttonText: "Order Now",
      prizeName: "Chocolate Cake",
    },
    {
      image: "path-to-image2.jpg",
      paragraph: "Tasty strawberry ice cream.",
      buttonText: "Order Now",
      prizeName: "Strawberry Ice Cream",
    },
    {
      image: "path-to-image3.jpg",
      paragraph: "Classic vanilla cupcakes.",
      buttonText: "Order Now",
      prizeName: "Vanilla Cupcakes",
    },
    {
      image: "path-to-image4.jpg",
      paragraph: "Fresh fruit tart.",
      buttonText: "Order Now",
      prizeName: "Fruit Tart",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-start">Desserts</h1>
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-lg-3" key={index}>
            <Card
              image={card.image}
              paragraph={card.paragraph}
              buttonText={card.buttonText}
              prizeName={card.prizeName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
