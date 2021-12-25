import React from "react";
import "./Shoes.css";

function Shoes({ name, img, price }) {
  return (
    <div className="shoes-card">
      <img src={img} alt="Shoes" className="image" />
      <div className="content">
          <div className="name">{name}</div>
          <div className="name">{price}</div>
          <button>Update Item</button>
          <button>Delete Item</button>
      </div>
    </div>
  );
}

export default Shoes;
