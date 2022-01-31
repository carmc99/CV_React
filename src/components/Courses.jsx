import React from 'react';

const Courses = ({ data }) => (
  <section className='lg:w-1/3 lg:border-l lg:border-neutral-300 lg:pl-2'>
    <h1 className='bg-sky-700 text-white font-bold text-center shadow-lg'>
      Cursos
    </h1>
    {data.map((item) => (
      <article className='my-5' key={item.name}>
        <h2 className='item-header'>{item.name}</h2>
        <p className='text-sm text-neutral-500 font-light'>
          {item.description}
        </p>
      </article>
    ))}
  </section>
);

export default Courses;
