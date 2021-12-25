import React, { Component } from 'react';
import axios from 'axios';
import ShoesList from './components/ShoesList';
import Input from './components/Input';

export default class App extends Component {
  state = { data: [], value: '' };

  async componentDidMount() {
    //spinner on
    await this.getData();
    //spinner off
  }

  getData = async () => {
    const res = await axios.get('https://61c7309d9031850017547339.mockapi.io/shoes');

    console.log("axios",res);

    this.setState({ data: res.data, originalData: res.data });
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      value: value,
    });
  };

  createShoe=(addedItem)=>{
    this.setState((state)=>{
      return ({data:[...state.data],addedItem})
    })
    console.log(addedItem.data);
  }

  render() {
    console.log(this.state.data);
    return (
      <div className='app-container'> 
        <Input handleInput={this.handleInput} userValue={this.state.value} onCreate={this.createShoe}/>
        <ShoesList shoes={this.state.data} userValue={this.state.value} />
      </div>
    );
  }
}
