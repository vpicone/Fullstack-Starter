import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import { Router } from '@reach/router';

import { Dashboard, Landing } from './routes';

const Root = () => (
  <Router>
    <Landing path="/" />
    <Dashboard path="dashboard" />
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
