import React from 'react';
import { ReactComponent as TwitterIcon } from 'assets/twitter.svg';
import { ReactComponent as GithubIcon } from 'assets/github.svg';
import { ReactComponent as LinkedinIcon } from 'assets/linkedin.svg';

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return (
        <svg width='20%' height='20%'>
          <LinkedinIcon className='footer-social-icon' />
        </svg>
      );
    case 'twitter':
      return (
        <svg width='20%' height='20%'>
          <TwitterIcon className='footer-social-icon' />
        </svg>
      );
    case 'github':
      return (
        <svg width='20%' height='20%'>
          <GithubIcon className='footer-social-icon' />
        </svg>
      );
    default:
      return null;
  }
};

export default SocialIcon;
