import React from 'react';
import { ReactComponent as TwitterIcon } from 'assets/twitter.svg';
import { ReactComponent as GithubIcon } from 'assets/github.svg';
import { ReactComponent as LinkedinIcon } from 'assets/linkedin.svg';

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return <LinkedinIcon className='footer-social-icon' />;
    case 'twitter':
      return <TwitterIcon className='footer-social-icon' />;
    case 'github':
      return <GithubIcon className='footer-social-icon' />;
    default:
      return null;
  }
};

export default SocialIcon;
