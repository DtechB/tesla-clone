import React from "react";
import Section from "./Section";

const items = [
  {
    title: "Model 3",
    desc: "Order Online for Touchless Delivery",
    imageUrl: "model-3.jpg",
    leftBtn: "custom order",
    rightBtn: "existing inventory",
  },
  {
    title: "Model Y",
    desc: "Order Online for Touchless Delivery",
    imageUrl: "model-y.jpg",
    leftBtn: "custom order",
    rightBtn: "existing inventory",
  },
  {
    title: "Model S",
    desc: "Order Online for Touchless Delivery",
    imageUrl: "model-s.jpg",
    leftBtn: "custom order",
    rightBtn: "existing inventory",
  },
  {
    title: "Model X",
    desc: "Order Online for Touchless Delivery",
    imageUrl: "model-x.jpg",
    leftBtn: "custom order",
    rightBtn: "existing inventory",
  },
  {
    title: "Solar Panels",
    desc: "Lowest Cost Solar Panel in America",
    imageUrl: "solar-panel.jpg",
    leftBtn: "order now",
    rightBtn: "learn more",
  },
  {
    title: "Solar Roof",
    desc: "Produce Clean Energy From Your Roof",
    imageUrl: "solar-roof.jpg",
    leftBtn: "order now",
    rightBtn: "learn more",
  },
];

function Home() {
  return (
    <div>
      {items.map((item) => (
        <Section
          key={item.title}
          title={item.title}
          desc={item.desc}
          imageUrl={item.imageUrl}
          leftBtn={item.leftBtn}
          rightBtn={item.rightBtn}
        />
      ))}
      <Section
        title="Accessory"
        imageUrl="accessories.jpg"
        leftBtn="shop now"
      />
    </div>
  );
}

export default Home;
