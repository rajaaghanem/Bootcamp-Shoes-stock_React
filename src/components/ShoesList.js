import React from 'react';
import Shoes from './Shoes';
import "./ShoesList.css";

class ShoesList extends React.Component {
  state = { shoes: [] };

  componentDidUpdate(prevProps) {
    if (prevProps.userValue !== this.props.userValue) {
      this.setState({
        shoes: this.filterData(this.props.shoes, this.props.userValue),
      });
    } else if (prevProps.shoes !== this.props.shoes) {
      this.setState({
        shoes: this.props.shoes,
      });
    }
  }

  filterData = (arrOfData, userInput) => {
    return arrOfData.filter((shoes) => {
      return shoes.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  handleDelete=(id)=>{
    return (this.props.onclick(id));
  }

  mapping = () => {
    return this.state.shoes.map((e) => {
      return <Shoes key={e.id} name={e.name} img={e.image} price={e.price} id={e.id} onclick={this.handleDelete}/>;
    });
  };


  render() {
    console.log("the list state", this.state.shoes);
    return <div className='shoeslist-container'>{this.mapping()}</div>;
  }
}

export default ShoesList;
