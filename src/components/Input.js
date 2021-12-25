import React from "react";
import "./Input.css";

 class Input extends React.Component{
 state={name: "", img: "", price:""};

 handleName=(event)=>{
   this.setState({name: event.target.value})
 }

 handleImg=(event)=>{
  this.setState({img: event.target.value})
}

handlePrice=(event)=>{
  this.setState({price: event.target.value})
}

 render(){
   console.log(this.state.name);
  return (
    <>
      <div  className="input-container">
        <label>search:</label>
        <input onChange={this.props.handleInput} value={this.props.userValue} />
      </div>

      <div className="input-container">
        <label>Name:</label>
        <input  onChange={this.handleName} value={this.state.name}/>
        <label>Image URL:</label>
        <input  onChange={this.handleImg} value={this.state.img}/>
        <label>Price:</label>
        <input  onChange={this.handlePrice} value={this.state.price}/>
        <button>Add Shoes</button>
      </div>
    </>
  );
 }
}

// function Input({ handleInput, userValue }) {
//   return (
//     <>
//       <div  className="input-container">
//         <label>search:</label>
//         <input onChange={handleInput} value={userValue} />
//       </div>

//       <div className="input-container">
//         <label>Name:</label>
//         <input onChange={handleInput}  />
//         <label>Image URL:</label>
//         <input onChange={handleInput}  />
//         <label>Price:</label>
//         <input onChange={handleInput} />
//         <button>Add Shoes</button>
//       </div>
//     </>
//   );
// }

export default Input;
