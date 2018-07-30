import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 10rem;
  background-color: #f4f7fb;
  border-bottom: 1px solid #3057d5;
  color: #152935;
  padding: 0 12.5%;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4.125rem;
  font-weight: 300;
  line-height: 1.25;
  margin-left: -10px;
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <Title>{props.children}</Title>
    </HeaderWrapper>
  );
};

export default Header;
