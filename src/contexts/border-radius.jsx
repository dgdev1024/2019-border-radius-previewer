/**
 * @file src/contexts/border-radius.jsx
 * Context in charge of managing the shape's border radius.
 */

import React, { useState, createContext } from 'react';

const Context = createContext();

const BorderRadiusProvider = ({ children }) => {
  // State Hooks
  const [topLeft, setTopLeft] = useState({ mag: 0, unit: 'px' });
  const [topRight, setTopRight] = useState({ mag: 0, unit: 'px' });
  const [bottomRight, setBottomRight] = useState({ mag: 0, unit: 'px' });
  const [bottomLeft, setBottomLeft] = useState({ mag: 0, unit: 'px' });

  // Component Methods
  const getCSS = () => {
    return `
        ${topLeft.mag}${topLeft.unit} 
        ${topRight.mag}${topRight.unit} 
        ${bottomRight.mag}${bottomRight.unit}
        ${bottomLeft.mag}${bottomLeft.unit}
    `;
  };

  // Render Provider
  return (
    <Context.Provider
      value={{
        topLeft,
        topRight,
        bottomRight,
        bottomLeft,
        setTopLeft,
        setTopRight,
        setBottomRight,
        setBottomLeft,
        getCSS
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default BorderRadiusProvider;
export const BorderRadiusContext = Context;
