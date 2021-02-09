import React from 'react';
import { Link } from 'react-router-dom';

import { Links, FooterComponent, Version } from './styles';

const Footer = () => {
  return (
    <FooterComponent>
      <Links>
        <a href="/">Help</a>
        <a href="/">Partners</a>
        <Link to="/settings">Settings</Link>
      </Links>
      <Version>V 2.0</Version>
    </FooterComponent>
  );
};

export default Footer;
