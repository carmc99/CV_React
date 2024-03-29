import React from 'react';
import SocialIcon from 'components/Icon';

const Footer = ({ social }) => (
  <footer className='py-6 mx-auto items-center justify-between md:flex'>
    <div className='items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-2'>
      <span className='inline-block mr-1'>
        © {new Date().getFullYear()} | Developed with React
      </span>
      <span className='inline-block mr-1'>by</span>
      <a
        className='text-sky-500 hover:text-sky-700 font-bold'
        rel='noopener noreferrer'
      >
        Carlos Medina
      </a>
    </div>
    {social && (
      <div className='flex items-center justify-center ml-2'>
        {social.map((item) => (
          <div>
            <a
              key={item.service}
              className='footer-social-link'
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              title={item.service}
            >
              <SocialIcon type={item.service} />
            </a>
            <span className='pr-5'>{item.description}</span>
          </div>
        ))}
      </div>
    )}
  </footer>
);

export default Footer;
