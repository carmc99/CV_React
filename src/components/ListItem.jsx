import React from 'react';
import { ReactComponent as BoltIcon } from 'assets/bolt.svg';

const ListItem = ({ text }) => (
  <div className='my-1'>
    <svg>
      <BoltIcon className='inline-block h-3 fill-current text-secondary-500' />
    </svg>
    <span className='inline-block font-medium ml-2'>{text}</span>
  </div>
);

export default ListItem;
