import React from 'react';

const Experience = ({ data }) => {
  return (
    <section>
      <h1 className='bg-sky-700 text-white font-bold text-center '>
        Experiencia
      </h1>
      {data &&
        data.map((item) => (
          <article className='my-5' key={`${item.company}`}>
            <h2 className='item-header'>{item.role}</h2>
            <h3 className='item-sub'>
              {item.company} | {item.start} - {item.end || 'PRESENT'}
            </h3>
            {item.description &&
              item.description.map((des) => <p className='py-0'>- {des}</p>)}
          </article>
        ))}
    </section>
  );
};

export default Experience;
