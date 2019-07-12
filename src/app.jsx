/**
 * @file src/app.jsx
 * The app's primary component.
 */

import React from 'react';
import BorderRadiusControl from './components/border-radius-control';
import BorderRadiusView from './components/border-radius-view';

const App = () => (
  <>
    <header>
      <h1>Border Radius Previewer</h1>
      <p>
        Use the controls below to manipulate the border radius of the square
        shown.
      </p>
    </header>
    <main>
      <BorderRadiusControl />
      <BorderRadiusView />
    </main>
    <footer>
      <p>
        Coded by{' '}
        <a href="https://dgdev1024.glitch.me" target="_blank">
          Dennis Griffin
        </a>
      </p>
    </footer>
  </>
);

export default App;
