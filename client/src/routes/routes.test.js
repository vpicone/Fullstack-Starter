import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard, Landing, Onboarding } from '.';

it('Dashboard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Landing renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Onboarding renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Onboarding />, div);
  ReactDOM.unmountComponentAtNode(div);
});
