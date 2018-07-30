import { Link } from '@reach/router';

import React from 'react';
import styled from '../../node_modules/styled-components';

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  margin-left: 2rem;
  text-decoration: none;
  color: #3057d5;
  &:first-of-type {
    margin-left: 0;
  }
`;

const FooterWrapper = styled.footer`
height: 8rem;
background-color: #f4f7fb;
border-top: 1px solid #3057d5;
color: #152935;
padding: 0 12.5%;
display: flex;
align-items: center;
position: fixed;
bottom: 0;
left: 0;
width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper >
      <StyledLink to="/">Landing</StyledLink>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
    </FooterWrapper>
  );
};

export default Footer;
