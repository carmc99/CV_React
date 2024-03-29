import React from 'react';
import Progress from 'components/Progress';
import ListItem from 'components/ListItem';

const Skills = ({ data }) => {
  console.log(data);
  return (
    <section>
      <h1 className='bg-sky-700 text-white font-bold text-center '>
        Habilidades
      </h1>
      {data.map((skill) => (
        <div key={skill.title} className='my-5'>
          <h1 className='item-header font-semibold text-lg mb-2'>
            {skill.title}
          </h1>
          {skill.subskills.map((subskill) => (
            <span key={subskill.name}>
              {skill.type === 'percent' && (
                <Progress name={subskill.name} percent={subskill.percent} />
              )}
              {skill.type === 'tag' && (
                <span key={subskill.name} className='tag'>
                  {subskill.name}
                </span>
              )}
              {skill.type === 'list' && (
                <ListItem key={subskill.name} text={subskill.name} />
              )}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;
