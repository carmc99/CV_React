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
        className='text-primary-500 hover:text-primary-700 font-bold'
        rel='noopener noreferrer'
      >
        Carlos Medina
      </a>
    </div>
    {social && (
      <div className='flex items-center justify-center ml-2'>
        {social.map((item) => (
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
        ))}
      </div>
    )}
  </footer>
);

export default Footer;
