import React, { Component } from "react";
import axios from "axios";
import ShoesList from "./components/ShoesList";
import Input from "./components/Input";
import "./App.css";

export default class App extends Component {
  state = { data: [], value: "", name: "", img: "", price: "" };

  async componentDidMount() {
    //spinner on
    await this.getData();
    //spinner off
  }

  getData = async () => {
    const res = await axios.get(
      "https://61c7309d9031850017547339.mockapi.io/shoes"
    );
    this.setState({ data: res.data, originalData: res.data });
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      value: value,
    });
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
    this.setState((state) => {
          return { data: [...state.data, response.data]};
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

  handleDeleteMain = (id) => {
    const filteredList = this.state.data.filter((shoes) => {
      return shoes.id !== id;
    });
    this.setState({ data: filteredList });
  };

  render() {
    return (
      <>
        <div className="app-container">
          <Input
            handleInput={this.handleInput}
            userValue={this.state.value}
            onCreate={this.createShoe}
          />
          <div className="input-container">
          <label>Name:</label>
          <input onChange={this.handleName} value={this.state.name} />
          <label>Image URL:</label>
          <input onChange={this.handleImg} value={this.state.img} />
          <label>Price:</label>
          <input onChange={this.handlePrice} value={this.state.price} />
          <button onClick={this.CreateShoes}>Add Shoes</button>
        </div>
          <ShoesList
            shoes={this.state.data}
            userValue={this.state.value}
            onclick={this.handleDeleteMain}
          />
        </div>
      </>
    );
  }
}
