import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();