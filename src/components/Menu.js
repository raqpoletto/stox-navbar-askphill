import { useState } from "react";
import ArrowDown from "../assets/arrow-down.png";
import ArrowUp from "../assets/arrow-up.png";
import "../style/Menu.scss";

export const Menu = ({ list }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="menu-item" onClick={() => setOpen(!open)}>
        <h2>{list.name.toUpperCase()}</h2>
        <div>
          {!open ? (
            <img className="arrow" src={ArrowDown} alt="Expand category" />
          ) : (
            <img className="arrow" src={ArrowUp} alt="Collapse category" />
          )}
        </div>
      </div>
      {list.items.map((e) => {
        return (
          open && (
            <div className="menu-item" key={e.id}>
              <h4>{e.name.toUpperCase()}</h4>
              <h5>{e.quantity} products</h5>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Menu;
