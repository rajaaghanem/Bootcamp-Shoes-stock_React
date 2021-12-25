import React from 'react';

function Shoes({ name, img }) {
  return (
    <div className='Shoes'>
      <h4>{name}</h4>
      <img src={img} alt='Shoes' />
    </div>
  );
}

export default Shoes;
