import React from "react";
import "./Shoes.css";
import axios from "axios";

class Shoes extends React.Component {
  handleDelete = async () => {
     await axios.delete(
      `https://61c7309d9031850017547339.mockapi.io/shoes/${this.props.id}`
     
    );
    return (this.props.onclick(this.props.id));
  };

  render() {
    return (
      <div className="shoes-card">
        <img src={this.props.img} alt="Shoes" className="image" />
        <div className="content">
          <div className="name">{this.props.name}</div>
          <div className="name">{this.props.price}</div>
          <button>Update Item</button>
          <button onClick={this.handleDelete}>Delete Item</button>
        </div>
      </div>
    );
  }
}

export default Shoes;
