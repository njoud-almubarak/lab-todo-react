import React from 'react';
import ListItem from './List';

const ListGroup = ({ todoList }) => {
  return (
    <ul className='border list-group p-3'>
      {todoList.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default ListGroup;