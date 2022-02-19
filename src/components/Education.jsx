import React from 'react';

const Education = ({ data }) => (
  <section className='mb-5'>
    <h1 className='bg-sky-700 text-white font-bold text-center mb-5 '>
      Educación
    </h1>
    {data &&
      data.map((item) => (
        <div className='my-2' key={item.degree}>
          <h2 className='item-header text-lg'>{item.degree}</h2>
          <h3 className='item-sub'>{item.institution}</h3>
          <p className='text-sm text-neutral-500 font-light'>
            {item.start} - {item.end}
          </p>
        </div>
      ))}
  </section>
);

export default Education;
