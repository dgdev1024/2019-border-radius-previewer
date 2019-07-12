/**
 * @file src/contexts/border-radius.jsx
 * Context in charge of managing the shape's border radius.
 */

import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

const BorderRadiusProvider = ({ children }) => {
  // State Hooks
  const [topLeftX, setTopLeftX] = useState({ mag: 0, unit: 'px' });
  const [topRightX, setTopRightX] = useState({ mag: 0, unit: 'px' });
  const [bottomRightX, setBottomRightX] = useState({ mag: 0, unit: 'px' });
  const [bottomLeftX, setBottomLeftX] = useState({ mag: 0, unit: 'px' });
  const [topLeftY, setTopLeftY] = useState({ mag: 0, unit: 'px' });
  const [topRightY, setTopRightY] = useState({ mag: 0, unit: 'px' });
  const [bottomRightY, setBottomRightY] = useState({ mag: 0, unit: 'px' });
  const [bottomLeftY, setBottomLeftY] = useState({ mag: 0, unit: 'px' });

  // Component Methods
  const getCSS = () => {
    return `${topLeftX.mag}${topLeftX.unit} ${topRightX.mag}${topRightX.unit} ${
      bottomRightX.mag
    }${bottomRightX.unit} ${bottomLeftX.mag}${bottomLeftX.unit} / ${
      topLeftY.mag
    }${topLeftY.unit} ${topRightY.mag}${topRightY.unit} ${bottomRightY.mag}${
      bottomRightY.unit
    } ${bottomLeftY.mag}${bottomLeftY.unit}
    `;
  };

  useEffect(() => console.log(getCSS()));

  // Render Provider
  return (
    <Context.Provider
      value={{
        topLeftX,
        topRightX,
        bottomRightX,
        bottomLeftX,
        setTopLeftX,
        setTopRightX,
        setBottomRightX,
        setBottomLeftX,
        topLeftY,
        topRightY,
        bottomRightY,
        bottomLeftY,
        setTopLeftY,
        setTopRightY,
        setBottomRightY,
        setBottomLeftY,
        getCSS
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default BorderRadiusProvider;
export const BorderRadiusContext = Context;
