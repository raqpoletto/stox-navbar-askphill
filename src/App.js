import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SliderWrapper from "./components/SliderWrapper";

function App() {
  const [open, setOpen] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Daily",
      items: [
        { id: 1, name: "Office Socks", quantity: 25 },
        { id: 2, name: "Casual Socks", quantity: 25 },
        { id: 3, name: "Winter Socks", quantity: 25 },
        { id: 4, name: "Summer Socks", quantity: 25 },
        { id: 5, name: "Spring Socks", quantity: 25 },
        { id: 6, name: "Animated Socks", quantity: 25 },
      ],
    },
    {
      id: 2,
      name: "Sports",
      items: [
        { id: 1, name: "Running", quantity: 25 },
        { id: 2, name: "Cycling", quantity: 25 },
        { id: 3, name: "Hiking", quantity: 25 },
        { id: 4, name: "Skiing", quantity: 25 },
        { id: 5, name: "Golf", quantity: 25 },
        { id: 6, name: "Fitness", quantity: 25 },
      ],
    },
    {
      id: 3,
      name: "Travel",
      items: [{ id: 1, name: "Travel Socks", quantity: 1 }],
    },
    {
      id: 4,
      name: "Medical",
      items: [
        { id: 1, name: "Compression Socks", quantity: 25 },
        { id: 2, name: "Diabetic Socks", quantity: 25 },
        { id: 3, name: "Medical Socks", quantity: 25 },
        { id: 4, name: "Recovery Socks", quantity: 25 },
      ],
    },
    {
      id: 5,
      name: "More",
      items: [
        { id: 1, name: "Kids Socks", quantity: 25 },
        { id: 2, name: "Pet Socks", quantity: 25 },
        { id: 3, name: "Gift Cards", quantity: 25 },
        { id: 4, name: "Gift Sets", quantity: 25 },
        { id: 5, name: "Gifts", quantity: 25 },
        { id: 6, name: "Gifts for Her", quantity: 25 },
        { id: 7, name: "Gifts for Him", quantity: 25 },
        { id: 8, name: "Gifts for Kids", quantity: 25 },
        { id: 9, name: "Gifts for Pets", quantity: 25 },
      ],
    },
  ];

  return (
    <div>
      <Header state={open} toggle={() => setOpen(!open)} />
      <SliderWrapper />
      {categories.map((category) => (
        <Menu key={category.id} list={category} />
      ))}
    </div>
  );
}

export default App;
