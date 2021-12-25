import React from "react";
import "./Input.css";
import axios from "axios";


class Input extends React.Component {
  state = { name: "", img: "", price: "" };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleImg = (event) => {
    this.setState({ img: event.target.value });
  };

  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  };

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
    console.log(response);
    return this.props.onCreate(response);
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

        <div className="input-container">
          <label>Name:</label>
          <input onChange={this.handleName} value={this.state.name} />
          <label>Image URL:</label>
          <input onChange={this.handleImg} value={this.state.img} />
          <label>Price:</label>
          <input onChange={this.handlePrice} value={this.state.price} />
          <button onClick={this.CreateShoes}>Add Shoes</button>
        </div>
      </>
    );
  }
}

export default Input;
