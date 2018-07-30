import React, { Component } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

const ContentWrapper = styled.div`
  margin: 4rem 12.25%;
  padding: 0;
  padding-bottom: 5rem;
  height: 100%;
`;

export class PageWrapper extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <Header>{this.props.title}</Header>
        <ContentWrapper>{this.props.children}</ContentWrapper>
        <Footer />
      </div>
    );
  }
}

export default PageWrapper;
