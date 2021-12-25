import React from 'react';
import Avatar from './Avatar';

class AvatarList extends React.Component {
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
    return arrOfData.filter((avatar) => {
      return avatar.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  mapping = () => {
    return this.state.shoes.map((e) => {
      return <Avatar key={e.id} name={e.name} img={e.image} />;
    });
  };
  render() {
    return <div>{this.mapping()}</div>;
  }
}

export default AvatarList;
