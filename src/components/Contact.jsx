import React from 'react';
import { ReactComponent as Phone } from 'assets/phone.svg';
import { ReactComponent as Email } from 'assets/email.svg';
import { ReactComponent as Location } from 'assets/location.svg';

const Contact = ({ field, value }) => (
  <span className='flex my-2 text-primary-900 tracking-widest items-center'>
    {field === 'email' && (
      <>
        <Email className='contact-icon' />
        <a className='contact-link' href={`mailto:${value}`} title='email'>
          {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <Phone className='contact-icon' />
        <a className='contact-link' href={`tel:${value}`} title='phone'>
          {value}
        </a>
      </>
    )}
    {field === 'location' && (
      <>
        <Location className='contact-icon' />
        <span className='contact-link'>{value}</span>
      </>
    )}
  </span>
);

export default Contact;
