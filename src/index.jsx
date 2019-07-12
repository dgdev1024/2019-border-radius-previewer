/**
 * @file src/index.jsx
 * The entry point for our application.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import BorderRadiusProvider from './contexts/border-radius';
import App from './app';
import './styles/main.scss';

// App Structure
const appStructure = (
  <BorderRadiusProvider>
    <App />
  </BorderRadiusProvider>
);

// Mount App
const rootElement = document.getElementById('root');
ReactDOM.render(appStructure, rootElement);
