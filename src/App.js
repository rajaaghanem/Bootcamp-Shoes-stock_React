import React, { Component } from 'react';
import axios from 'axios';
import AvatarList from './components/AvatarList';
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

  render() {
    return (
      <div>
        <Input handleInput={this.handleInput} userValue={this.state.value} />
        <AvatarList shoes={this.state.data} userValue={this.state.value} />
      </div>
    );
  }
}
