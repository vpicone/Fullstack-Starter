import React, { Component } from 'react';
import PageWrapper from '../../components/PageWrapper';

export default class Landing extends Component {
  render() {
    return (
      <PageWrapper title="Landing">
        <h1>This will be the root page if not logged in. Kind of a marketing/feature list page.</h1>
      </PageWrapper>
    );
  }
}
