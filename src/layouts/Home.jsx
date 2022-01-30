import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Resume from 'components/Resume';
import Experience from 'components/Experience';
import resume from 'data/profile';
import Skills from 'components/Skills';
import Education from 'components/Education';
import List from 'components/List';

const Home = () => (
  <main className='antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5'>
    <div className='container mx-auto shadow bg-white py-5 px-10'>
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <Resume data={resume.summary} />
      <div className='border-b border-neutral-300 pb-2 my-5 lg:flex'>
        <div className='lg:w-2/3 lg:pr-8'>
          {resume.experience && <Experience data={resume.experience} />}
        </div>
        <div className='lg:w-1/3 lg:pl-8 lg:border-l lg:border-neutral-300 '>
          {resume.skills && <Skills data={resume.skills} />}
          {resume.education && <Education data={resume.education} />}
          {resume.sidebar &&
            resume.sidebar.map((item) => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
);

export default Home;
