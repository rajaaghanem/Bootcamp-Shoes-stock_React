import React from "react";
import "./Input.css";
import axios from "axios";


class Input extends React.Component {
  state = { name: "", img: "", price: "" };


  CreateShoes = async() => {
    const shoes = {
      name: this.state.name,
      image: this.state.img,
      price: this.state.price,
    };
    const response = await axios.post(
      `https://61c7309d9031850017547339.mockapi.io/shoes`,
      shoes
    );
    return this.props.onCreate(response.data);
  };

  render() {
    return (
      <>
        <div className="input-container">
          <label>search:</label>
          <input
            onChange={this.props.handleInput}
            value={this.props.userValue}
          />
        </div>
      </>
    );
  }
}

export default Input;
