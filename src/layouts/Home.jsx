import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Resume from 'components/Resume';
import Experience from 'components/Experience';
import resume from 'data/profile';
import Skills from 'components/Skills';
import Education from 'components/Education';
import List from 'components/List';
import Hobbies from 'components/Hobbies';
import Languages from 'components/Languages';
import Courses from 'components/Courses';
import 'styles/main.css';

const Home = () => (
  <main className='antialiased text-neutral-900 bg-gradient-to-r from-sky-500 to-sky-700 min-h-screen sm:p-5'>
    <div className='container  mx-auto shadow bg-indigo-50 py-5 px-10  xl:w-auto'>
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <Resume data={resume.summary} />
      <div className='border-b border-neutral-300 pb-2 my-5 lg:flex'>
        <div className='lg:w-2/3 lg:pr-8'>
          {resume.experience && <Experience data={resume.experience} />}
          <div className='lg:flex'>
            {resume.hobbies && <Hobbies data={resume.hobbies} />}
            {resume.courses && <Courses data={resume.courses} />}
            {resume.languages && <Languages data={resume.languages} />}
          </div>
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
