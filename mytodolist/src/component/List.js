import React from 'react';

const ListItem = ({ item }) => {
  return (
    <li className='shadow border list-group-item  d-flex justify-content-between my-1 '>
      <h3 className='text-center mx-auto'>{item}</h3>
    </li>
  );
};

export default ListItem;