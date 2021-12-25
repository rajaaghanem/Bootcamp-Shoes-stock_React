import React from "react";
import "./Input.css";

function Input({ handleInput, userValue }) {
  return (
    <>
      <div  className="input-container">
        <label>search:</label>
        <input onChange={handleInput} value={userValue} />
      </div>

      <div className="input-container">
        <label>Name:</label>
        <input onChange={handleInput} value={userValue} />
        <label>Image URL:</label>
        <input onChange={handleInput} value={userValue} />
        <label>Price:</label>
        <input onChange={handleInput} value={userValue} />
        <button>Add Shoes</button>
      </div>
    </>
  );
}

export default Input;
