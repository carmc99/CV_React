import React from 'react';

const Hobbies = ({ data }) => (
  <section className='lg:w-2/3 lg:pr-2'>
    <h1 className='bg-sky-700 text-white font-bold text-center shadow-lg'>
      Hobbies
    </h1>
    {data.map((item) => (
      <article className='my-2' key={item.name}>
        <h2 className='item-header'>{item.name}</h2>
      </article>
    ))}
  </section>
);

export default Hobbies;
