import React from "react";
import "./Shoes.css";
import axios from "axios";

class Shoes extends React.Component {
  state = { isOn: false };

  handleDelete = async () => {
    await axios.delete(
      `https://61c7309d9031850017547339.mockapi.io/shoes/${this.props.id}`
    );
    return this.props.onclick(this.props.id);
  };

  handleUpdate=()=>{
    this.setState((state)=>{
      return {isOn: !state.isOn};
    });
  }

  addUpdate=()=>{
    return this.state.isOn?  <div className="input-container">
    <label>Name:</label>
        <input onChange={this.handleName} value={this.state.name} />
        <label>Image URL:</label>
        <input onChange={this.handleImg} value={this.state.img} />
        <label>Price:</label>
        <input onChange={this.handlePrice} value={this.state.price} />
        <button onClick={this.CreateShoes}>Update</button>
    </div>: null;
  }

  render() {
    return (
      <div className="container-cards">
      <div className="shoes-card">
        <img src={this.props.img} alt="Shoes" className="image" />
        <div className="content">
          <div className="name">{this.props.name}</div>
          <div className="name">{this.props.price}</div>
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
