import React from "react";
import "./Shoes.css";
import axios from "axios";

class Shoes extends React.Component {
  state = {
    isOn: false,
    name: this.props.name,
    img: this.props.img,
    price: this.props.price,
    id: this.props.id,
  };

  handleDelete = async () => {
    await axios.delete(
      `https://61c7309d9031850017547339.mockapi.io/shoes/${this.props.id}`
    );
    return this.props.onclick(this.props.id);
  };

  handleUpdate = () => {
    this.setState((state) => {
      return { isOn: !state.isOn };
    });
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleImg = (event) => {
    this.setState({ img: event.target.value });
  };

  handlePrice = (event) => {
    this.setState({ price: event.target.value });
  };

  updateShoes = async () => {
    const shoes = {
      name: this.state.name,
      image: this.state.img,
      price: this.props.price,
    };

    await axios.put(
      `https://61c7309d9031850017547339.mockapi.io/shoes/${this.props.id}`,
      shoes
    );
    this.setState({ isOn: false });
    return this.props.updateitem(
      this.state.id,
      this.state.name,
      this.state.img,
      this.state.price
    );
  };

  addUpdate = () => {
    return this.state.isOn ? (
      <div className="input-container">
        <label>Name:</label>
        <input onChange={this.handleName} value={this.state.name} />
        <label>Image URL:</label>
        <input onChange={this.handleImg} value={this.state.img} />
        <label>Price:</label>
        <input onChange={this.handlePrice} value={this.state.price} />
        <button onClick={this.updateShoes}>Update</button>
      </div>
    ) : null;
  };

  render() {
    return (
      <div className="container-cards">
        <div className="shoes-card">
          <img src={this.state.img} alt="Shoes" className="image" />
          <div className="content">
            <div className="name">{this.state.name}</div>
            <div className="name">{this.state.price}</div>
            <button onClick={this.handleUpdate}>Update Item</button>
            <button onClick={this.handleDelete}>Delete Item</button>
          </div>
        </div>
        {this.addUpdate()}
      </div>
    );
  }
}

export default Shoes;
