/**
 * @file src/components/border-radius-view.jsx
 * Presents the shape with border radius.
 */

import React, { useContext } from 'react';
import { BorderRadiusContext } from '../contexts/border-radius';

const BorderRadiusView = () => {
  // Context Hooks
  const ctx = useContext(BorderRadiusContext);

  // Border Radius Box Style
  const boxStyle = {
    borderRadius: ctx.getCSS()
  };

  // Render Component
  return (
    <fieldset className="brp-view">
      <legend>Border Radius View</legend>
      <div className="brp-fieldset-flex-container brp-view-container">
        <div className="brp-view-box" style={boxStyle} />
      </div>
    </fieldset>
  );
};

export default BorderRadiusView;
