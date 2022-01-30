import React from 'react';

const Contact = ({ field, value }) => (
  <span className='flex my-2 text-primary-900 tracking-widest items-center'>
    <a title='email'>{value}</a>

    <a title='phone'>{field}</a>
  </span>
);

export default Contact;
